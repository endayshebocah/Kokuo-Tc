src/App.jsx 
import React, { useState, useEffect, useRef, useCallback, useMemo, useContext, createContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, where, getDocs, writeBatch, Timestamp, setDoc } from 'firebase/firestore';

// =================================================================================
// KONFIGURASI & HELPERS
// =================================================================================

const firebaseConfig = {
  apiKey: "AIzaSyB6NiW14iWhlhIRE8ViXYEOS5SMvGd2Yq4",
  authDomain: "database-parfum-fd2f8.firebaseapp.com",
  projectId: "database-parfum-fd2f8",
  storageBucket: "database-parfum-fd2f8.appspot.com",
  messagingSenderId: "461710865000",
  appId: "1:461710865000:web:fb0d043d07997c986c01dd"
};
const appId = 'hasil-ceking-peserta-kokuo-v2';

const availablePermissions = [
    { key: 'daftarHadir', label: 'Daftar Hadir Peserta' },
    { key: 'tindakLanjut', label: 'Tindak Lanjut' },
    { key: 'hasilKerja', label: 'Hasil Kerja Trainer' }, { key: 'perbaikanData', label: 'Perbaikan Data' },
    { key: 'trash', label: 'Tong Sampah' }, { key: 'hapusBeberapa', label: 'Hapus Beberapa Data' },
    { key: 'izinAkses', label: 'Manajemen Izin Akses', adminOnly: true },
];

const compressImage = (base64Str, maxWidth = 600, maxHeight = 600) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Str;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let { width, height } = img;
            if (width > height) { if (width > maxWidth) { height *= maxWidth / width; width = maxWidth; } } 
            else { if (height > maxHeight) { width *= maxHeight / height; height = maxHeight; } }
            canvas.width = width; canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            resolve(canvas.toDataURL('image/jpeg', 0.7)); 
        };
        img.onerror = (error) => reject(error);
    });
};

const determineDisplayStatus = (record) => {
    if (!record || !record.status) return 'Status Tidak Diketahui';
    const { status, evaluationResult, cekingResult } = record;
    if (status.startsWith('Evaluasi')) {
        const evalName = status.replace('Evaluasi ', '');
        return evaluationResult === 'Lulus' ? `Lulus Evaluasi ${evalName}` : `Masih Tahap Evaluasi ${evalName}`;
    }
    if (status.startsWith('Ceking tahap')) {
         return cekingResult === 'Lulus' ? `Lulus Ceking` : 'Tahap Ceking';
    }
    return status;
};

const getNextCekingStage = (nama, activeRecords) => {
    if (!nama) return "Ceking tahap 1";
    const participantCekingRecords = activeRecords
        .filter(r => r.nama === nama && r.status.match(/Ceking tahap \d+/))
        .map(r => parseInt(r.status.replace('Ceking tahap ', ''), 10))
        .filter(num => !isNaN(num));

    if (participantCekingRecords.length === 0) return "Ceking tahap 1";
    return `Ceking tahap ${Math.max(...participantCekingRecords) + 1}`;
};

const matchesStatusFilter = (record, filter) => {
    if (!filter || filter === 'semua') return true;
    const displayStatus = determineDisplayStatus(record);
    switch (filter) {
        case 'Trainingan': return record.status === 'Trainingan';
        case 'Ceking': return displayStatus === 'Tahap Ceking';
        case 'Lulus': return displayStatus.startsWith('Lulus');
        case 'Resign': return displayStatus === 'Resign';
        default: return true;
    }
};

const matchesEvaluationCategoryFilter = (record, filter) => {
    if (!filter || filter === 'semua') return true;
    return record.status === filter;
};

const formatFirebaseTimestamp = (timestamp) => {
    if (!timestamp || typeof timestamp.toDate !== 'function') return { date: 'N/A', time: 'N/A' };
    const date = timestamp.toDate();
    return {
        date: date.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
        time: date.toLocaleTimeString('en-GB')
    };
};

const formatDateString = (dateString) => {
    if (!dateString) return 'N/A';
    try {
        const date = new Date(`${dateString}T00:00:00Z`); // Gunakan Z untuk UTC agar tidak ada masalah zona waktu
        if (isNaN(date.getTime())) return 'Tanggal Tidak Valid';
        return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    } catch (error) { return 'Gagal Memformat'; }
};

// =================================================================================
// Context API
// =================================================================================
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [db, setDb] = useState(null);
    const [isAuthReady, setIsAuthReady] = useState(false);
    const [isLoginDataReady, setIsLoginDataReady] = useState(false);
    const [records, setRecords] = useState([]);
    const [users, setUsers] = useState([]);
    const [repairRequests, setRepairRequests] = useState([]);
    const [toastMessage, setToastMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [loginStep, setLoginStep] = useState('login');
    const [activityNotifications, setActivityNotifications] = useState([]);
    const [recordToAutoEdit, setRecordToAutoEdit] = useState(null);
    const [lastSaveTimestamp, setLastSaveTimestamp] = useState(null);
    const [appUpdateAvailable, setAppUpdateAvailable] = useState(false);
    const [postSaveAction, setPostSaveAction] = useState(null);
    const [modal, setModal] = useState({ type: null, props: {} });

    const app = useMemo(() => initializeApp(firebaseConfig), []);

    useEffect(() => {
        const firestoreDb = getFirestore(app);
        const auth = getAuth(app);
        setDb(firestoreDb);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) { setIsAuthReady(true); } 
            else { signInAnonymously(auth).catch((error) => console.error("Gagal masuk secara anonim:", error)); }
        });
        return () => unsubscribe();
    }, [app]);

    useEffect(() => {
        if (!db || !isAuthReady) return;
        const recordsQuery = query(collection(db, `artifacts/${appId}/public/data/records`));
        const unsubRecords = onSnapshot(recordsQuery, (snapshot) => setRecords(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
        
        const usersQuery = query(collection(db, `artifacts/${appId}/public/data/users`));
        const unsubUsers = onSnapshot(usersQuery, (snapshot) => {
            setUsers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            if (!isLoginDataReady) {
                setIsLoginDataReady(true);
            }
        });

        const repairQuery = query(collection(db, `artifacts/${appId}/public/data/perbaikan_requests`));
        const unsubRepair = onSnapshot(repairQuery, (snapshot) => setRepairRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
        
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const notificationsQuery = query(collection(db, `artifacts/${appId}/public/data/notifications`), where('createdAt', '>=', Timestamp.fromDate(oneWeekAgo)));
        const unsubNotifications = onSnapshot(notificationsQuery, (snapshot) => {
            const notifs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setActivityNotifications(notifs.sort((a,b) => b.createdAt.toDate() - a.createdAt.toDate()));
        });

        return () => { unsubRecords(); unsubUsers(); unsubRepair(); unsubNotifications(); };
    }, [db, isAuthReady, isLoginDataReady]);

    const showToast = useCallback((message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(''), 3000);
    }, []);

    const openModal = useCallback((type, props = {}) => setModal({ type, props }), []);
    const closeModal = useCallback(() => setModal({ type: null, props: {} }), []);
    
    const value = { db, app, isAuthReady, isLoginDataReady, records, users, repairRequests, showToast, currentUser, setCurrentUser, userRole, setUserRole, loginStep, setLoginStep, activityNotifications, recordToAutoEdit, setRecordToAutoEdit, lastSaveTimestamp, setLastSaveTimestamp, setAppUpdateAvailable, postSaveAction, setPostSaveAction, modal, openModal, closeModal };

    return (
        <AppContext.Provider value={value}>
            {children}
            {toastMessage && <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-[100] animate-fade-in-up">{toastMessage}</div>}
            {appUpdateAvailable && (
                <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg z-[100] animate-fade-in-up">
                    Pembaruan tersedia! <button className="font-bold underline ml-2" onClick={() => window.location.reload()}>Muat Ulang</button>
                </div>
            )}
        </AppContext.Provider>
    );
};


// =================================================================================
// CUSTOM HOOKS
// =================================================================================

const useFirestore = () => {
    const { db, currentUser, showToast } = useContext(AppContext);

    const addOrUpdateRecord = async (recordId, data) => {
        if (!db) return;
        try {
            if (recordId) {
                await updateDoc(doc(db, `artifacts/${appId}/public/data/records`, recordId), { ...data, updatedAt: serverTimestamp(), lastUpdatedByName: currentUser.nama });
                showToast("Data berhasil diperbarui!");
            } else {
                const newRecordRef = await addDoc(collection(db, `artifacts/${appId}/public/data/records`), { ...data, createdAt: serverTimestamp(), createdByName: currentUser.nama, isDeleted: false });
                showToast("Data berhasil ditambahkan!");
                let message = `${currentUser.nama} menambahkan peserta baru: ${data.nama}.`;
                if (data.status?.startsWith("Evaluasi")) {
                    message = `${currentUser.nama} menambahkan data evaluasi untuk ${data.nama}.`;
                } else if (data.status === "Lulus") {
                    message = `${currentUser.nama} menindaklanjuti ${data.nama} sebagai Lulus.`;
                } else if (data.status === "Resign") {
                    message = `${currentUser.nama} mengubah status ${data.nama} menjadi Resign.`;
                }
                await addDoc(collection(db, `artifacts/${appId}/public/data/notifications`), {
                    message: message, type: 'Aktivitas Baru', createdAt: serverTimestamp(),
                    createdBy: currentUser.nama, recordId: newRecordRef.id
                });
            }
            return true;
        } catch (error) {
            showToast("Gagal menyimpan data.");
            console.error("Error saving record:", error);
            return false;
        }
    };
    
    const addRepairRequest = async (requestData) => {
        if (!db) return;
        try {
            await addDoc(collection(db, `artifacts/${appId}/public/data/perbaikan_requests`), { ...requestData, requestedBy: currentUser.nama, requestedAt: serverTimestamp() });
            showToast("Nama duplikat terdeteksi. Permintaan perbaikan telah dikirim ke Admin.");
            return true;
        } catch (error) {
            showToast("Gagal mengirim permintaan perbaikan.");
            return false;
        }
    };

    const resolveRepairRequest = async (requestId) => {
        if (!db) return;
        try {
            await deleteDoc(doc(db, `artifacts/${appId}/public/data/perbaikan_requests`, requestId));
            showToast("Tiket perbaikan telah diselesaikan.");
        } catch (error) {
            showToast("Gagal menyelesaikan tiket perbaikan.");
        }
    };

    const softDeleteRecord = async (recordId, name) => {
        if (!db) return;
        try {
            await updateDoc(doc(db, `artifacts/${appId}/public/data/records`, recordId), { isDeleted: true, updatedAt: serverTimestamp(), lastUpdatedByName: currentUser.nama });
            showToast(`Data untuk "${name}" telah dipindahkan ke tong sampah.`);
        } catch (error) { showToast("Gagal memindahkan data."); }
    };

    const restoreRecord = async (recordId) => {
        if (!db) return;
        try {
            await updateDoc(doc(db, `artifacts/${appId}/public/data/records`, recordId), { isDeleted: false, updatedAt: serverTimestamp() });
            showToast("Data berhasil dipulihkan.");
        } catch (error) { showToast("Gagal memulihkan data."); }
    };
    
    const deleteRecordPermanent = async (recordId, name) => {
        if (!db) return;
        try {
            await deleteDoc(doc(db, `artifacts/${appId}/public/data/records`, recordId));
            showToast(`Data untuk "${name}" telah dihapus permanen.`);
        } catch (error) {
            showToast("Gagal menghapus data secara permanen.");
            console.error("Error permanent delete:", error); // Log error untuk debugging
        }
    };

    const addOrUpdateUser = async (userId, data) => {
        if (!db) return;
        try {
            if (userId) {
                await updateDoc(doc(db, `artifacts/${appId}/public/data/users`, userId), data);
                showToast("Pengguna berhasil diperbarui.");
            } else {
                await addDoc(collection(db, `artifacts/${appId}/public/data/users`), data);
                showToast("Pengguna baru berhasil ditambahkan.");
            }
            return true;
        } catch (error) {
            showToast("Gagal menyimpan data pengguna.");
            return false;
        }
    };
    
    const deleteUser = async (userId, userName) => {
        if (!db) return;
        try {
            await deleteDoc(doc(db, `artifacts/${appId}/public/data/users`, userId));
            showToast(`Pengguna "${userName}" berhasil dihapus.`);
        } catch (error) { showToast("Gagal menghapus pengguna."); }
    };

    const mergeMasterData = async (fieldToFix, incorrectValue, correctValue) => {
        if (!db) return;
        showToast(`Memproses penggabungan untuk "${incorrectValue}"...`);
        
        try {
            const recordsRef = collection(db, `artifacts/${appId}/public/data/records`);
            const q = query(recordsRef, where(fieldToFix, "==", incorrectValue));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                showToast("Tidak ada data yang cocok untuk diperbaiki.");
                return true;
            }

            const batch = writeBatch(db);
            querySnapshot.forEach(docSnapshot => {
                const docRef = doc(db, `artifacts/${appId}/public/data/records`, docSnapshot.id);
                batch.update(docRef, { [fieldToFix]: correctValue });
            });

            await batch.commit();
            showToast(`${querySnapshot.size} data berhasil diperbarui dan digabungkan.`);
            return true;
        } catch (error) {
            console.error("Error merging master data:", error);
            showToast("Gagal menggabungkan data.");
            return false;
        }
    };

    return { addOrUpdateRecord, addRepairRequest, resolveRepairRequest, softDeleteRecord, restoreRecord, deleteRecordPermanent, addOrUpdateUser, deleteUser, mergeMasterData };
};

const useRecords = (searchTerm, selectedBranchFilter) => {
    const { records } = useContext(AppContext);

    const allRecords = useMemo(() => records, [records]);
    const activeRecords = useMemo(() => allRecords.filter(r => !r.isDeleted), [allRecords]);
    const deletedRecords = useMemo(() => allRecords.filter(r => r.isDeleted), [allRecords]);

    const uniqueLatestRecords = useMemo(() => {
        const groupedByName = activeRecords.reduce((acc, record) => {
            if (!acc[record.nama]) acc[record.nama] = [];
            acc[record.nama].push(record);
            return acc;
        }, {});
        return Object.values(groupedByName).map(userRecords => 
            userRecords.sort((a, b) => (b.updatedAt?.toDate() || b.createdAt?.toDate() || 0) - (a.updatedAt?.toDate() || a.createdAt?.toDate() || 0))[0]
        );
    }, [activeRecords]);
    
    const recordsWithPhotos = useMemo(() => {
        const photoMap = new Map();
        activeRecords.slice().sort((a,b) => (a.createdAt?.toDate() || 0) - (b.createdAt?.toDate() || 0)).forEach(record => {
            if (record.nama && record.photo && !photoMap.has(record.nama)) {
                photoMap.set(record.nama, record.photo);
            }
        });
        return uniqueLatestRecords.map(record => ({ ...record, photo: photoMap.get(record.nama) || record.photo }));
    }, [activeRecords, uniqueLatestRecords]);

    const searchedRecords = useMemo(() => recordsWithPhotos.filter(record => 
        record.nama.toLowerCase().includes(searchTerm.toLowerCase())
    ), [recordsWithPhotos, searchTerm]);
    
    const filteredRecords = useMemo(() => {
        if (selectedBranchFilter === 'semua') return searchedRecords;
        return searchedRecords.filter(r => r.turunKeCabang === selectedBranchFilter || r.cabang === selectedBranchFilter || r.trainganDari === selectedBranchFilter);
    }, [searchedRecords, selectedBranchFilter]);

    const allFilterOptions = useMemo(() => {
        const branches = [...new Set(recordsWithPhotos.map(r => r.turunKeCabang || r.cabang).filter(Boolean))];
        const tcs = [...new Set(recordsWithPhotos.map(r => r.trainganDari).filter(Boolean))];
        return { cabang: branches.sort(), tc: tcs.sort() };
    }, [recordsWithPhotos]);
    
    const attendanceParticipants = useMemo(() => {
        return uniqueLatestRecords.filter(p => p.status === 'Trainingan' || p.status.startsWith('Ceking tahap'));
    }, [uniqueLatestRecords]);

    return { allRecords, activeRecords, deletedRecords, uniqueLatestRecords, filteredRecords, allFilterOptions, attendanceParticipants };
};

const useForm = (initialState, uniqueLatestRecords, allRecords) => {
    const [formValues, setFormValues] = useState(initialState);
    const [recordToEdit, setRecordToEdit] = useState(null);
    const [nameSuggestions, setNameSuggestions] = useState([]);

    const handleFormInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues(prev => ({ ...prev, [name]: value }));
        if (name === 'nama' && value.trim() !== '') {
            const filtered = uniqueLatestRecords.filter(record => record.nama.toLowerCase().includes(value.toLowerCase()));
            setNameSuggestions(filtered);
        } else {
            setNameSuggestions([]);
        }
    }, [uniqueLatestRecords]);

    const handleSuggestionClick = useCallback((record) => {
        const firstRecordWithPhoto = allRecords
            .filter(r => r.nama === record.nama && r.photo)
            .sort((a, b) => (a.createdAt?.toDate() || 0) - (b.createdAt?.toDate() || 0))[0];

        setFormValues({
            ...initialState,
            nama: record.nama,
            photo: firstRecordWithPhoto ? firstRecordWithPhoto.photo : (record.photo || null),
        });
        setRecordToEdit(null);
        setNameSuggestions([]);
    }, [allRecords, initialState]);

    const resetForm = useCallback(() => {
        setRecordToEdit(null);
        setFormValues(initialState);
    }, [initialState]);

    return { formValues, setFormValues, recordToEdit, setRecordToEdit, nameSuggestions, setNameSuggestions, handleFormInputChange, handleSuggestionClick, resetForm };
};

const useReports = (onEditParticipant, activeRecords) => {
    const { db, records, showToast, openModal } = useContext(AppContext);
    const firestore = useFirestore();

    const handleFetchFollowUp = useCallback((startDate, endDate) => {
        if (!startDate || !endDate) { showToast("Silakan pilih rentang tanggal."); return; }
        const start = new Date(`${startDate}T00:00:00`);
        const end = new Date(`${endDate}T23:59:59`);
        const evaluationRecords = records.filter(r => r.status?.startsWith('Evaluasi') && r.tgl && new Date(r.tgl) >= start && new Date(r.tgl) <= end);
        const byBranch = evaluationRecords.reduce((acc, record) => {
            const branch = record.cabang || 'Lainnya';
            if (!acc[branch]) acc[branch] = {};
            if (!acc[branch][record.status]) acc[branch][record.status] = [];
            acc[branch][record.status].push({ nama: record.nama, evaluator: record.createdByName || 'N/A', tanggal: formatDateString(record.tgl) });
            return acc;
        }, {});
        openModal('followUpDetails', { data: byBranch });
    }, [records, showToast, openModal]);

    const handleShowTrainerDetail = useCallback((trainerName, allRecordsInRange) => {
        const trainerRecords = allRecordsInRange.filter(r => r.createdByName === trainerName);
        const workDataByBranch = trainerRecords.reduce((acc, record) => {
            const branch = record.cabang || record.turunKeCabang || record.trainganDari || 'Lainnya';
            if (!acc[branch]) acc[branch] = [];
            acc[branch].push(record);
            return acc;
        }, {});
        openModal('trainerWorkDetail', { trainerName, workData: workDataByBranch });
    }, [openModal]);

    const handleFetchTrainerPerformanceByDate = useCallback((startDate, endDate) => {
        if (!startDate || !endDate) { showToast("Silakan pilih rentang tanggal."); return; }
        const start = new Date(`${startDate}T00:00:00`);
        const end = new Date(`${endDate}T23:59:59`);
        
        const relevantRecords = records.filter(r => {
            const recordDate = r.createdAt?.toDate();
            return r.createdByName && recordDate >= start && recordDate <= end;
        });

        const performance = relevantRecords.reduce((acc, record) => {
            const trainer = record.createdByName;
            if (!acc[trainer]) { acc[trainer] = { total: 0, types: new Set() }; }
            acc[trainer].total++;
            acc[trainer].types.add(record.status.startsWith('Ceking') ? 'Ceking' : record.status);
            return acc;
        }, {});
        const performanceArray = Object.entries(performance).map(([trainerName, data]) => ({
            trainerName, total: data.total,
            summary: Array.from(data.types).slice(0, 2).join(', ') + (data.types.size > 2 ? '...' : '')
        })).sort((a, b) => b.total - a.total);
        
        openModal('trainerPerformanceList', { 
            performanceData: performanceArray, 
            onSelectTrainer: (trainerName) => handleShowTrainerDetail(trainerName, relevantRecords) 
        });
    }, [records, openModal, handleShowTrainerDetail, showToast]);

    const handleConfirmBulkDelete = useCallback(async (idsToDelete) => {
        if (!db) return;
        showToast(`Menghapus ${idsToDelete.length} data...`);
        const batch = writeBatch(db);
        idsToDelete.forEach(id => {
            const docRef = doc(db, `artifacts/${appId}/public/data/records`, id);
            batch.delete(docRef);
        });
        try {
            await batch.commit();
            showToast(`${idsToDelete.length} data berhasil dihapus secara permanen.`);
            openModal(null); // Menutup semua modal
        } catch (error) {
            showToast("Gagal menghapus data.");
            console.error("Error performing bulk delete: ", error);
        }
    }, [db, showToast, openModal]);

    const handleFetchForBulkDelete = useCallback(async (startDate, endDate) => {
        if (!db || !startDate || !endDate) { showToast("Silakan pilih rentang tanggal yang valid."); return; }
        showToast("Mengambil data untuk dihapus...");
        const start = new Date(`${startDate}T00:00:00`);
        const end = new Date(`${endDate}T23:59:59`);
        const q = query(collection(db, `artifacts/${appId}/public/data/records`), where('createdAt', '>=', Timestamp.fromDate(start)), where('createdAt', '<=', Timestamp.fromDate(end)));
        try {
            const querySnapshot = await getDocs(q);
            const fetchedRecords = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            openModal('bulkDeleteData', { records: fetchedRecords, onConfirmDelete: handleConfirmBulkDelete });
            showToast(`${fetchedRecords.length} data ditemukan.`);
        } catch (error) {
            showToast("Gagal mengambil data.");
            console.error("Error fetching data for bulk delete: ", error);
        }
    }, [db, showToast, openModal, handleConfirmBulkDelete]);

    return {
        handleFetchFollowUp,
        handleFetchTrainerPerformanceByDate,
        handleFetchForBulkDelete
    };
};


// =================================================================================
// KOMPONEN-KOMPONEN UI
// =================================================================================

const LoadingSpinner = () => (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white text-2xl">
        <svg className="animate-spin h-12 w-12 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="mt-4 text-lg text-gray-400">Memuat data...</p>
    </div>
);

const ConfirmationDialog = ({ show, onClose, onConfirm, title, message, confirmText }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[80] p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-sm space-y-4 border-2 border-yellow-500" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-bold text-center text-yellow-300">{title}</h3>
                <p className="text-center text-gray-300">{message}</p>
                <div className="flex justify-center gap-4 pt-4">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Batal</button>
                    <button onClick={onConfirm} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">{confirmText}</button>
                </div>
            </div>
        </div>
    );
};

const CekingCard = React.memo(({ record, onCardClick }) => {
    const displayStatus = determineDisplayStatus(record);
    const isLulus = displayStatus.startsWith('Lulus');
    const isResign = displayStatus === 'Resign';
    let statusStyle = 'text-yellow-400';
    if (isLulus) statusStyle = 'text-green-400';
    if (isResign) statusStyle = 'text-red-400';

    return (
        <div className={`bg-black rounded-xl shadow-neumorphic p-3 flex flex-col justify-between transition-all hover:scale-105 relative overflow-hidden w-44 flex-shrink-0`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isLulus ? 'bg-green-500' : isResign ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
            <div className="pl-3 h-full">
                <div className="cursor-pointer h-full flex flex-col" onClick={() => onCardClick(record)}>
                    <div className="w-full h-24 rounded-md bg-gray-700 flex items-center justify-center mb-2 overflow-hidden flex-shrink-0">
                        {record.photo ? <img src={record.photo} alt={record.nama} className="w-full h-full object-cover"/> : <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>}
                    </div>
                    <div className="flex flex-col justify-start flex-grow">
                        <h3 className="text-base font-bold text-blue-300 truncate">{record.nama}</h3>
                        <p className="text-xs text-gray-300 mt-1"><strong>Trainer:</strong> {record.trainer || '-'}</p>
                        <p className="text-xs text-gray-300"><strong>Tgl Terakhir:</strong> {formatDateString(record.tanggalLulus || record.tgl)}</p>
                        <p className="text-xs text-gray-300"><strong>Status:</strong> <span className={`font-semibold ${statusStyle}`}>{displayStatus}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
});

const ParticipantDetailView = ({ participant, allRecords, onClose, onEdit, onDelete }) => {
    const { userRole, showToast, db } = useContext(AppContext);
    const [activeTab, setActiveTab] = useState('rincian');
    const [showAssessmentHistory, setShowAssessmentHistory] = useState(false);
    const [attendanceHistory, setAttendanceHistory] = useState([]);
    const [historyLoading, setHistoryLoading] = useState(false);

    const participantHistory = useMemo(() => {
        return allRecords
            .filter(r => r.nama === participant.nama && !r.isDeleted)
            .sort((a, b) => (a.createdAt?.toDate() || 0) - (b.createdAt?.toDate() || 0));
    }, [allRecords, participant.nama]);
    
    const fullHistory = useMemo(() => {
        if (!participant.nama) return [];
        return allRecords
            .filter(r => r.nama === participant.nama && !r.isDeleted)
            .sort((a, b) => {
                const dateA = a.updatedAt?.toDate() || a.createdAt?.toDate() || 0;
                const dateB = b.updatedAt?.toDate() || b.createdAt?.toDate() || 0;
                return new Date(dateB) - new Date(dateA);
            });
    }, [participant.nama, allRecords]);

    const assessmentHistory = useMemo(() => {
        return allRecords
            .filter(r => r.nama === participant.nama && !r.isDeleted && r.penilaian)
            .sort((a, b) => (b.updatedAt?.toDate() || b.createdAt?.toDate() || 0) - (a.updatedAt?.toDate() || a.createdAt?.toDate() || 0));
    }, [allRecords, participant.nama]);

    const timelineSteps = useMemo(() => {
        const steps = new Set();
        participantHistory.forEach(rec => {
            if (rec.status === 'Trainingan') steps.add('Trainingan');
            if (rec.status.startsWith('Ceking tahap')) steps.add(rec.status);
            if (rec.status === 'Lulus') steps.add('Lulus');
            if (rec.status.startsWith('Evaluasi')) steps.add(rec.status);
        });
        const sortedSteps = Array.from(steps);
        sortedSteps.sort((a, b) => {
            const order = ['Trainingan', 'Ceking tahap 1', 'Ceking tahap 2', 'Ceking tahap 3', 'Lulus', 'Evaluasi Reflexology', 'Evaluasi Athletic Massage', 'Evaluasi Seitai'];
            return order.indexOf(a) - order.indexOf(b);
        });
        return sortedSteps;
    }, [participantHistory]);
    
    const getRecordForStep = (step) => {
        if (step === 'Lulus') return participantHistory.find(r => r.status === 'Lulus');
        return participantHistory.find(r => r.status === step);
    };

    const [activeRecord, setActiveRecord] = useState(participant);
    
    const assessmentFields = [
        { key: 'ketepatanWaktu', label: 'Ketepatan Waktu/Attitude' },
        { key: 'bagianKaki', label: 'Bagian Kaki/Face Down' },
        { key: 'bagianTangan', label: 'Bagian Tangan/Face Up' },
        { key: 'bagianPunggung', label: 'Bagian Punggung/Side Lying' },
        { key: 'bagianPundak', label: 'Bagian Pundak/Adjustment' },
        { key: 'catatan', label: 'Catatan Tambahan' },
    ];

    const showAttendanceTab = useMemo(() => {
        const latestStatus = participant.status;
        return latestStatus === 'Trainingan' || latestStatus.startsWith('Ceking tahap');
    }, [participant.status]);

    useEffect(() => {
        if (!showAttendanceTab && activeTab === 'hadir') {
            setActiveTab('rincian');
        }
    }, [showAttendanceTab, activeTab]);
    
    useEffect(() => {
        if (activeTab !== 'hadir' || !db || !participant.nama) return;
        
        const fetchHistory = async () => {
            setHistoryLoading(true);
            try {
                const q = query(collection(db, `artifacts/${appId}/public/data/attendance`), where("participantName", "==", participant.nama));
                const querySnapshot = await getDocs(q);
                const fetchedHistory = querySnapshot.docs.map(doc => doc.data());
                fetchedHistory.sort((a, b) => b.date.toDate() - a.date.toDate());
                setAttendanceHistory(fetchedHistory);
            } catch (error) {
                console.error("Error fetching attendance history: ", error);
                showToast("Gagal memuat riwayat kehadiran.");
            } finally {
                setHistoryLoading(false);
            }
        };
        fetchHistory();
    }, [activeTab, db, participant.nama, showToast]);

    const handleTimelineClick = (step) => {
        const recordForStep = getRecordForStep(step);
        if (recordForStep) {
            setActiveRecord(recordForStep);
            setShowAssessmentHistory(false);
            setActiveTab('rincian');
        } else {
            showToast(`Data untuk tahap "${step}" tidak ditemukan.`);
        }
    };
    
    const handleWorkDuration = () => {
        const allParticipantRecords = allRecords.filter(r => r.nama === participant.nama && !r.isDeleted);
        const firstRecord = allParticipantRecords.sort((a,b) => (a.createdAt?.toDate() || 0) - (b.createdAt?.toDate() || 0))[0];
        const resignRecord = allParticipantRecords.find(r => r.status === 'Resign');
        
        if (!firstRecord || !firstRecord.tanggalMasuk) {
            showToast("Tanggal masuk tidak ditemukan.");
            return;
        }

        const startDate = new Date(firstRecord.tanggalMasuk);
        const endDate = resignRecord && resignRecord.tanggalResign ? new Date(resignRecord.tanggalResign) : new Date();
        
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
        let days = endDate.getDate() - startDate.getDate();

        if (days < 0) { months--; days += new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate(); }
        if (months < 0) { years--; months += 12; }
        
        showToast(`Masa kerja: ${years} tahun, ${months} bulan, ${days} hari.`);
    };

    const renderRincianTab = () => {
        const { status, nama, kotaAsal, tanggalMasuk, refrensi, trainganDari, trainer, tahapCeking, tgl, tanggalLulus, turunKeCabang, accYangMeluluskan, cabang } = activeRecord;
        let details;
        if (status === 'Trainingan') {
            details = (<>
                <p><strong className="text-gray-400">Nama:</strong> {nama || '-'}</p>
                <p><strong className="text-gray-400">Status:</strong> {status || '-'}</p>
                <p><strong className="text-gray-400">Kota Asal:</strong> {kotaAsal || '-'}</p>
                <p><strong className="text-gray-400">Tanggal Masuk:</strong> {formatDateString(tanggalMasuk)}</p>
                <p><strong className="text-gray-400">Refrensi:</strong> {refrensi || '-'}</p>
                <p><strong className="text-gray-400">Training Dari:</strong> {trainganDari || '-'}</p>
            </>);
        } else if (status.startsWith('Ceking tahap')) {
             details = (<>
                <p><strong className="text-gray-400">Nama:</strong> {nama || '-'}</p>
                <p><strong className="text-gray-400">Status:</strong> {activeRecord.cekingResult === 'Lulus' ? `Lulus ${status}` : `Masih ${status}`}</p>
                <p><strong className="text-gray-400">Trainer:</strong> {trainer || '-'}</p>
                <p><strong className="text-gray-400">Tahap Ceking:</strong> {tahapCeking || status}</p>
                <p><strong className="text-gray-400">Tanggal Ceking:</strong> {formatDateString(tgl)}</p>
                <p><strong className="text-gray-400">Training Dari:</strong> {trainganDari || '-'}</p>
            </>);
        } else if (status === 'Lulus') {
            details = (<>
                <p><strong className="text-gray-400">Nama:</strong> {nama || '-'}</p>
                <p><strong className="text-gray-400">Status:</strong> {status || '-'}</p>
                <p><strong className="text-gray-400">Trainer:</strong> {trainer || '-'}</p>
                <p><strong className="text-gray-400">Tahap Ceking:</strong> {tahapCeking || '-'}</p>
                <p><strong className="text-gray-400">Tanggal Lulus:</strong> {formatDateString(tanggalLulus)}</p>
                <p><strong className="text-gray-400">Turun ke Cabang:</strong> {turunKeCabang || '-'}</p>
                <p><strong className="text-gray-400">Acc Yang Meluluskan:</strong> {accYangMeluluskan || '-'}</p>
                <p><strong className="text-gray-400">Training Dari:</strong> {trainganDari || '-'}</p>
            </>);
        } else if (status.startsWith('Evaluasi')) {
            details = (<>
                <p><strong className="text-gray-400">Nama:</strong> {nama || '-'}</p>
                <p><strong className="text-gray-400">Status:</strong> {determineDisplayStatus(activeRecord)}</p>
                <p><strong className="text-gray-400">Trainer:</strong> {trainer || '-'}</p>
                <p><strong className="text-gray-400">Tahap Ceking:</strong> {tahapCeking || '-'}</p>
                <p><strong className="text-gray-400">Tanggal Evaluasi:</strong> {formatDateString(tgl)}</p>
                <p><strong className="text-gray-400">Cabang:</strong> {cabang || '-'}</p>
            </>);
        } else {
             details = <p>Rincian tidak tersedia untuk status ini.</p>;
        }

        return (
            <>
                <h2 className="text-xl font-bold text-white mb-4 text-center">Rincian Peserta - <span className="text-yellow-300">{determineDisplayStatus(activeRecord)}</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4 text-gray-300">{details}</div>
                <div className="horizontal-scroll-container flex overflow-x-auto gap-2 p-1 mb-4">
                    {timelineSteps.map(step => (<button key={step} onClick={() => handleTimelineClick(step)} className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap ${activeRecord.status === step ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'}`}>{step}</button>))}
                </div>
                {showAssessmentHistory && (
                    <div className="my-4 p-4 bg-gray-900/50 rounded-lg max-h-64 overflow-y-auto">
                        <h3 className="text-lg font-semibold text-purple-300 mb-3 text-center">Riwayat Penilaian</h3>
                        <div className="space-y-4 pr-2">
                            {assessmentHistory.length > 0 ? (
                                assessmentHistory.map(record => (
                                    <div key={record.id} className="bg-gray-800/70 p-3 rounded-lg">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h4 className="font-bold text-base text-white">{determineDisplayStatus(record)}</h4>
                                            <p className="text-xs text-blue-300">{formatFirebaseTimestamp(record.updatedAt || record.createdAt).date}</p>
                                        </div>
                                        {record.penilaian?.ratings ? (
                                            <>
                                                <div className="space-y-2 text-sm mb-3">
                                                    {Object.entries(record.penilaian.ratings).map(([key, value]) => value && (
                                                        <div key={key} className="border-b border-gray-700 py-1">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                                                                <span className={`font-semibold px-2 py-0.5 rounded-full text-xs ${value === 'Baik' ? 'bg-green-500/50 text-green-200' : value === 'Cukup' ? 'bg-yellow-500/50 text-yellow-200' : 'bg-red-500/50 text-red-200'}`}>{value}</span>
                                                            </div>
                                                            {record.penilaian.manualNotes?.[key] && (
                                                                <p className="text-xs text-gray-300 mt-1 pl-2 border-l-2 border-gray-600">
                                                                    Catatan: {record.penilaian.manualNotes[key]}
                                                                </p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                                {record.penilaian.catatan && (
                                                     <div className="mt-2 pt-2 border-t border-gray-600">
                                                        <p className="text-sm font-semibold text-purple-300 mb-1">Ulasan Akhir:</p>
                                                        <p className="text-sm text-white bg-black/20 p-2 rounded-md">{record.penilaian.catatan}</p>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <div className="space-y-1 text-sm">
                                                {assessmentFields.map(field => (
                                                    record.penilaian[field.key] && (
                                                        <div key={field.key} className="flex justify-between border-b border-gray-700 py-1 text-xs">
                                                            <span className="text-gray-400">{field.label}:</span>
                                                            <span className="text-white text-right">{record.penilaian[field.key]}</span>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-center p-8 text-gray-400">Tidak ada riwayat penilaian ditemukan.</p>
                            )}
                        </div>
                    </div>
                )}
            </>
        );
    };
    
    const renderHadirTab = () => (
        <div className="max-h-96 overflow-y-auto">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Riwayat Daftar Hadir</h2>
            {historyLoading ? (<p className="text-center p-8 text-gray-400">Memuat riwayat...</p>) : attendanceHistory.length > 0 ? (
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-900 sticky top-0"><tr><th className="p-2 font-semibold text-gray-300">Tanggal</th><th className="p-2 font-semibold text-gray-300">Status</th><th className="p-2 font-semibold text-gray-300">Keterangan</th></tr></thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {attendanceHistory.map((item, index) => (<tr key={index} className="hover:bg-gray-700/50"><td className="p-2 whitespace-nowrap">{formatFirebaseTimestamp(item.date).date}</td><td className="p-2 whitespace-nowrap">{item.attendanceStatus}</td><td className="p-2">{item.notes || '-'}</td></tr>))}
                    </tbody>
                </table>) : (<p className="text-center p-8 text-gray-400">Tidak ada riwayat kehadiran ditemukan.</p>)}
        </div>
    );
    
    const renderLengkapTab = () => (
        <div className="max-h-96 overflow-y-auto pr-2">
            <h2 className="text-xl font-bold text-white mb-4 text-center">Riwayat Lengkap</h2>
            <div className="space-y-3">
                {fullHistory.length > 0 ? fullHistory.map((record) => (
                    <div key={record.id} className="bg-gray-900/70 p-3 rounded-lg">
                        <p className="font-bold text-lg text-white">{determineDisplayStatus(record)}</p>
                        <p className="text-sm text-blue-300">{formatFirebaseTimestamp(record.updatedAt || record.createdAt).date}</p>
                        <p className="text-xs text-gray-400 mt-1">Diperbarui oleh: {record.lastUpdatedByName || record.createdByName || 'N/A'}</p>
                    </div>
                )) : (<p className="text-center p-8 text-gray-400">Tidak ada riwayat ditemukan.</p>)}
            </div>
        </div>
    );

    if (!participant) return null;
    
    return (
        <div className="mt-6 bg-gray-800 rounded-xl shadow-neumorphic w-full overflow-hidden border-2 border-blue-500 animate-fade-in-up-view">
            <div className="w-full h-80 bg-black flex items-center justify-center p-2 rounded-t-xl">
                {activeRecord.photo ? <img src={activeRecord.photo} alt={activeRecord.nama} className="max-w-full max-h-full object-contain" /> : <span className="text-gray-500">Tidak ada foto</span>}
            </div>
            <div className={`grid ${showAttendanceTab ? 'grid-cols-3' : 'grid-cols-2'}`}>
                {showAttendanceTab && (
                    <button onClick={() => setActiveTab('hadir')} className={`py-3 text-sm font-semibold border-b-2 ${activeTab === 'hadir' ? 'bg-indigo-600 border-indigo-400' : 'bg-gray-700 border-transparent hover:bg-gray-600'}`}>Riwayat Daftar Hadir</button>
                )}
                <button onClick={() => setActiveTab('rincian')} className={`py-3 text-sm font-semibold border-b-2 ${activeTab === 'rincian' ? 'bg-indigo-600 border-indigo-400' : 'bg-gray-700 border-transparent hover:bg-gray-600'}`}>Rincian</button>
                <button onClick={() => setActiveTab('lengkap')} className={`py-3 text-sm font-semibold border-b-2 ${activeTab === 'lengkap' ? 'bg-indigo-600 border-indigo-400' : 'bg-gray-700 border-transparent hover:bg-gray-600'}`}>Riwayat Lengkap</button>
            </div>
            <div className="p-4 md:p-6">
                {activeTab === 'rincian' && renderRincianTab()}
                {showAttendanceTab && activeTab === 'hadir' && renderHadirTab()}
                {activeTab === 'lengkap' && renderLengkapTab()}
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                    <div className="flex flex-wrap gap-2">
                       {activeRecord.status === 'Trainingan' && <button onClick={handleWorkDuration} className="px-3 py-2 text-xs bg-green-600 rounded-lg hover:bg-green-700">Masa Kerja</button>}
                       <button onClick={() => setShowAssessmentHistory(p => !p)} className="px-3 py-2 text-xs bg-purple-600 rounded-lg hover:bg-purple-700">
                           {showAssessmentHistory ? 'Sembunyikan Penilaian' : 'Tampilkan Penilaian'}
                       </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                       <button title="Edit" onClick={() => { onEdit(activeRecord); onClose(); }} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg></button>
                       {userRole === 'admin' && (
                            <button title="Hapus" onClick={() => { onDelete(activeRecord.id, activeRecord.nama); onClose(); }} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg></button>
                       )}
                       <button onClick={onClose} className="px-6 py-2 text-sm bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700">Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EvaluationCard = React.memo(({ record, onFollowUp, onCardClick }) => {
    const displayStatus = determineDisplayStatus(record);
    
    const lastDateStr = record.tanggalLulus || record.tgl;
    let dueDateText = 'N/A';
    if (lastDateStr) {
        const lastDate = new Date(`${lastDateStr}T00:00:00Z`);
        if (!isNaN(lastDate.getTime())) {
            const dueDate = new Date(lastDate);
            dueDate.setMonth(dueDate.getMonth() + 3);
            dueDateText = dueDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
        }
    }

    return (
        <div className={`bg-black rounded-xl shadow-neumorphic p-3 flex flex-col justify-between transition-all hover:scale-105 relative overflow-hidden w-44 flex-shrink-0`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500`}></div>
            <div className="pl-3 flex flex-col h-full">
                <div className="flex-grow cursor-pointer" onClick={() => onCardClick(record)}>
                     <div className="w-full h-24 rounded-md bg-gray-700 flex items-center justify-center mb-2 overflow-hidden">
                        {record.photo ? <img src={record.photo} alt={record.nama} className="w-full h-full object-cover"/> : <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>}
                    </div>
                    <h3 className="text-base font-bold text-blue-300 truncate">{record.nama}</h3>
                    <p className="text-xs text-gray-300 mt-1"><strong>Cabang:</strong> {record.turunKeCabang || record.cabang || '-'}</p>
                    <p className="text-xs text-gray-300"><strong>Status Saat Ini:</strong> <span className={`font-semibold text-yellow-400`}>{displayStatus}</span></p>
                    <p className="text-xs text-gray-300"><strong>Jatuh Tempo:</strong> <span className="font-bold text-red-400">{dueDateText}</span></p>
                </div>
                <div className="flex justify-end gap-1 mt-2">
                    <button title="Tindak Lanjut Evaluasi" onClick={() => onFollowUp(record)} className="w-full px-3 py-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow-inner-custom text-xs font-semibold">Tindak Lanjut</button>
                </div>
            </div>
        </div>
    );
});

const NotificationBellPopup = ({ onClose, evaluationNotifications, activityNotifications }) => {
    return (
        <div className="absolute top-full right-0 mt-2 w-80 bg-gray-700 rounded-lg shadow-lg z-30 border border-gray-600 p-2 space-y-2 max-h-96 overflow-y-auto">
            {activityNotifications.length > 0 && (
                <>
                    <h3 className="text-lg font-bold text-white px-2 pt-1">Aktivitas Baru</h3>
                    {activityNotifications.map(item => (
                        <div key={item.id} className="bg-gray-800 p-3 rounded-md">
                            <p className="text-sm text-gray-200">{item.message}</p>
                            <p className="text-xs text-gray-400 text-right mt-1">{formatFirebaseTimestamp(item.createdAt).date}</p>
                        </div>
                    ))}
                    <div className="border-t border-gray-600 my-2"></div>
                </>
            )}

            {evaluationNotifications.length > 0 && (
                <>
                    <h3 className="text-lg font-bold text-white px-2">Jadwal Evaluasi</h3>
                    {evaluationNotifications.map(item => (
                        <div key={item.id} className="bg-gray-800 p-3 rounded-md">
                            <p className="font-semibold text-blue-300">{item.nama}</p>
                            <p className="text-sm text-gray-300">Jadwal: <span className="font-medium text-yellow-400">{item.nextEvaluation}</span></p>
                            <p className="text-xs text-gray-400">Jatuh Tempo: {item.dueDate.toLocaleDateString('id-ID', {day: 'numeric', month: 'long'})}</p>
                        </div>
                    ))}
                </>
            )}
            
            {evaluationNotifications.length === 0 && activityNotifications.length === 0 && (
                 <p className="text-gray-400 text-center py-4">Tidak ada notifikasi.</p>
            )}
        </div>
    );
};


const BulkDeleteDateRangePopup = ({ onClose, onFetch }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-red-500" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-center text-red-300">Pilih Rentang Data untuk Dihapus</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Tanggal Mulai</label>
                        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full input-rounded-border" />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Tanggal Selesai</label>
                        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full input-rounded-border" />
                    </div>
                </div>
                <button onClick={() => onFetch(startDate, endDate)} className="w-full px-6 py-3 bg-red-600 text-white font-bold rounded-xl text-lg hover:bg-red-700 shadow-neumorphic">Tampilkan Data</button>
                <button onClick={onClose} className="w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700">Tutup</button>
            </div>
        </div>
    );
};

const BulkDeleteDataPopup = ({ onClose, records, onConfirmDelete }) => {
    const [selectedIds, setSelectedIds] = useState(new Set());

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = new Set(records.map(r => r.id));
            setSelectedIds(allIds);
        } else {
            setSelectedIds(new Set());
        }
    };

    const handleSelectOne = (id) => {
        const newSelectedIds = new Set(selectedIds);
        if (newSelectedIds.has(id)) {
            newSelectedIds.delete(id);
        } else {
            newSelectedIds.add(id);
        }
        setSelectedIds(newSelectedIds);
    };

    const handleDelete = () => {
        if (selectedIds.size === 0) {
            return;
        }
        onConfirmDelete(Array.from(selectedIds));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-4xl border-2 border-red-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-center text-red-300 mb-4 flex-shrink-0">Hapus Data Secara Massal</h2>
                <div className="flex-grow overflow-auto rounded-lg">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-900 sticky top-0">
                            <tr>
                                <th className="p-3">
                                    <input type="checkbox" onChange={handleSelectAll} checked={records.length > 0 && selectedIds.size === records.length} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-500 focus:ring-red-600" />
                                </th>
                                <th className="p-3 font-semibold text-gray-300">Nama</th>
                                <th className="p-3 font-semibold text-gray-300">Status</th>
                                <th className="p-3 font-semibold text-gray-300">Tanggal Dibuat</th>
                                <th className="p-3 font-semibold text-gray-300">Dibuat Oleh</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {records.length > 0 ? records.map(record => (
                                <tr key={record.id} className={`hover:bg-gray-700/50 ${selectedIds.has(record.id) ? 'bg-red-900/30' : ''}`}>
                                    <td className="p-3">
                                        <input type="checkbox" checked={selectedIds.has(record.id)} onChange={() => handleSelectOne(record.id)} className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-red-500 focus:ring-red-600" />
                                    </td>
                                    <td className="p-3 whitespace-nowrap">{record.nama}</td>
                                    <td className="p-3 whitespace-nowrap">{determineDisplayStatus(record)}</td>
                                    <td className="p-3 whitespace-nowrap">{formatFirebaseTimestamp(record.createdAt).date}</td>
                                    <td className="p-3 whitespace-nowrap">{record.createdByName || '-'}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={5} className="text-center p-8 text-gray-400">Tidak ada data untuk rentang tanggal yang dipilih.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4 flex-shrink-0">
                    <p className="text-sm text-gray-400">{selectedIds.size} data terpilih</p>
                    <div>
                        <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 mr-3">Tutup</button>
                        <button onClick={handleDelete} disabled={selectedIds.size === 0} className="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 disabled:bg-red-900 disabled:cursor-not-allowed">Hapus Data</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TrainerPerformanceListPopup = ({ onClose, performanceData, onSelectTrainer }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4" onClick={onClose}>
        <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-green-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-center text-green-300 mb-4">Laporan Kinerja Pengguna</h2>
            <div className="flex-grow overflow-auto space-y-3 pr-2">
                {performanceData.map(({ trainerName, total, summary }) => (
                    <div key={trainerName} onClick={() => onSelectTrainer(trainerName)} className="bg-gray-900/70 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-700 transition-colors">
                        <div>
                            <h3 className="font-bold text-lg text-white">{trainerName}</h3>
                            <p className="text-xs text-gray-400">{summary}</p>
                        </div>
                        <span className="text-2xl font-bold text-green-400">{total}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0 flex justify-end">
                <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Tutup</button>
            </div>
        </div>
    </div>
);

const TrainerWorkDetailPopup = ({ onClose, trainerName, workData }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4" onClick={onClose}>
        <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-3xl border-2 border-yellow-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-center text-yellow-300 mb-4">Hasil Kerja: {trainerName}</h2>
            <div className="flex-grow overflow-auto space-y-4 pr-2">
                {Object.entries(workData).map(([branch, records]) => (
                    <div key={branch}>
                        <h3 className="text-lg font-semibold text-white bg-gray-700 px-3 py-2 rounded-t-lg">{branch}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 bg-gray-900/50 rounded-b-lg">
                            {records.map(record => (
                                <div key={record.id} className="bg-black rounded-lg shadow-neumorphic overflow-hidden">
                                    <img src={record.photo || `https://placehold.co/300x200/2d3748/ffffff?text=${record.nama.charAt(0)}`} alt={record.nama} className="w-full h-24 object-cover" />
                                    <div className="p-2 text-xs">
                                        <p className="font-bold text-white truncate">{record.nama}</p>
                                        <p className="text-yellow-400">{determineDisplayStatus(record)}</p>
                                        <p className="text-gray-400">{formatDateString(record.tgl || record.updatedAt?.toDate().toISOString().split('T')[0])}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Tutup</button>
            </div>
        </div>
    </div>
);

const FollowUpDateRangePopup = ({ onClose, onFetch }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-green-500" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-center text-green-300">Pilih Rentang Tindak Lanjut</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Tanggal Mulai</label>
                        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full input-rounded-border" />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Tanggal Selesai</label>
                        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full input-rounded-border" />
                    </div>
                </div>
                <button onClick={() => onFetch(startDate, endDate)} className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-xl text-lg hover:bg-green-700 shadow-neumorphic">Tampilkan</button>
                <button onClick={onClose} className="w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700">Tutup</button>
            </div>
        </div>
    );
};

const FollowUpDetailsPopup = ({ onClose, data }) => {
    const totalPeserta = Object.values(data).reduce((sum, branchData) => {
        return sum + Object.values(branchData).reduce((branchSum, evalList) => branchSum + evalList.length, 0);
    }, 0);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-indigo-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-center text-indigo-300 mb-2">Rincian Tindak Lanjut Evaluasi</h2>
                <p className="text-center text-gray-400 mb-4">Total Peserta Dievaluasi: {totalPeserta}</p>
                <div className="flex-grow overflow-auto space-y-4 pr-2">
                    {Object.entries(data).map(([cabang, evalTypes]) => (
                        <div key={cabang}>
                            <h3 className="text-lg font-semibold text-white bg-gray-700 px-3 py-2 rounded-t-lg">{cabang} ({Object.values(evalTypes).reduce((acc, list) => acc + list.length, 0)} Peserta)</h3>
                            <div className="bg-gray-900/50 p-3 rounded-b-lg space-y-3">
                                {Object.entries(evalTypes).map(([evalType, participants]) => (
                                    <div key={evalType}>
                                        <h4 className="font-bold text-indigo-300">{evalType}</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-300 pl-2">
                                            {participants.map((p, i) => (
                                                <li key={i}>{p.nama} - dievaluasi oleh {p.evaluator || 'N/A'} pada {p.tanggal}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Tutup</button>
                </div>
            </div>
        </div>
    );
};

const ReportDisplayPopup = ({ onClose, title, columns, data }) => {
    const [activeFilter, setActiveFilter] = useState('Semua');
    
    const summaryCounts = useMemo(() => {
        if (!data) return {};
        return data.reduce((acc, row) => {
            const status = row.attendanceStatus || 'N/A';
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});
    }, [data]);

    const filteredData = useMemo(() => {
        if (!data) return [];
        if (activeFilter === 'Semua') return data;
        return data.filter(row => row.attendanceStatus === activeFilter);
    }, [data, activeFilter]);

    const filterButtons = useMemo(() => {
        const buttons = Object.entries(summaryCounts)
            .filter(([, count]) => count > 0)
            .map(([key]) => key);
        if (buttons.length > 0) buttons.unshift('Semua');
        return buttons;
    }, [summaryCounts]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-7xl border-2 border-purple-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-3xl font-bold text-center text-purple-300 mb-4 flex-shrink-0">{title}</h2>
                
                {filterButtons.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                        {filterButtons.map(filter => (
                            <button key={filter} onClick={() => setActiveFilter(filter)} 
                                className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${activeFilter === filter ? 'bg-purple-600 text-white' : 'bg-gray-700 hover:bg-gray-600'}`}>
                                {filter} <span className="text-xs bg-black/20 px-1.5 py-0.5 rounded-full">{summaryCounts[filter] || filteredData.length}</span>
                            </button>
                        ))}
                    </div>
                )}

                <div className="flex-grow overflow-auto rounded-lg">
                    <table className="w-full text-left text-lg">
                        <thead className="bg-gray-900 sticky top-0">
                            <tr>
                                {columns.map(col => <th key={col.accessor} className="p-4 font-semibold text-gray-100">{col.header}</th>)}
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {filteredData.length > 0 ? filteredData.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-700/50">
                                    {columns.map(col => (
                                        <td key={`${rowIndex}-${col.accessor}`} className={`p-4 whitespace-nowrap text-gray-200 ${col.accessor === 'participantName' ? 'font-bold text-white text-xl' : ''}`}>{row[col.accessor] || '-'}</td>
                                    ))}
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={columns.length} className="text-center p-8 text-gray-400 text-xl">Tidak ada data untuk filter ini.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-4 flex-shrink-0">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Tutup</button>
                </div>
            </div>
        </div>
    );
};

const ParticipantAttendanceReportDateRangePopup = ({ onClose, onFetch, locations }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('semua');

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[60] p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-md space-y-6 border-2 border-blue-500" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-2xl font-bold text-center text-blue-300">Rekapan Daftar Hadir Peserta</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Tanggal Mulai</label>
                        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full input-rounded-border" />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Tanggal Selesai</label>
                        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="w-full input-rounded-border" />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Kategori Lokasi TC</label>
                        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="w-full select-rounded-border">
                            <option value="semua">Semua Lokasi</option>
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                </div>
                <button onClick={() => onFetch(startDate, endDate, selectedLocation)} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-lg hover:bg-blue-700 shadow-neumorphic">Tampilkan</button>
                <button onClick={onClose} className="w-full mt-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-xl hover:bg-gray-700">Tutup</button>
            </div>
        </div>
    );
};

const AttendancePopup = ({ onClose, participants, locations, onEditParticipant }) => {
    const { db, showToast, currentUser, setPostSaveAction, openModal } = useContext(AppContext);
    const firestore = useFirestore();
    const [selectedLocation, setSelectedLocation] = useState('');
    const [attendanceData, setAttendanceData] = useState({});
    const [participantToResign, setParticipantToResign] = useState(null);
    
    useEffect(() => {
        if (locations.length > 0 && !selectedLocation) {
            setSelectedLocation(locations[0]);
        }
    }, [locations, selectedLocation]);

    const filteredParticipants = useMemo(() => {
        return participants.filter(p => p.trainganDari === selectedLocation);
    }, [participants, selectedLocation]);

    const handleAttendanceChange = (participantId, status) => {
        setAttendanceData(prev => ({ ...prev, [participantId]: { ...prev[participantId], status } }));
    };

    const handleNotesChange = (participantId, notes) => {
        setAttendanceData(prev => ({ ...prev, [participantId]: { ...prev[participantId], notes } }));
    };

    const handleResignClick = (participant) => {
        setParticipantToResign(participant);
    };

    const confirmResign = async () => {
        if (!participantToResign) return;
        const resignData = { ...participantToResign, status: 'Resign', tanggalResign: new Date().toISOString().split('T')[0] };
        delete resignData.id;
        await firestore.addOrUpdateRecord(null, resignData);
        setParticipantToResign(null);
    };
    
    const handleLulusClick = (participant) => {
        setPostSaveAction('reopenAttendance');
        onEditParticipant(participant);
        onClose();
    };

    const handleSaveAttendance = async () => {
        if (Object.keys(attendanceData).length === 0) {
            showToast("Tidak ada perubahan untuk disimpan.");
            return;
        }
        const batch = writeBatch(db);
        const attendanceCollection = collection(db, `artifacts/${appId}/public/data/attendance`);
        
        filteredParticipants.forEach(p => {
            const data = attendanceData[p.id];
            if (data && data.status) {
                const newAttendanceRef = doc(attendanceCollection);
                batch.set(newAttendanceRef, {
                    participantId: p.id, participantName: p.nama, location: selectedLocation,
                    attendanceStatus: data.status, notes: data.notes || '',
                    date: serverTimestamp(), recordedBy: currentUser.nama
                });
            }
        });

        try {
            await batch.commit();
            showToast("Daftar hadir berhasil disimpan.");
            onClose();
        } catch (error) { showToast("Gagal menyimpan daftar hadir."); }
    };
    
    const handleFetchParticipantReport = async (startDate, endDate, location) => {
        if (!db || !startDate || !endDate) {
            showToast("Silakan pilih rentang tanggal yang valid.");
            return;
        }
        showToast("Mengambil data rekapan...");
        const start = Timestamp.fromDate(new Date(`${startDate}T00:00:00`));
        const end = Timestamp.fromDate(new Date(`${endDate}T23:59:59`));
        const q = query(collection(db, `artifacts/${appId}/public/data/attendance`), where('date', '>=', start), where('date', '<=', end));
        try {
            const querySnapshot = await getDocs(q);
            let allDocs = querySnapshot.docs;
            if (location !== 'semua') {
                allDocs = allDocs.filter(doc => doc.data().location === location);
            }
            const sortedDocs = allDocs.sort((a, b) => b.data().date.toDate().getTime() - a.data().date.toDate().getTime());
            const finalData = sortedDocs.map(doc => {
                const data = doc.data();
                const { date } = formatFirebaseTimestamp(data.date);
                return { ...data, date };
            });
            openModal('participantAttendanceReportDisplay', {
                data: finalData,
                title: "Rekapan Daftar Hadir Peserta",
                columns: [
                    { header: 'Nama', accessor: 'participantName' }, { header: 'Tanggal', accessor: 'date' },
                    { header: 'Lokasi', accessor: 'location' }, { header: 'Status', accessor: 'attendanceStatus' },
                    { header: 'Keterangan', accessor: 'notes' }, { header: 'Oleh', accessor: 'recordedBy' }
                ]
            });
            showToast(`Rekapan ditemukan: ${finalData.length} data.`);
        } catch (error) {
            showToast("Gagal mengambil data rekapan.");
            console.error("Error fetching participant attendance report:", error);
        }
    };

    const attendanceCounts = useMemo(() => {
        return Object.values(attendanceData).reduce((acc, { status }) => {
            if (status) acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, { Hadir: 0, Izin: 0, Sakit: 0, Alpa: 0 });
    }, [attendanceData]);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
                <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-2xl border-2 border-green-500 flex flex-col" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-2xl font-bold text-center text-green-300 mb-4">Daftar Hadir Peserta TC</h2>
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-300">Pilih Lokasi TC</label>
                        <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="w-full select-rounded-border">
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                    <div className="flex-grow overflow-y-auto max-h-[50vh] pr-2 space-y-4">
                        {filteredParticipants.map(p => (
                            <div key={p.id} className="bg-gray-900 p-4 rounded-lg">
                                <p className="font-bold text-lg text-white mb-2">{p.nama}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {['Hadir', 'Izin', 'Sakit', 'Alpa'].map(status => (
                                        <button key={status} onClick={() => handleAttendanceChange(p.id, status)}
                                            className={`px-3 py-1 text-sm font-semibold rounded-md transition-all ${attendanceData[p.id]?.status === status ? 'text-white ' + (status === 'Hadir' ? 'bg-green-500' : status === 'Izin' ? 'bg-blue-500' : status === 'Sakit' ? 'bg-yellow-500' : 'bg-orange-500') : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}>
                                            {status}
                                        </button>
                                    ))}
                                    <button onClick={() => handleLulusClick(p)} className="px-3 py-1 text-sm font-semibold rounded-md bg-green-600 text-white hover:bg-green-700">Lulus</button>
                                    <button onClick={() => handleResignClick(p)} className="px-3 py-1 text-sm font-semibold rounded-md bg-red-600 text-white hover:bg-red-700">Resign</button>
                                </div>
                                <input type="text" placeholder="Keterangan..." value={attendanceData[p.id]?.notes || ''} onChange={e => handleNotesChange(p.id, e.target.value)} className="w-full input-rounded-border !py-2 !text-sm"/>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-gray-600 mt-4 pt-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center mb-4">
                            <p>Hadir: <span className="font-bold text-green-400">{attendanceCounts.Hadir}</span></p>
                            <p>Izin: <span className="font-bold text-blue-400">{attendanceCounts.Izin}</span></p>
                            <p>Sakit: <span className="font-bold text-yellow-400">{attendanceCounts.Sakit}</span></p>
                            <p>Alpa: <span className="font-bold text-orange-400">{attendanceCounts.Alpa}</span></p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                            <button onClick={() => openModal('participantAttendanceReportDateRange', { onFetch: handleFetchParticipantReport, locations })} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 w-full sm:w-auto">Rekapan Peserta</button>
                            <div className="flex gap-3 w-full sm:w-auto">
                                <button onClick={onClose} className="w-full px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Tutup</button>
                                <button onClick={handleSaveAttendance} className="w-full px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmationDialog
                show={!!participantToResign}
                onClose={() => setParticipantToResign(null)}
                onConfirm={confirmResign}
                title="Konfirmasi Resign"
                message={`Apakah Anda yakin ingin mengubah status ${participantToResign?.nama} menjadi Resign? Status peserta akan diubah dan otomatis masuk ke dalam kelompok Resign.`}
                confirmText="Ya, Resign"
            />
        </>
    );
};


// =================================================================================
// KOMPONEN-KOMPONEN YANG SUDAH ADA
// =================================================================================

const AnimateOnScroll = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); }
        }, { threshold: 0.1 });
        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    return <div ref={ref} className={isVisible ? 'animate-on-scroll' : 'opacity-0'}>{children}</div>;
};

const SuperAdminPopup = ({ onClose, onSuperAdminLogin }) => {
    const [pin, setPin] = useState('');
    const handleSubmit = () => onSuperAdminLogin(pin);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-sm space-y-4" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-xl font-bold text-center text-yellow-300">Login Admin Utama</h3>
                <input type="password" inputMode="numeric" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full input-rounded-border" placeholder="Masukkan PIN Admin Utama" onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} />
                <button onClick={handleSubmit} className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl text-lg hover:bg-yellow-600 shadow-neumorphic">Login</button>
            </div>
        </div>
    );
};

const LoginScreen = () => {
    const { users, showToast, setCurrentUser, setUserRole, setLoginStep, openModal, closeModal } = useContext(AppContext);
    const [selectedUser, setSelectedUser] = useState('');
    const [pin, setPin] = useState('');

    useEffect(() => {
        if (users.length > 0) {
            const defaultUser = users.find(u => u.nama) || users[0];
            if(defaultUser) setSelectedUser(defaultUser.nama);
        }
    }, [users]);

    const handleLogin = useCallback((selectedUserName, enteredPin) => {
        const user = users.find(u => u.nama === selectedUserName);
        if (user && user.pin === enteredPin) {
            setCurrentUser(user);
            setUserRole(user.role);
            setLoginStep('loggedIn');
            showToast(`Selamat datang, ${user.nama}!`);
        } else {
            showToast("PIN salah. Coba lagi.");
        }
    }, [users, showToast, setCurrentUser, setUserRole, setLoginStep]);

    const handleSuperAdminLogin = useCallback((enteredPin) => {
        if (enteredPin === '197385') {
            const superAdminUser = {
                nama: 'endayshebocah',
                role: 'admin',
                permissions: availablePermissions.reduce((acc, perm) => ({ ...acc, [perm.key]: true }), {})
            };
            setCurrentUser(superAdminUser);
            setUserRole('admin');
            setLoginStep('loggedIn');
            showToast('Selamat datang, Admin Utama!');
            closeModal();
        } else {
            showToast('PIN Admin Utama salah.');
        }
    }, [showToast, setCurrentUser, setUserRole, setLoginStep, closeModal]);

    const handleLoginClick = () => {
        if (!selectedUser || !pin) { showToast("Silakan pilih pengguna dan masukkan PIN."); return; }
        handleLogin(selectedUser, pin);
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-neumorphic border-2 border-purple-500 space-y-6">
                <h1 className="text-3xl font-bold text-center text-blue-300">Login Database</h1>
                {users.length > 0 ? (
                    <>
                        <div className="space-y-4">
                            <div>
                                <label className="block mb-2 text-gray-300 text-base">Pilih Pengguna</label>
                                <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} className="w-full select-rounded-border">
                                    {users.map(user => <option key={user.id} value={user.nama}>{user.nama}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-300 text-base">PIN</label>
                                <input type="password" inputMode="numeric" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full input-rounded-border" placeholder="****" onKeyDown={(e) => e.key === 'Enter' && handleLoginClick()} />
                            </div>
                        </div>
                        <button onClick={handleLoginClick} className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-xl text-lg hover:bg-blue-600 shadow-neumorphic">Masuk</button>
                    </>
                ) : (
                    <div className="text-center text-gray-400 p-4 bg-gray-900/50 rounded-lg">
                        <p>Tidak ada pengguna yang terdaftar.</p>
                        <p className="text-sm mt-2">Silakan hubungi administrator untuk membuat akun pertama.</p>
                    </div>
                )}
                <p className="text-center text-xs text-gray-500 cursor-pointer hover:text-yellow-400 transition-colors" onClick={() => openModal('superAdminLogin', { onSuperAdminLogin: handleSuperAdminLogin })}>endayshebocah</p>
            </div>
        </div>
    );
};

const AccessManagementScreen = () => {
    const { users, showToast } = useContext(AppContext);
    const firestore = useFirestore();
    
    const getInitialFormState = () => ({
        nama: '', pin: '', role: 'trainer', 
        permissions: availablePermissions.reduce((acc, perm) => ({...acc, [perm.key]: !perm.adminOnly}), {})
    });

    const [formData, setFormData] = useState(getInitialFormState());
    const [editingUserId, setEditingUserId] = useState(null);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({ ...prev, permissions: { ...prev.permissions, [name]: checked } }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const resetForm = () => {
        setFormData(getInitialFormState());
        setEditingUserId(null);
    };

    const handleEditClick = (user) => {
        setFormData({
            nama: user.nama || '', pin: user.pin || '', role: user.role || 'trainer',
            permissions: user.permissions || getInitialFormState().permissions
        });
        setEditingUserId(user.id);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nama || !formData.pin) {
            showToast("Nama dan PIN harus diisi.");
            return;
        }
        const success = await firestore.addOrUpdateUser(editingUserId, formData);
        if (success) resetForm();
    };

    return (
        <div className="p-4 md:p-6 space-y-6">
            <div className="bg-gray-800 rounded-xl shadow-neumorphic border-2 border-teal-500 p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-teal-300 mb-4">{editingUserId ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input type="text" name="nama" placeholder="Nama Pengguna" value={formData.nama} onChange={handleFormChange} className="input-rounded-border" required />
                        <input type="text" name="pin" placeholder="PIN" value={formData.pin} onChange={handleFormChange} className="input-rounded-border" required />
                        <select name="role" value={formData.role} onChange={handleFormChange} className="select-rounded-border">
                            <option value="trainer">Trainer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-300 mb-3">Izin Akses Menu</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {availablePermissions.map(perm => (
                                <label key={perm.key} className="flex items-center space-x-3 p-2 bg-gray-900/50 rounded-lg">
                                    <input type="checkbox" name={perm.key} checked={!!formData.permissions[perm.key]} onChange={handleFormChange} className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-600"/>
                                    <span className="text-sm">{perm.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                        {editingUserId && <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700">Batal</button>}
                        <button type="submit" className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">{editingUserId ? 'Simpan Perubahan' : 'Tambah Pengguna'}</button>
                    </div>
                </form>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-neumorphic border-2 border-teal-500 p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-teal-300 mb-4">Daftar Pengguna</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="border-b border-gray-600">
                            <tr>
                                <th className="p-3">Nama</th><th className="p-3">Peran</th>
                                <th className="p-3">Izin Diberikan</th><th className="p-3 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b border-gray-700">
                                    <td className="p-3 align-top">{user.nama}</td>
                                    <td className="p-3 align-top capitalize">{user.role}</td>
                                    <td className="p-3 align-top">
                                        <div className="flex flex-wrap gap-1">
                                            {availablePermissions.filter(perm => user.permissions && user.permissions[perm.key]).map(perm => (
                                                <span key={perm.key} className="text-xs bg-blue-900/70 text-blue-200 px-2 py-1 rounded-full">{perm.label}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-3 flex justify-end gap-2 align-top">
                                        <button onClick={() => handleEditClick(user)} className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg></button>
                                        <button onClick={() => firestore.deleteUser(user.id, user.nama)} className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const EvaluationScheduleScreen = ({ latestRecords, allRecords, onEdit, onDelete }) => {
    const [evaluationCategoryFilter, setEvaluationCategoryFilter] = useState('semua');
    const [expandedDetail, setExpandedDetail] = useState(null);
    const evaluationCategories = ["Evaluasi Reflexology", "Evaluasi Athletic Massage", "Evaluasi Seitai"];
    const colors = useMemo(() => ['border-indigo-500', 'border-purple-500', 'border-teal-500', 'border-pink-500', 'border-sky-500'], []);

    const handleCardClick = (record) => {
        if (expandedDetail && expandedDetail.id === record.id) {
            setExpandedDetail(null);
        } else {
            setExpandedDetail(record);
        }
    };

    const dueParticipants = useMemo(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dueList = latestRecords.filter(record => {
            const isEvaluation = evaluationCategories.some(cat => record.status.includes(cat));
            const isLulusFromCeking = record.status === 'Lulus';
            
            if (!isEvaluation && !isLulusFromCeking) return false;
            
            let lastDateStr = record.tgl || record.tanggalLulus;
            if (!lastDateStr) return false;
            
            const lastDate = new Date(`${lastDateStr}T00:00:00Z`);
            if (isNaN(lastDate.getTime())) return false;
            
            const dueDate = new Date(lastDate);
            dueDate.setMonth(dueDate.getMonth() + 3);
            
            return dueDate <= today;
        });

        if (evaluationCategoryFilter !== 'semua') {
            return dueList.filter(record => {
                if (record.status === 'Lulus' && evaluationCategoryFilter === 'Evaluasi Reflexology') return true;
                return record.status === evaluationCategoryFilter;
            });
        }
        return dueList;

    }, [latestRecords, evaluationCategoryFilter]);

    const participantsByBranch = useMemo(() => {
        return dueParticipants.reduce((acc, record) => {
            const branch = record.turunKeCabang || record.cabang || 'Belum Ditentukan';
            if (!acc[branch]) acc[branch] = [];
            acc[branch].push(record);
            return acc;
        }, {});
    }, [dueParticipants]);

    const sortedBranches = useMemo(() => {
        return Object.entries(participantsByBranch).sort(([, a], [, b]) => b.length - a.length);
    }, [participantsByBranch]);

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-300 text-center sm:text-left">Jadwal Evaluasi</h2>
                <select 
                    value={evaluationCategoryFilter} 
                    onChange={e => setEvaluationCategoryFilter(e.target.value)} 
                    className="select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-auto"
                >
                    <option value="semua">Semua Kategori</option>
                    {evaluationCategories.map(cat => <option key={cat} value={cat}>{cat.replace('Evaluasi ', '')}</option>)}
                </select>
            </div>
            {sortedBranches.length === 0 ? (
                <div className="text-center text-gray-400 mt-10 text-xl">Tidak ada jadwal evaluasi yang jatuh tempo untuk filter ini.</div>
            ) : (
                sortedBranches.map(([branch, participants], index) => (
                    <AnimateOnScroll key={branch}>
                        <div className={`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${colors[index % colors.length]} p-4 sm:p-6 space-y-4`}>
                            <h3 className="text-xl font-semibold text-white">{branch}</h3>
                            <div className="flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container">
                               {participants.map(record => (
                                    <EvaluationCard key={record.id} record={record} onFollowUp={onEdit} onCardClick={handleCardClick} />
                                ))}
                            </div>
                            {expandedDetail && participants.some(p => p.id === expandedDetail.id) && (
                                <div className="w-full">
                                    <ParticipantDetailView
                                        participant={expandedDetail}
                                        allRecords={allRecords}
                                        onClose={() => setExpandedDetail(null)}
                                        onEdit={onEdit}
                                        onDelete={onDelete}
                                    />
                                </div>
                            )}
                        </div>
                    </AnimateOnScroll>
                ))
            )}
        </div>
    );
};

const TrashScreen = ({ deletedRecords, onRestore, onDeletePermanent }) => {
    const handleDeleteClick = (id, name) => {
        onDeletePermanent(id, name);
    };

    return (
        <div className="p-4 md:p-8">
            <div className="bg-gray-800 rounded-xl shadow-neumorphic border-2 border-red-500 p-6">
                <h2 className="text-2xl font-bold text-red-300 mb-4">Tong Sampah</h2>
                {deletedRecords.length === 0 ? (
                    <p className="text-gray-400">Tong sampah kosong.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-gray-600"><tr><th className="p-3">Nama</th><th className="p-3 hidden sm:table-cell">Status Terakhir</th><th className="p-3 text-right">Aksi</th></tr></thead>
                            <tbody>
                                {deletedRecords.map(record => (
                                    <tr key={record.id} className="border-b border-gray-700">
                                        <td className="p-3">{record.nama}</td><td className="p-3 hidden sm:table-cell">{record.status}</td>
                                        <td className="p-3 flex justify-end gap-2">
                                            <button onClick={() => handleDeleteClick(record.id, record.nama)} className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700">Hapus</button>
                                            <button onClick={() => onRestore(record.id)} className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700">Pulihkan</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

const AssessmentPopup = ({ onSave, onClose, initialData, evaluationStatus }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [assessmentData, setAssessmentData] = useState({
        ratings: {}, manualNotes: {}, finalNote: ''
    });

    useEffect(() => {
        setAssessmentData({
            ratings: initialData?.ratings || { ketepatanWaktu: '', bagianKaki: '', bagianTangan: '', bagianPunggung: '', bagianPundak: '' },
            manualNotes: initialData?.manualNotes || { ketepatanWaktu: '', bagianKaki: '', bagianTangan: '', bagianPunggung: '', bagianPundak: '' },
            finalNote: initialData?.catatan || ''
        });
    }, [initialData]);

    const isSeitai = evaluationStatus === 'Evaluasi Seitai';
    const assessmentCategories = [
        { key: 'ketepatanWaktu', label: isSeitai ? 'Attitude' : 'Ketepatan Waktu (Durasi Sesi)' },
        { key: 'bagianKaki', label: isSeitai ? 'Face Down' : 'Bagian Kaki' },
        { key: 'bagianTangan', label: isSeitai ? 'Face Up' : 'Bagian Tangan' },
        { key: 'bagianPunggung', label: isSeitai ? 'Side Lying' : 'Bagian Punggung' },
        { key: 'bagianPundak', label: isSeitai ? 'Adjustment' : 'Bagian Pundak & Kepala' }
    ];
    const ratingOptions = ['Kurang', 'Cukup', 'Baik'];

    const handleRatingChange = (categoryKey, rating) => {
        setAssessmentData(prev => ({ ...prev, ratings: { ...prev.ratings, [categoryKey]: rating } }));
    };

    const handleManualNoteChange = (categoryKey, note) => {
        setAssessmentData(prev => ({ ...prev, manualNotes: { ...prev.manualNotes, [categoryKey]: note } }));
    };

    const handleFinalNoteChange = (e) => {
        setAssessmentData(prev => ({ ...prev, finalNote: e.target.value }));
    };

    const triggerSaveConfirmation = () => {
        setShowConfirmation(true);
    };

    const confirmAndSave = () => {
        const dataToSave = {
            ratings: assessmentData.ratings,
            manualNotes: assessmentData.manualNotes,
            catatan: assessmentData.finalNote
        };
        onSave(dataToSave);
        setShowConfirmation(false);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
                <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-purple-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                    <h3 className="text-xl font-bold text-center text-purple-300 mb-4 flex-shrink-0">Formulir Penilaian Cepat</h3>
                    <div className="flex-grow overflow-y-auto space-y-4 pr-2">
                        {assessmentCategories.map(cat => (
                            <div key={cat.key} className="bg-gray-900/70 p-4 rounded-lg">
                                <label className="font-semibold text-white mb-2 block">{cat.label}</label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {ratingOptions.map(opt => (
                                        <button key={opt} onClick={() => handleRatingChange(cat.key, opt)} className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all flex-grow ${assessmentData.ratings[cat.key] === opt ? 'text-white ' + (opt === 'Baik' ? 'bg-green-500' : opt === 'Cukup' ? 'bg-yellow-500' : 'bg-red-500') : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}>{opt}</button>
                                    ))}
                                </div>
                                <input type="text" value={assessmentData.manualNotes[cat.key] || ''} onChange={(e) => handleManualNoteChange(cat.key, e.target.value)} placeholder="Tambah catatan spesifik (opsional)..." className="w-full input-rounded-border !py-2 !text-sm"/>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0">
                        <label className="block mb-2 font-semibold text-white">Catatan / Ulasan Akhir (Opsional)</label>
                        <textarea name="catatan" value={assessmentData.finalNote || ''} onChange={handleFinalNoteChange} placeholder="Ulasan umum bisa diisi manual di sini..." className="w-full textarea-rounded-border h-24"></textarea>
                        <div className="flex justify-end gap-3 mt-3">
                            <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700">Batal</button>
                            <button onClick={triggerSaveConfirmation} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Simpan Penilaian</button>
                        </div>
                    </div>
                </div>
            </div>

            <ConfirmationDialog
                show={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onConfirm={confirmAndSave}
                title="Konfirmasi Simpan"
                message="Apakah Anda yakin ingin menyimpan penilaian ini? Data akan disimpan sementara dan diterapkan saat Anda menyimpan formulir utama."
                confirmText="Ya, Simpan"
            />
        </>
    );
};

// =================================================================================
// KOMPONEN FORM SPESIFIK (HASIL REFAKTORISASI)
// =================================================================================

const trainingDariLocations = ["Tc Pusat Jakrta", "Tc Panimbang", "Tc Semarang", "Tc Cirebon", "Tc Deltamas", "Tc Bali"];

const TraininganForm = ({ formValues, handleFormInputChange }) => (
    <>
        <div><label className="block mb-2 text-gray-300 text-base">Kota Asal</label><input type="text" name="kotaAsal" value={formValues.kotaAsal || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div><label className="block mb-2 text-gray-300 text-base">Tanggal Masuk</label><input type="date" name="tanggalMasuk" value={formValues.tanggalMasuk || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div><label className="block mb-2 text-gray-300 text-base">Refrensi</label><input type="text" name="refrensi" value={formValues.refrensi || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div><label className="block mb-2 text-gray-300 text-base">Training Dari</label><select name="trainganDari" value={formValues.trainganDari || ''} onChange={handleFormInputChange} className="w-full select-rounded-border"><option value="">Pilih Lokasi</option>{trainingDariLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}</select></div>
    </>
);

const CekingForm = ({ formValues, handleFormInputChange, onOpenAssessment, activeRecords }) => {
    const { userRole } = useContext(AppContext);
    const lastCekingStage = useMemo(() => getNextCekingStage(formValues.nama, activeRecords), [formValues.nama, activeRecords]);

    return (
        <>
            <div><label className="block mb-2 text-gray-300 text-base">Trainer</label><input type="text" name="trainer" value={formValues.trainer || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
            <div><label className="block mb-2 text-gray-300 text-base">Tahap Ceking</label><input type="text" name="tahapCeking" value={formValues.tahapCeking || ''} onChange={handleFormInputChange} readOnly={userRole !== 'admin'} className={`w-full input-rounded-border ${userRole !== 'admin' ? 'bg-gray-700 cursor-not-allowed' : ''}`} placeholder={lastCekingStage}/></div>
            <div><label className="block mb-2 text-gray-300 text-base">Tanggal</label><input type="date" name="tgl" value={formValues.tgl || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
            {formValues.cekingResult !== 'Lulus' && <div><label className="block mb-2 text-gray-300 text-base">Training Dari</label><select name="trainganDari" value={formValues.trainganDari || ''} onChange={handleFormInputChange} className="w-full select-rounded-border"><option value="">Pilih Lokasi</option>{trainingDariLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}</select></div>}
            {formValues.cekingResult === 'Lulus' && <div><label className="block mb-2 text-gray-300 text-base">Tanggal Lulus</label><input type="date" name="tanggalLulus" value={formValues.tanggalLulus || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>}
            <div className="sm:col-span-2"><label className="block mb-2 text-gray-300 text-base">Hasil Ceking</label><div className="flex gap-2"><button type="button" onClick={() => handleFormInputChange({ target: { name: 'cekingResult', value: 'Masih Tahap Ceking' }})} className={`w-full py-2 rounded-lg font-semibold ${formValues.cekingResult === 'Masih Tahap Ceking' || !formValues.cekingResult ? 'bg-blue-600 text-white' : 'bg-gray-600'}`}>Masih Tahap Ceking</button><button type="button" onClick={() => handleFormInputChange({ target: { name: 'cekingResult', value: 'Lulus' }})} className={`w-full py-2 rounded-lg font-semibold ${formValues.cekingResult === 'Lulus' ? 'bg-green-600 text-white' : 'bg-gray-600'}`}>Lulus</button></div></div>
            <div className="sm:col-span-2">
                <button type="button" onClick={onOpenAssessment} disabled={!formValues.nama} className="w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-neumorphic disabled:bg-gray-700 disabled:cursor-not-allowed">
                    Buka & Isi Formulir Penilaian
                </button>
            </div>
            {formValues.cekingResult === 'Lulus' && (<><div><label className="block mb-2 text-gray-300 text-base">Cabang</label><input type="text" name="turunKeCabang" value={formValues.turunKeCabang || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div><div><label className="block mb-2 text-gray-300 text-base">Acc Yang Meluluskan</label><input type="text" name="accYangMeluluskan" value={formValues.accYangMeluluskan || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div></>)}
        </>
    );
};

const EvaluasiForm = ({ formValues, handleFormInputChange, onOpenAssessment, activeRecords }) => {
    const { userRole } = useContext(AppContext);
    const lastCekingStage = useMemo(() => getNextCekingStage(formValues.nama, activeRecords), [formValues.nama, activeRecords]);
    const evaluationCategory = formValues.status.replace('Evaluasi ', '');

    return (
        <>
            <div><label className="block mb-2 text-gray-300 text-base">Trainer</label><input type="text" name="trainer" value={formValues.trainer || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
            <div><label className="block mb-2 text-gray-300 text-base">Tahap Ceking</label><input type="text" name="tahapCeking" value={formValues.tahapCeking || ''} onChange={handleFormInputChange} readOnly={userRole !== 'admin'} className={`w-full input-rounded-border ${userRole !== 'admin' ? 'bg-gray-700 cursor-not-allowed' : ''}`} placeholder={lastCekingStage}/></div>
            <div><label className="block mb-2 text-gray-300 text-base">Cabang</label><input type="text" name="cabang" value={formValues.cabang || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
            <div><label className="block mb-2 text-gray-300 text-base">Tanggal Evaluasi</label><input type="date" name="tgl" value={formValues.tgl || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
            <div className="sm:col-span-2">
                <label className="block mb-2 text-gray-300 text-base">Hasil Evaluasi</label>
                <div className="flex gap-2">
                    <button type="button" onClick={() => handleFormInputChange({ target: { name: 'evaluationResult', value: 'Masih Tahap Evaluasi' }})} className={`w-full py-2 rounded-lg font-semibold ${formValues.evaluationResult === 'Masih Tahap Evaluasi' || !formValues.evaluationResult ? 'bg-purple-600 text-white' : 'bg-gray-600'}`}>{`Masih Tahap ${evaluationCategory}`}</button>
                    <button type="button" onClick={() => handleFormInputChange({ target: { name: 'evaluationResult', value: 'Lulus' }})} className={`w-full py-2 rounded-lg font-semibold ${formValues.evaluationResult === 'Lulus' ? 'bg-green-600 text-white' : 'bg-gray-600'}`}>{`Lulus ${evaluationCategory}`}</button>
                </div>
            </div>
            <div className="sm:col-span-2">
                <button type="button" onClick={onOpenAssessment} disabled={!formValues.nama} className="w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-neumorphic disabled:bg-gray-700 disabled:cursor-not-allowed">
                    Buka & Isi Formulir Penilaian
                </button>
            </div>
            {formValues.evaluationResult === 'Lulus' && (
                <>
                    <div><label className="block mb-2 text-gray-300 text-base">Tanggal Lulus Evaluasi</label><input type="date" name="tanggalLulus" value={formValues.tanggalLulus || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
                    <div><label className="block mb-2 text-gray-300 text-base">Acc Yang Meluluskan</label><input type="text" name="accYangMeluluskan" value={formValues.accYangMeluluskan || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
                </>
            )}
        </>
    );
};

const ResignForm = ({ formValues, handleFormInputChange }) => (
    <>
        <div><label className="block mb-2 text-gray-300 text-base">Kota Asal</label><input type="text" name="kotaAsal" value={formValues.kotaAsal || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div><label className="block mb-2 text-gray-300 text-base">Tanggal Masuk</label><input type="date" name="tanggalMasuk" value={formValues.tanggalMasuk || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div><label className="block mb-2 text-gray-300 text-base">Tanggal Resign</label><input type="date" name="tanggalResign" value={formValues.tanggalResign || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div><label className="block mb-2 text-gray-300 text-base">Refrensi</label><input type="text" name="refrensi" value={formValues.refrensi || ''} onChange={handleFormInputChange} className="w-full input-rounded-border" /></div>
        <div className="sm:col-span-2"><label className="block mb-2 text-gray-300 text-base">Training Dari</label><select name="trainganDari" value={formValues.trainganDari || ''} onChange={handleFormInputChange} className="w-full select-rounded-border"><option value="">Pilih Lokasi</option>{trainingDariLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}</select></div>
    </>
);


const DynamicForm = ({
    isFormExpanded, formValues, handleFormInputChange, handleAddOrUpdateRecord, resetForm,
    fileInputRef, handleFileSelect, activeRecords, uniqueRecords, handleSuggestionClick,
    nameSuggestions, setNameSuggestions, onOpenAssessment
}) => {
    
    const renderFormContent = () => {
        const { status } = formValues;
        const formProps = { formValues, handleFormInputChange, onOpenAssessment, activeRecords };
        
        if (status === 'Trainingan') return <TraininganForm {...formProps} />;
        if (status === 'Tahap Ceking') return <CekingForm {...formProps} />;
        if (status.startsWith('Evaluasi')) return <EvaluasiForm {...formProps} />;
        if (status === 'Resign') return <ResignForm {...formProps} />;
        return null;
    };

    return (
        <div className={`details-section ${isFormExpanded ? 'p-4 sm:p-8' : 'details-section-hidden'}`}>
             <form onSubmit={handleAddOrUpdateRecord} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    <div className="sm:col-span-2 relative">
                        <label className="block mb-2 text-gray-300 text-base">Nama</label>
                        <input type="text" name="nama" value={formValues.nama || ''} onChange={handleFormInputChange} onBlur={() => setTimeout(() => setNameSuggestions([]), 150)} required className="w-full input-rounded-border" autoComplete="off"/>
                        {nameSuggestions.length > 0 && formValues.nama.length > 0 && (
                            <ul className="absolute z-20 w-full bg-gray-700 border border-gray-600 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
                                {uniqueRecords.filter(record => record.nama.toLowerCase().includes(formValues.nama.toLowerCase())).map(suggestion => (
                                    <li key={suggestion.id} className="px-4 py-2 cursor-pointer hover:bg-gray-600" onMouseDown={() => handleSuggestionClick(suggestion)}>{suggestion.nama}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-gray-300 text-base">Status</label>
                        <select name="status" value={formValues.status || 'Trainingan'} onChange={handleFormInputChange} className="w-full select-rounded-border">
                            <option value="Trainingan">Trainingan</option>
                            <option value="Tahap Ceking">Tahap Ceking</option>
                            <option value="Evaluasi Reflexology">Evaluasi Reflexology</option>
                            <option value="Evaluasi Athletic Massage">Evaluasi Athletic Massage</option>
                            <option value="Evaluasi Seitai">Evaluasi Seitai</option>
                            <option value="Resign">Resign</option>
                        </select>
                    </div>
                    {renderFormContent()}
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center pt-4 gap-4">
                    <div className="flex items-center gap-4">
                        <button type="button" onClick={() => fileInputRef.current.click()} className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 shadow-neumorphic">Unggah Foto</button>
                        {formValues.photo && <img src={formValues.photo} alt="Preview" className="h-16 w-16 rounded-lg object-cover border-2 border-blue-400"/>}
                        <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
                    </div>
                    <div className="flex items-center gap-4 justify-end">
                        <button type="button" onClick={resetForm} className="px-6 py-3 bg-red-500 text-white font-bold rounded-xl text-base hover:bg-red-600 shadow-neumorphic">Batal</button>
                        <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-xl text-base hover:bg-blue-600 shadow-neumorphic">Simpan</button>
                    </div>
                </div>
             </form>
        </div>
    );
};


// =================================================================================
// LAYAR-LAYAR UTAMA (HASIL REFAKTORISASI DARI renderContent)
// =================================================================================

const PesertaScreen = ({ records, allRecords, onEdit, onDelete }) => {
    const [locationStatusFilters, setLocationStatusFilters] = useState({});
    const [expandedDetail, setExpandedDetail] = useState(null);

    const relevantLocations = useMemo(() => {
        const counts = records.reduce((acc, record) => {
            const loc = record.trainganDari;
            if (loc) {
                acc[loc] = (acc[loc] || 0) + 1;
            }
            return acc;
        }, {});
        return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    }, [records]);

    const colors = useMemo(() => ['border-indigo-500', 'border-purple-500', 'border-teal-500', 'border-pink-500', 'border-sky-500'], []);

    const handleCardClick = (record) => {
        if (expandedDetail && expandedDetail.id === record.id) {
            setExpandedDetail(null);
        } else {
            setExpandedDetail(record);
        }
    };
    
    return (
        <main className="flex-grow overflow-y-auto p-4 md:p-8 pt-4 flex flex-col gap-8">
            {relevantLocations.map((location, index) => (
                <AnimateOnScroll key={location}>
                    <div className={`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${colors[index % colors.length]} p-4 sm:p-6 space-y-4`}>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left">{`Lokasi ${location}`}</h2>
                            <select value={locationStatusFilters[location] || 'semua'} onChange={(e) => setLocationStatusFilters(prev => ({ ...prev, [location]: e.target.value }))} onClick={(e) => e.stopPropagation()} className="select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-48">
                                <option value="semua">Semua Status</option>
                                <option value="Trainingan">Trainingan</option>
                                <option value="Ceking">Ceking</option>
                                <option value="Lulus">Lulus</option>
                                <option value="Resign">Resign</option>
                            </select>
                        </div>
                        <div className="flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container">
                            {records.filter(r => r.trainganDari === location && matchesStatusFilter(r, locationStatusFilters[location])).map(record => (
                                <CekingCard key={record.id} record={record} onCardClick={handleCardClick} />
                            ))}
                        </div>
                        {expandedDetail && records.some(r => r.id === expandedDetail.id && r.trainganDari === location) && (
                            <div className="w-full">
                                <ParticipantDetailView
                                    participant={expandedDetail}
                                    allRecords={allRecords}
                                    onClose={() => setExpandedDetail(null)}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            </div>
                        )}
                    </div>
                </AnimateOnScroll>
            ))}
        </main>
    );
};

const CabangScreen = ({ records, allRecords, onEdit, onDelete }) => {
    const [evaluationCategoryFilters, setEvaluationCategoryFilters] = useState({});
    const [expandedDetail, setExpandedDetail] = useState(null);

    const relevantCabangs = useMemo(() => {
        const counts = records.reduce((acc, record) => {
            const branch = record.turunKeCabang || record.cabang;
            if (branch) {
                acc[branch] = (acc[branch] || 0) + 1;
            }
            return acc;
        }, {});
        return Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    }, [records]);

    const colors = useMemo(() => ['border-indigo-500', 'border-purple-500', 'border-teal-500', 'border-pink-500', 'border-sky-500'], []);

    const handleCardClick = (record) => {
        if (expandedDetail && expandedDetail.id === record.id) {
            setExpandedDetail(null);
        } else {
            setExpandedDetail(record);
        }
    };

    return (
        <main className="flex-grow overflow-y-auto p-4 md:p-8 pt-4 flex flex-col gap-8">
            {relevantCabangs.map((cabang, index) => (
                <AnimateOnScroll key={cabang}>
                    <div className={`bg-gray-800 rounded-xl shadow-neumorphic border-2 ${colors[index % colors.length]} p-4 sm:p-6 space-y-4`}>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center sm:text-left">{`Evaluasi Therapist ${cabang}`}</h2>
                            <select value={evaluationCategoryFilters[cabang] || 'semua'} onChange={(e) => setEvaluationCategoryFilters(prev => ({...prev, [cabang]: e.target.value}))} onClick={(e) => e.stopPropagation()} className="select-rounded-border !py-2 !px-3 !text-sm w-full sm:w-auto">
                                <option value="semua">Tampilkan Semua</option>
                                <option value="Evaluasi Reflexology">Evaluasi Reflexology</option>
                                <option value="Evaluasi Athletic Massage">Evaluasi Athletic Massage</option>
                                <option value="Evaluasi Seitai">Evaluasi Seitai</option>
                            </select>
                        </div>
                        <div className="flex overflow-x-auto gap-4 p-2 bg-gray-900/50 rounded-lg horizontal-scroll-container">
                           {records.filter(r => (r.turunKeCabang === cabang || r.cabang === cabang) && matchesEvaluationCategoryFilter(r, evaluationCategoryFilters[cabang])).map(record => (
                                <CekingCard key={record.id} record={record} onCardClick={handleCardClick} />
                            ))}
                        </div>
                         {expandedDetail && records.some(r => r.id === expandedDetail.id && (r.turunKeCabang === cabang || r.cabang === cabang)) && (
                            <div className="w-full">
                                <ParticipantDetailView
                                    participant={expandedDetail}
                                    allRecords={allRecords}
                                    onClose={() => setExpandedDetail(null)}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            </div>
                        )}
                    </div>
                </AnimateOnScroll>
            ))}
        </main>
    );
};

// =================================================================================
// KOMPONEN NAVIGASI & FITUR PERBAIKAN DATA
// =================================================================================
const MergeDataPopup = ({ onClose, onConfirm, field, incorrectValue, correctValue, count }) => (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[80] p-4" onClick={onClose}>
        <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-8 rounded-xl shadow-neumorphic w-full max-w-lg border-2 border-green-500" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-center text-green-300 mb-4">Konfirmasi Penggabungan Data</h2>
            <p className="text-center text-gray-300 mb-2">Anda akan menggabungkan <span className="font-bold text-white">{count}</span> data.</p>
            <div className="text-center bg-gray-900/50 p-4 rounded-lg">
                <p className="text-gray-400">Pada kolom <span className="font-semibold text-white">{field}</span>:</p>
                <p className="text-red-400">{incorrectValue}</p>
                <p className="text-gray-400">akan diubah menjadi</p>
                <p className="text-green-400">{correctValue}</p>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">Tindakan ini tidak dapat diurungkan. Pastikan pilihan Anda sudah benar.</p>
            <div className="flex justify-center gap-4 pt-6">
                <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Batal</button>
                <button onClick={onConfirm} className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Ya, Gabungkan</button>
            </div>
        </div>
    </div>
);

const MasterDataManagementPopup = ({ onClose, records }) => {
    const firestore = useFirestore();
    const { openModal, closeModal, showToast } = useContext(AppContext);
    
    const fieldsToManage = [
        { key: 'trainer', label: 'Trainer' },
        { key: 'trainganDari', label: 'Training Dari' },
        { key: 'turunKeCabang', label: 'Turun Ke Cabang' },
        { key: 'cabang', label: 'Cabang Evaluasi' },
        { key: 'refrensi', label: 'Refrensi' },
    ];
    
    const [selectedField, setSelectedField] = useState(fieldsToManage[0].key);
    const [incorrectValue, setIncorrectValue] = useState('');
    const [correctValue, setCorrectValue] = useState('');

    const uniqueValues = useMemo(() => {
        if (!selectedField || !records) return [];
        const values = new Set(records.map(r => r[selectedField]).filter(Boolean));
        return Array.from(values).sort();
    }, [selectedField, records]);

    const handleMerge = async () => {
        if (!selectedField || !incorrectValue || !correctValue || incorrectValue === correctValue) {
            showToast("Harap pilih nilai yang valid dan berbeda.");
            return;
        }
        
        const recordsToChange = records.filter(r => r[selectedField] === incorrectValue);
        
        openModal('mergeData', {
            field: fieldsToManage.find(f => f.key === selectedField)?.label,
            incorrectValue,
            correctValue,
            count: recordsToChange.length,
            onConfirm: async () => {
                const success = await firestore.mergeMasterData(selectedField, incorrectValue, correctValue);
                if (success) {
                    closeModal(); // Tutup konfirmasi
                    closeModal(); // Tutup manajemen data induk
                }
            }
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[70] p-4" onClick={onClose}>
            <div className="popup-wrapper popup-wrapper-visible bg-gray-800 p-6 rounded-xl shadow-neumorphic w-full max-w-2xl border-2 border-green-500 flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-center text-green-300 mb-4">Manajemen Data Induk</h2>
                <div className="flex-grow overflow-auto space-y-4 pr-2">
                    <div>
                        <label className="block mb-2 text-gray-300">Pilih Kolom Data</label>
                        <select value={selectedField} onChange={e => { setSelectedField(e.target.value); setIncorrectValue(''); setCorrectValue(''); }} className="w-full select-rounded-border">
                            {fieldsToManage.map(field => <option key={field.key} value={field.key}>{field.label}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Nilai yang Salah (Akan Diubah)</label>
                        <select value={incorrectValue} onChange={e => setIncorrectValue(e.target.value)} className="w-full select-rounded-border bg-red-900/20 border-red-500">
                            <option value="">Pilih nilai...</option>
                            {uniqueValues.map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Nilai yang Benar (Menjadi Tujuan)</label>
                         <select value={correctValue} onChange={e => setCorrectValue(e.target.value)} className="w-full select-rounded-border bg-green-900/20 border-green-500">
                            <option value="">Pilih nilai...</option>
                            {uniqueValues.filter(v => v !== incorrectValue).map(val => <option key={val} value={val}>{val}</option>)}
                        </select>
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-gray-700">
                    <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700">Tutup</button>
                    <button onClick={handleMerge} className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">Gabungkan Data</button>
                </div>
            </div>
        </div>
    );
};

const NavMenu = ({ setActiveView, onEditParticipant, activeRecords }) => {
    const { currentUser, showToast, setCurrentUser, setUserRole, setLoginStep, openModal } = useContext(AppContext);
    const { attendanceParticipants, allFilterOptions } = useRecords('', 'semua');
    const reports = useReports(onEditParticipant, activeRecords);
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const navMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setIsNavMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleMenuClick = (action) => {
        action();
        setIsNavMenuOpen(false);
    };

    const handleLogout = () => {
        setCurrentUser(null);
        setUserRole(null);
        setLoginStep('login');
        showToast("Anda telah berhasil logout.");
    };

    return (
        <div ref={navMenuRef} className="relative">
            <button onClick={() => setIsNavMenuOpen(p => !p)} className="p-3 bg-gray-700 rounded-lg shadow-neumorphic">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            {isNavMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-gray-700 rounded-lg shadow-lg z-20 border border-gray-600 p-2 space-y-1">
                   <div className="px-4 py-2"><p className="text-sm text-gray-400">Pengguna:</p><p className="font-bold text-white truncate">{currentUser?.nama}</p></div>
                   <div className="border-t border-gray-600 my-1"></div>
                   {currentUser?.permissions?.daftarHadir && <button onClick={() => handleMenuClick(() => openModal('attendance', { participants: attendanceParticipants, locations: allFilterOptions.tc, onEditParticipant }))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-emerald-500 hover:bg-emerald-600">Daftar Hadir Peserta</button>}
                   {currentUser?.permissions?.tindakLanjut && <button onClick={() => handleMenuClick(() => openModal('followUpDateRange', { onFetch: reports.handleFetchFollowUp }))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600">Tindak Lanjut</button>}
                   {currentUser?.permissions?.hasilKerja && <button onClick={() => handleMenuClick(() => openModal('trainerPerformanceDateRange', { onFetch: reports.handleFetchTrainerPerformanceByDate }))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-indigo-500 hover:bg-indigo-600">Hasil Kerja Trainer</button>}
                   {currentUser?.permissions?.perbaikanData && <button onClick={() => handleMenuClick(() => openModal('masterData', { records: activeRecords }))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-amber-500 hover:bg-amber-600">Perbaikan Data</button>}
                   {currentUser?.permissions?.izinAkses && <button onClick={() => handleMenuClick(() => setActiveView('izinAkses'))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-violet-500 hover:bg-violet-600">Izin Akses</button>}
                   {currentUser?.permissions?.trash && <button onClick={() => handleMenuClick(() => setActiveView('trash'))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-rose-500 hover:bg-rose-600">Tong Sampah</button>}
                   {currentUser?.permissions?.hapusBeberapa && <button onClick={() => handleMenuClick(() => openModal('bulkDeleteDateRange', { onFetch: reports.handleFetchForBulkDelete }))} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-red-600 hover:bg-red-700">Hapus Beberapa Data</button>}
                   <div className="border-t border-gray-600 my-1"></div>
                   <button onClick={() => handleMenuClick(handleLogout)} className="w-full text-left px-4 py-2 rounded-md font-semibold text-white bg-slate-500 hover:bg-slate-600">Logout</button>
                </div>
            )}
        </div>
    );
};


// =================================================================================
// KOMPONEN UTAMA APLIKASI (Main App Component)
// =================================================================================
function AppContent() {
  const { showToast, activityNotifications, setLastSaveTimestamp, postSaveAction, setPostSaveAction, openModal } = useContext(AppContext);
  const firestore = useFirestore();
  
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState('peserta');
  const [selectedBranchFilter, setSelectedBranchFilter] = useState('semua');
  const [evaluationNotifications, setEvaluationNotifications] = useState([]);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const notificationBellRef = useRef(null);
  const addFormRef = useRef(null);
  const fileInputRef = useRef(null);

  const { allRecords, activeRecords, deletedRecords, uniqueLatestRecords, filteredRecords, allFilterOptions, attendanceParticipants } = useRecords(searchTerm, selectedBranchFilter);

  const initialFormState = useMemo(() => ({
      nama: '', tgl: '', trainer: '', status: 'Trainingan', tahapCeking: '',
      photo: null, kotaAsal: '', tanggalMasuk: '', refrensi: '', turunKeCabang: '', 
      accYangMeluluskan: '', trainganDari: '', tanggalLulus: '', tanggalResign: '', 
      cabang: '', evaluationResult: '', cekingResult:'', isDeleted: false,
      penilaian: null,
  }), []);

  const { formValues, setFormValues, recordToEdit, setRecordToEdit, nameSuggestions, setNameSuggestions, handleFormInputChange, handleSuggestionClick, resetForm } = useForm(initialFormState, uniqueLatestRecords, allRecords);
  
  const handleEditClick = useCallback((record) => {
    let newFormValues = { ...initialFormState, ...record };
    if (record.status.startsWith('Ceking tahap')) {
        newFormValues.tahapCeking = record.status; newFormValues.status = 'Tahap Ceking'; newFormValues.cekingResult = 'Masih Tahap Ceking';
    } else if (record.status === 'Lulus') {
        newFormValues.status = 'Tahap Ceking'; newFormValues.cekingResult = 'Lulus';
    }
    setRecordToEdit(record); 
    setFormValues(newFormValues); 
    setIsFormExpanded(true);
    if (addFormRef.current) addFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveView('peserta');
  }, [initialFormState, setFormValues, setRecordToEdit]);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (notificationBellRef.current && !notificationBellRef.current.contains(event.target)) {
            setShowNotificationPopup(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => { setSelectedBranchFilter('semua'); }, [activeView]);
  
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const evaluationCandidates = uniqueLatestRecords.filter(record => record.status === 'Lulus' || record.status.startsWith('Evaluasi'));
    const notifications = evaluationCandidates.map(record => {
        const lastDateStr = record.tanggalLulus || record.tgl;
        if (!lastDateStr) return null;
        const lastDate = new Date(`${lastDateStr}T00:00:00Z`);
        if (isNaN(lastDate.getTime())) return null;
        const dueDate = new Date(lastDate);
        dueDate.setMonth(dueDate.getMonth() + 3);
        if (dueDate <= today) {
            let nextEval = 'Evaluasi Lanjutan';
            if (record.status === 'Lulus') nextEval = 'Evaluasi Reflexology';
            else if (record.status.startsWith('Evaluasi ')) nextEval = record.status;
            return { ...record, dueDate: dueDate, nextEvaluation: nextEval };
        }
        return null;
    }).filter(Boolean);
    setEvaluationNotifications(notifications);
  }, [uniqueLatestRecords]);


  const handleFileSelect = useCallback(async (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (event) => { 
            try {
                showToast("Mengompres gambar...");
                const compressed = await compressImage(event.target.result);
                setFormValues(prev => ({...prev, photo: compressed}));
                showToast("Gambar berhasil dikompres!");
            } catch (error) { showToast("Gagal mengompres gambar."); setFormValues(prev => ({...prev, photo: event.target.result}));}
        };
        reader.readAsDataURL(file);
    }
  }, [showToast, setFormValues]);

  const handleAddOrUpdateRecord = async (e) => {
    e.preventDefault();
    let dataToSave = { ...formValues };
    if (!recordToEdit && formValues.nama) {
        const existingRecord = activeRecords.find(rec => rec.nama.toLowerCase() === formValues.nama.toLowerCase());
        if (existingRecord) {
            await firestore.addRepairRequest({ existingRecord, newRecordData: dataToSave });
            resetForm();
            return;
        }
    }
    if (formValues.status === 'Tahap Ceking') {
      dataToSave.status = formValues.cekingResult === 'Lulus' ? 'Lulus' : (formValues.tahapCeking || getNextCekingStage(formValues.nama, activeRecords));
    }
    const success = await firestore.addOrUpdateRecord(recordToEdit ? recordToEdit.id : null, dataToSave);
    if (success) {
        resetForm();
        setLastSaveTimestamp(Date.now());
        if (postSaveAction === 'reopenAttendance') {
            openModal('attendance', { participants: attendanceParticipants, locations: allFilterOptions.tc, onEditParticipant: handleEditClick });
            setPostSaveAction(null);
        }
    }
  };

  const handleSaveAssessment = (assessmentData) => {
    setFormValues(prev => ({ ...prev, penilaian: assessmentData }));
    showToast("Data penilaian telah disimpan sementara. Klik 'Simpan' untuk finalisasi.");
  };

  const mainFilterOptions = useMemo(() => {
    if (activeView === 'peserta') return { label: "Lokasi TC", options: allFilterOptions.tc };
    if (activeView === 'cabang' || activeView === 'jadwal') return { label: "Cabang", options: allFilterOptions.cabang };
    return { label: "Filter", options: [] };
  }, [activeView, allFilterOptions]);

  const renderContent = () => {
    switch(activeView) {
        case 'peserta': return <PesertaScreen records={filteredRecords} allRecords={allRecords} onEdit={handleEditClick} onDelete={firestore.softDeleteRecord} />;
        case 'cabang': return <CabangScreen records={filteredRecords} allRecords={allRecords} onEdit={handleEditClick} onDelete={firestore.softDeleteRecord} />;
        case 'izinAkses': return <AccessManagementScreen />;
        case 'jadwal': return <EvaluationScheduleScreen latestRecords={filteredRecords} allRecords={allRecords} onEdit={handleEditClick} onDelete={firestore.softDeleteRecord} />;
        case 'trash': return <TrashScreen deletedRecords={deletedRecords} onRestore={firestore.restoreRecord} onDeletePermanent={firestore.deleteRecordPermanent} />;
        default: return null;
    }
  };
  
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      {/* ===== BAGIAN ATAS YANG DIAM (STICKY) ===== */}
      <div className="flex-shrink-0">
          <div ref={addFormRef} className="p-4 pt-6 md:px-8">
              <div className="bg-gray-800 rounded-xl shadow-neumorphic border-2 border-purple-500 overflow-hidden">
                  <div onClick={() => setIsFormExpanded(p => !p)} className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-700/50 cursor-pointer">
                      <div className="flex items-center gap-3 self-start">
                          <h2 className="text-xl font-bold text-blue-300">Pendaftaran Peserta</h2>
                          <svg className={`w-6 h-6 text-blue-300 transition-transform duration-300 ${!isFormExpanded ? '-rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                      </div>
                      <input type="text" placeholder="Cari Nama..." onClick={(e) => e.stopPropagation()} className="w-full sm:max-w-xs input-rounded-border" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                  </div>
                  <DynamicForm
                      isFormExpanded={isFormExpanded} formValues={formValues} handleFormInputChange={handleFormInputChange}
                      handleAddOrUpdateRecord={handleAddOrUpdateRecord} resetForm={resetForm} fileInputRef={fileInputRef}
                      handleFileSelect={handleFileSelect} activeRecords={activeRecords} uniqueRecords={uniqueLatestRecords}
                      handleSuggestionClick={handleSuggestionClick} nameSuggestions={nameSuggestions} setNameSuggestions={setNameSuggestions}
                      onOpenAssessment={() => openModal('assessment', { onSave: handleSaveAssessment, initialData: formValues.penilaian, evaluationStatus: formValues.status })}
                  />
              </div>
          </div>

          <div className="p-4 md:px-8">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button onClick={() => setActiveView('peserta')} className={`w-full py-3 rounded-lg text-lg font-bold transition-colors ${activeView === 'peserta' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Daftar Peserta</button>
                <button onClick={() => setActiveView('cabang')} className={`w-full py-3 rounded-lg text-lg font-bold transition-colors ${activeView === 'cabang' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Cabang</button>
                <button onClick={() => setActiveView('jadwal')} className={`w-full py-3 rounded-lg text-lg font-bold transition-colors ${activeView === 'jadwal' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Jadwal Evaluasi</button>
              </div>
          </div>
          
          {(activeView === 'peserta' || activeView === 'cabang' || activeView === 'jadwal') && (
            <div className="px-4 md:px-8 pb-4 flex flex-wrap items-center gap-4">
                <select value={selectedBranchFilter} onChange={(e) => setSelectedBranchFilter(e.target.value)} className="select-rounded-border flex-grow">
                    <option value="semua">Tampilkan Semua {mainFilterOptions.label}</option>
                    <optgroup label={mainFilterOptions.label}>
                        {mainFilterOptions.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </optgroup>
                </select>
                
                <div ref={notificationBellRef} className="relative">
                    <button onClick={() => setShowNotificationPopup(p => !p)} className="p-3 bg-gray-700 rounded-lg shadow-neumorphic">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        {(evaluationNotifications.length + activityNotifications.length) > 0 && (
                            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                {evaluationNotifications.length + activityNotifications.length}
                            </span>
                        )}
                    </button>
                     {showNotificationPopup && (
                        <NotificationBellPopup 
                            evaluationNotifications={evaluationNotifications} 
                            activityNotifications={activityNotifications}
                            onClose={() => setShowNotificationPopup(false)} 
                        />
                    )}
                </div>
                
                <NavMenu 
                    setActiveView={setActiveView} 
                    onEditParticipant={handleEditClick} 
                    activeRecords={activeRecords} 
                />

            </div>
          )}
      </div>
      
      {/* ===== BAGIAN KONTEN YANG BISA DI-SCROLL ===== */}
      <div className="flex-grow overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

const ModalManager = () => {
    const { modal, closeModal } = useContext(AppContext);
    if (!modal.type) return null;

    switch (modal.type) {
        case 'assessment': return <AssessmentPopup onClose={closeModal} {...modal.props} />;
        case 'attendance': return <AttendancePopup onClose={closeModal} {...modal.props} />;
        case 'followUpDateRange': return <FollowUpDateRangePopup onClose={closeModal} {...modal.props} />;
        case 'followUpDetails': return <FollowUpDetailsPopup onClose={closeModal} {...modal.props} />;
        case 'trainerPerformanceDateRange': return <FollowUpDateRangePopup onClose={closeModal} {...modal.props} />;
        case 'trainerPerformanceList': return <TrainerPerformanceListPopup onClose={closeModal} {...modal.props} />;
        case 'trainerWorkDetail': return <TrainerWorkDetailPopup onClose={closeModal} {...modal.props} />;
        case 'bulkDeleteDateRange': return <BulkDeleteDateRangePopup onClose={closeModal} {...modal.props} />;
        case 'bulkDeleteData': return <BulkDeleteDataPopup onClose={closeModal} {...modal.props} />;
        case 'masterData': return <MasterDataManagementPopup onClose={closeModal} {...modal.props} />;
        case 'mergeData': return <MergeDataPopup onClose={closeModal} {...modal.props} />;
        case 'superAdminLogin': return <SuperAdminPopup onClose={closeModal} {...modal.props} />;
        case 'participantAttendanceReportDateRange': return <ParticipantAttendanceReportDateRangePopup onClose={closeModal} {...modal.props} />;
        case 'participantAttendanceReportDisplay': return <ReportDisplayPopup onClose={closeModal} {...modal.props} />;
        default: return null;
    }
};

function MainApp() {
    const { loginStep, isAuthReady, isLoginDataReady, setAppUpdateAvailable } = useContext(AppContext);
    
    useEffect(() => {
        // PWA: Mendaftarkan Service Worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('Service Worker berhasil didaftarkan:', registration);
                        registration.onupdatefound = () => {
                            const installingWorker = registration.installing;
                            if (installingWorker) {
                                installingWorker.onstatechange = () => {
                                    if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                        setAppUpdateAvailable(true);
                                    }
                                };
                            }
                        };
                    }).catch(error => {
                        console.log('Pendaftaran Service Worker gagal:', error);
                    });
            });
        }
    }, [setAppUpdateAvailable]);

    if (!isAuthReady || !isLoginDataReady) {
        return <LoadingSpinner />;
    }

    return (
        <>
            {loginStep === 'login' ? <LoginScreen /> : <AppContent />}
            <ModalManager />
        </>
    );
}

function App() {
    useEffect(() => {
        // Memastikan meta viewport ada untuk responsivitas
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (!viewportMeta) {
            viewportMeta = document.createElement('meta');
            viewportMeta.name = 'viewport';
            viewportMeta.content = 'width=device-width, initial-scale=1.0';
            document.head.appendChild(viewportMeta);
        }

        // Menambahkan link manifest.json dan meta PWA lainnya
        let manifestLink = document.querySelector('link[rel="manifest"]');
        if (!manifestLink) {
            manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = '/manifest.json';
            document.head.appendChild(manifestLink);
        }

        let themeColor = document.querySelector('meta[name="theme-color"]');
        if (!themeColor) {
            themeColor = document.createElement('meta');
            themeColor.name = 'theme-color';
            themeColor.content = '#111827';
            document.head.appendChild(themeColor);
        }
    }, []);

    const customStyles = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      html, body, #root { min-height: 100vh; min-height: -webkit-fill-available; scroll-behavior: smooth; }
      body { font-family: 'Inter', sans-serif; background-color: #111827; color: #ffffff; max-width: 100%; overflow-x: hidden; }
      .shadow-neumorphic { box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6), -4px -4px 6px rgba(255, 255, 255, 0.05); }
      .shadow-inner-custom { box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.1); }
      @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px) translateX(-50%); } to { opacity: 1; transform: translateY(0) translateX(-50%); } }
      .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
      @keyframes fade-in-up-view { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fade-in-up-view { animation: fade-in-up-view 0.5s ease-out forwards; }
      .input-rounded-border, .select-rounded-border, .textarea-rounded-border { background-color: #1a1a1a; border: 1px solid #4a90e2; border-radius: 8px; padding: 12px; outline: none; color: #ffffff; font-size: 16px; box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.1); }
      .input-rounded-border:focus, .select-rounded-border:focus, .textarea-rounded-border:focus { border-color: #60a5fa; }
      .select-rounded-border { -webkit-appearance: none; -moz-appearance: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.7rem center; background-size: 1.5em; padding-right: 2.5rem; }
      .horizontal-scroll-container::-webkit-scrollbar { height: 8px; }
      .horizontal-scroll-container::-webkit-scrollbar-track { background: #333; border-radius: 10px; }
      .horizontal-scroll-container::-webkit-scrollbar-thumb { background: #555; border-radius: 10px; }
      .details-section { max-height: 1500px; overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, padding 0.5s ease-in-out; opacity: 1; }
      .details-section-hidden { max-height: 0; opacity: 0; padding-top: 0 !important; padding-bottom: 0 !important; margin-top: 0 !important; }
      @keyframes slide-in-up-scroll { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      .animate-on-scroll { animation: slide-in-up-scroll 0.6s ease-out forwards; }
      .popup-wrapper { transition: opacity 300ms ease-out, transform 300ms ease-out; opacity: 0; transform: scale(0.95); }
      .popup-wrapper-visible { opacity: 1; transform: scale(1); }
    `;
    return (
        <AppProvider>
            <style>{customStyles}</style>
            <MainApp />
        </AppProvider>
    );
}

export default App;
