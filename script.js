// ================= UNIFIED DATABASE SEEDS =================

const defaultUsers = [
    { username: "zikri", password: "123", role: "Admin", name: "M. Zikri", title: "Admin Perkebunan" },
    { username: "wana", password: "123", role: "Mandor", name: "Wana", title: "Mandor Lapangan" },
    { username: "gudang", password: "123", role: "Gudang", name: "Agus Setiawan", title: "Logistics Manager" },
    { username: "manajer", password: "123", role: "Manajer", name: "Ahmad Suherman", title: "Manager Operasional" },
    { username: "keuangan", password: "123", role: "Keuangan", name: "Dwi Cahyono", title: "Finance Manager" }
];

const initialKaryawan = [
    { kode: "EMP-00124", nama: "Dio Tri Firnanda", jabatan: "Mandor Lapangan", bagian: "Lapangan", status: "AKTIF", masaKerja: "3 Tahun" },
    { kode: "EMP-00125", nama: "M.Zikri", jabatan: "Staf Administrasi", bagian: "Admin", status: "AKTIF", masaKerja: "1.5 Tahun" },
    { kode: "EMP-00128", nama: "Rudi Hermawan", jabatan: "Driver Logistik", bagian: "Logistik", status: "AKTIF", masaKerja: "5 Tahun" },
    { kode: "EMP-00132", nama: "Dedi Fauzi", jabatan: "Pemanen", bagian: "Lapangan", status: "CUTI", masaKerja: "2 Tahun" },
    { kode: "EMP-00140", nama: "Ani Rahayu", jabatan: "Staf Gudang", bagian: "Logistik", status: "AKTIF", masaKerja: "8 Bulan" },
    { kode: "EMP-00145", nama: "Budi Nugraha", jabatan: "Harvester", bagian: "Lapangan", status: "AKTIF", masaKerja: "4 Tahun" },
    { kode: "EMP-00146", nama: "Siti Pertiwi", jabatan: "Foreman", bagian: "Lapangan", status: "AKTIF", masaKerja: "2.5 Tahun" },
    { kode: "EMP-00147", nama: "Agus Hidayat", jabatan: "Pesticide App", bagian: "Lapangan", status: "AKTIF", masaKerja: "1 Tahun" },
    { kode: "EMP-00148", nama: "Rudi Mansyur", jabatan: "Transporter", bagian: "Logistik", status: "AKTIF", masaKerja: "6 Tahun" },
    { kode: "EMP-00149", nama: "Endah Kusuma", jabatan: "Admin Staff", bagian: "Admin", status: "AKTIF", masaKerja: "3 Tahun" },
    { kode: "EMP-00150", nama: "Dedi Anwar", jabatan: "Security", bagian: "Admin", status: "AKTIF", masaKerja: "1 Tahun" },
    { kode: "EMP-00151", nama: "Lilis Surya", jabatan: "Harvester", bagian: "Lapangan", status: "AKTIF", masaKerja: "7 Bulan" },
    { kode: "EMP-00152", nama: "Bambang Pamungkas", jabatan: "Produksi Sawit", bagian: "Lapangan", status: "AKTIF", masaKerja: "3.5 Tahun" },
    { kode: "EMP-00153", nama: "Agus Setiawan", jabatan: "Staff Gudang", bagian: "Logistik", status: "AKTIF", masaKerja: "2 Tahun" },
    { kode: "EMP-00154", nama: "Ratna Nurhayati", jabatan: "Administrasi Kantor", bagian: "Admin", status: "AKTIF", masaKerja: "4 Tahun" },
    { kode: "EMP-00155", nama: "Dedi Supriadi", jabatan: "Pemeliharaan Lahan", bagian: "Lapangan", status: "AKTIF", masaKerja: "3 Tahun" },
    { kode: "EMP-00156", nama: "Indah Kusuma", jabatan: "Produksi Sawit", bagian: "Lapangan", status: "AKTIF", masaKerja: "5 Tahun" }
];

const initialLahan = [
    { kode: "BLK-A01", nama: "Blok A: Utara Utama", luas: 24.5, yield: 98.2, status: "PRODUCTIVE", phase: "Fase panen aktif. Kelembaban optimal. Tidak ada hama terdeteksi.", healthScore: 98 },
    { kode: "BLK-A02", nama: "Blok A-02: Utara Barat", luas: 18.2, yield: 92.5, status: "PRODUCTIVE", phase: "Tahap pemeliharaan tanaman muda. Penyiraman otomatis optimal.", healthScore: 92 },
    { kode: "BLK-B12", nama: "Blok B: Lembah Barat", luas: 32.0, yield: 45.1, status: "RESTING", phase: "Periode pemulihan tanah setelah panen raya. Pemupukan organik dijadwalkan.", healthScore: 45 },
    { kode: "BLK-C04", nama: "Blok C: Lereng Selatan", luas: 12.8, yield: 0.0, status: "IN-PREPARATION", phase: "Pembersihan lahan dan instalasi irigasi baru. Persiapan bibit unggul.", healthScore: 12 },
    { kode: "BLK-D09", nama: "Blok D: Batas Timur", luas: 15.4, yield: 10.2, status: "ACTION REQUIRED", phase: "Peringatan Kelembaban Rendah! Sistem irigasi terhambat di sektor 3.", healthScore: 22 },
    { kode: "BLK-D15", nama: "Blok D: Batas Selatan", luas: 19.8, yield: 75.3, status: "PRODUCTIVE", phase: "Tanaman dewasa, penyiraman optimal.", healthScore: 88 },
    { kode: "BLK-A10", nama: "Blok A: Utara Tengah", luas: 22.0, yield: 85.0, status: "PRODUCTIVE", phase: "Pemupukan sesi 1 selesai, siap panen.", healthScore: 90 },
    { kode: "BLK-B03", nama: "Blok B: Lembah Timur", luas: 14.7, yield: 62.0, status: "PRODUCTIVE", phase: "Kondisi tanah stabil, penyiraman terjadwal.", healthScore: 82 }
];

const initialPanen = [
    { waktu: "08:30 - 24 Okt", blok: "Blok A-12", komoditas: "Kelapa Sawit", berat: 1240, status: "VERIFIED" },
    { waktu: "09:15 - 24 Okt", blok: "Blok B-03", komoditas: "Kelapa Sawit", berat: 985, status: "VERIFIED" },
    { waktu: "10:05 - 24 Okt", blok: "Blok C-08", komoditas: "Karet", berat: 420, status: "PENDING" },
    { waktu: "11:40 - 24 Okt", blok: "Blok A-02", komoditas: "Kelapa Sawit", berat: 1510, status: "VERIFIED" },
    { waktu: "13:20 - 23 Okt", blok: "Blok D-15", komoditas: "Kelapa Sawit", berat: 890, status: "VERIFIED" },
    { waktu: "14:00 - 23 Okt", blok: "Blok B-09", komoditas: "Karet", berat: 315, status: "VERIFIED" },
    { waktu: "15:30 - 23 Okt", blok: "Blok A-10", komoditas: "Kelapa Sawit", berat: 1120, status: "VERIFIED" },
    { waktu: "07:30 - 22 Okt", blok: "Blok A-01", komoditas: "Kelapa Sawit", berat: 1420, status: "VERIFIED" },
    { waktu: "09:45 - 22 Okt", blok: "Blok C-04", komoditas: "Karet", berat: 510, status: "VERIFIED" },
    { waktu: "10:30 - 22 Okt", blok: "Blok B-12", komoditas: "Kelapa Sawit", berat: 820, status: "VERIFIED" },
    { waktu: "13:15 - 21 Okt", blok: "Blok D-09", komoditas: "Kelapa Sawit", berat: 950, status: "VERIFIED" },
    { waktu: "15:00 - 21 Okt", blok: "Blok A-12", komoditas: "Karet", berat: 380, status: "PENDING" }
];

const initialAbsensi = [
    { kode: "EMP-0021", nama: "Budi Nugraha", jabatan: "Harvester", checkIn: "06:45 AM", blok: "A-12", status: "HADIR" },
    { kode: "EMP-0022", nama: "Siti Pertiwi", jabatan: "Foreman", checkIn: "07:02 AM", blok: "A-12", status: "HADIR" },
    { kode: "EMP-0023", nama: "Agus Hidayat", jabatan: "Pesticide App", checkIn: "--:--", blok: "--", status: "ALPA" },
    { kode: "EMP-0024", nama: "Rudi Mansyur", jabatan: "Transporter", checkIn: "06:50 AM", blok: "B-04", status: "HADIR" },
    { kode: "EMP-0025", nama: "Endah Kusuma", jabatan: "Admin Staff", checkIn: "--:--", blok: "--", status: "SAKIT" },
    { kode: "EMP-0026", nama: "Dedi Anwar", jabatan: "Security", checkIn: "--:--", blok: "--", status: "IZIN" },
    { kode: "EMP-0027", nama: "Lilis Surya", jabatan: "Harvester", checkIn: "06:38 AM", blok: "A-12", status: "HADIR" },
    { kode: "EMP-0028", nama: "Dio Tri Firnanda", jabatan: "Mandor Lapangan", checkIn: "06:30 AM", blok: "A-01", status: "HADIR" },
    { kode: "EMP-0029", nama: "Rudi Hermawan", jabatan: "Driver Logistik", checkIn: "07:15 AM", blok: "B-02", status: "HADIR" },
    { kode: "EMP-0030", nama: "Ani Rahayu", jabatan: "Staf Gudang", checkIn: "07:00 AM", blok: "GD-01", status: "HADIR" }
];

const initialGudang = [
    { kode: "FRT-001", nama: "Pupuk NPK Mutiara", kategori: "Fertilizer", stok: 2450, satuan: "Kg", status: "AMAN" },
    { kode: "FRT-009", nama: "Urea Petrokimia", kategori: "Fertilizer", stok: 45, satuan: "Kg", status: "KRITIS" },
    { kode: "TLS-042", nama: "Egrek Sawit Pro", kategori: "Tools", stok: 128, satuan: "Unit", status: "AMAN" },
    { kode: "TLS-011", nama: "Parang Tebas Baja", kategori: "Tools", stok: 56, satuan: "Unit", status: "AMAN" },
    { kode: "SED-005", nama: "Bibit Sawit DxP", kategori: "Seeds", stok: 5000, satuan: "Polibag", status: "AMAN" },
    { kode: "SED-012", nama: "Karet GT-1 Super", kategori: "Seeds", stok: 82, satuan: "Stump", status: "KRITIS" },
    { kode: "FRT-015", nama: "Pestisida RoundUp", kategori: "Fertilizer", stok: 350, satuan: "Liter", status: "AMAN" },
    { kode: "TLS-050", nama: "Cangkul Baja Super", kategori: "Tools", stok: 95, satuan: "Unit", status: "AMAN" },
    { kode: "SED-020", nama: "Bibit Kopi Arabika", kategori: "Seeds", stok: 1200, satuan: "Polibag", status: "AMAN" }
];

const initialDistribusi = [
    { kode: "#TRX-8821", kendaraan: "TRK-A102", driver: "Sumarno", tujuan: "Pelabuhan Tanjung Priok", volume: "4.2 Ton", status: "DIJALAN" },
    { kode: "#TRX-8819", kendaraan: "TRK-C042", driver: "Andi Wijaya", tujuan: "Gudang Regional C", volume: "2.8 Ton", status: "DIKEMAS" },
    { kode: "#TRX-8815", kendaraan: "TRK-B211", driver: "Bambang S.", tujuan: "Pabrik Pengolahan V", volume: "5.5 Ton", status: "SAMPAI" },
    { kode: "#TRX-8799", kendaraan: "TRK-A104", driver: "Mulyadi", tujuan: "Distributor Central", volume: "3.2 Ton", status: "SAMPAI" },
    { kode: "#TRX-8795", kendaraan: "TRK-A001", driver: "Dedi K.", tujuan: "Terminal Logistik North", volume: "4.0 Ton", status: "DIJALAN" },
    { kode: "#TRX-8798", kendaraan: "TRK-D990", driver: "Ismail J.", tujuan: "Gudang Export", volume: "6.1 Ton", status: "DIKEMAS" },
    { kode: "#TRX-8790", kendaraan: "TRK-B112", driver: "Edi Susilo", tujuan: "Pabrik Kelapa Sawit", volume: "5.0 Ton", status: "SAMPAI" },
    { kode: "#TRX-8785", kendaraan: "TRK-C055", driver: "Slamet R.", tujuan: "Gudang Regional B", volume: "3.5 Ton", status: "SAMPAI" }
];

const initialGaji = [
    { kode: "EMP-0922", nama: "Bambang Pamungkas", divisi: "Produksi Kelapa Sawit", status: "SELESAI", total: 5450000 },
    { kode: "EMP-1045", nama: "Agus Setiawan", divisi: "Logistik & Distribusi", status: "SELESAI", total: 4820000 },
    { kode: "EMP-0811", nama: "Ratna Nurhayati", divisi: "Administrasi Kantor", status: "MENUNGGU", total: 6100000 },
    { kode: "EMP-1209", nama: "Dedi Supriadi", divisi: "Pemeliharaan Lahan", status: "SELESAI", total: 4150000 },
    { kode: "EMP-0772", nama: "Indah Kusuma", divisi: "Produksi Kelapa Sawit", status: "DITOLAK", total: 5450000 },
    { kode: "EMP-0124", nama: "Dio Tri Firnanda", divisi: "Produksi Kelapa Sawit", status: "SELESAI", total: 5800000 },
    { kode: "EMP-0125", nama: "M.Zikri", divisi: "Administrasi Kantor", status: "SELESAI", total: 4200000 },
    { kode: "EMP-0128", nama: "Rudi Hermawan", divisi: "Logistik & Distribusi", status: "MENUNGGU", total: 5000000 }
];

const initialKeuangan = [
    { tanggal: "12 Oct 2023", deskripsi: "Pembelian Pupuk NPK - Sesi II", debit: 12500000, kredit: 0 },
    { tanggal: "10 Oct 2023", deskripsi: "Penjualan Hasil Panen Blok C", debit: 0, kredit: 84200000 },
    { tanggal: "08 Oct 2023", deskripsi: "Biaya Maintenance Alat Berat", debit: 5400000, kredit: 0 },
    { tanggal: "05 Oct 2023", deskripsi: "Gaji Harian Buruh Tanam", debit: 18250000, kredit: 0 },
    { tanggal: "02 Oct 2023", deskripsi: "Penjualan CPO - Kontrak A12", debit: 0, kredit: 145000000 },
    { tanggal: "30 Sep 2023", deskripsi: "Restock BBM Solar Genset", debit: 7800000, kredit: 0 },
    { tanggal: "28 Sep 2023", deskripsi: "Audit Operasional Semester 2", debit: 15000000, kredit: 0 },
    { tanggal: "25 Sep 2023", deskripsi: "Pembayaran Premi Asuransi", debit: 4200000, kredit: 0 },
    { tanggal: "22 Sep 2023", deskripsi: "Penjualan Hasil Panen Blok A", debit: 0, kredit: 62500000 },
    { tanggal: "18 Sep 2023", deskripsi: "Biaya Servis Traktor John Deere", debit: 3200000, kredit: 0 },
    { tanggal: "15 Sep 2023", deskripsi: "Pembelian Bibit Kelapa Sawit", debit: 11000000, kredit: 0 },
    { tanggal: "10 Sep 2023", deskripsi: "Penjualan Karet Mentah 5 Ton", debit: 0, kredit: 45000000 }
];

// Initialize LocalStorage with seeds if empty
function initStorage() {
    const keys = {
        users: defaultUsers,
        karyawan: initialKaryawan,
        lahan: initialLahan,
        panen: initialPanen,
        absensi: initialAbsensi,
        gudang: initialGudang,
        distribusi: initialDistribusi,
        gaji: initialGaji,
        keuangan: initialKeuangan
    };

    for (const key in keys) {
        try {
            const val = localStorage.getItem(key);
            if (!val) {
                localStorage.setItem(key, JSON.stringify(keys[key]));
            } else {
                JSON.parse(val);
            }
        } catch (e) {
            console.warn(`LocalStorage key '${key}' was corrupted, resetting to seed data.`);
            localStorage.setItem(key, JSON.stringify(keys[key]));
        }
    }
}

initStorage();

// ================= LOGIN / LOGOUT =================

function login() {
    const uInput = document.getElementById("username").value.trim().toLowerCase();
    const pInput = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(u => (u.username || "").toLowerCase() === uInput && u.password === pInput);

    if (foundUser) {
        localStorage.setItem("activeUser", JSON.stringify(foundUser));
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau password salah! (Tips: Gunakan username 'zikri' dan password '123')");
    }
}

function logout() {
    localStorage.removeItem("activeUser");
    window.location.href = "index.html";
}

// ================= CHANGE CREDENTIALS SYSTEM =================

// Toggle login vs credentials forms
function toggleCredentialsForm(show) {
    const loginSec = document.getElementById("login-section");
    const credsSec = document.getElementById("change-credentials-section");
    
    if (show) {
        if (loginSec) loginSec.classList.add("hidden");
        if (credsSec) credsSec.classList.remove("hidden");
        // Clear change credential fields
        const fields = ["old-username", "old-password", "new-username", "new-password", "confirm-new-password"];
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = "";
        });
    } else {
        if (credsSec) credsSec.classList.add("hidden");
        if (loginSec) loginSec.classList.remove("hidden");
    }
}

// Toggle password text visibility
function togglePasswordVisibility(inputId, iconEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const icon = iconEl.querySelector("i");
    if (!icon) return;

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Logic to change username and password
function changeCredentials() {
    const oldUsername = document.getElementById("old-username").value.trim();
    const oldPassword = document.getElementById("old-password").value.trim();
    const newUsername = document.getElementById("new-username").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();
    const confirmNewPassword = document.getElementById("confirm-new-password").value.trim();

    if (!oldUsername || !oldPassword || !newUsername || !newPassword || !confirmNewPassword) {
        alert("Semua kolom harus diisi!");
        return;
    }

    if (newPassword !== confirmNewPassword) {
        alert("Konfirmasi password baru tidak cocok!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(u => (u.username || "").toLowerCase() === oldUsername.toLowerCase() && u.password === oldPassword);

    if (userIndex === -1) {
        alert("Username lama atau password lama salah!");
        return;
    }

    // Check if new username is already used by another user
    const usernameExists = users.some((u, idx) => 
        idx !== userIndex && (u.username || "").toLowerCase() === newUsername.toLowerCase()
    );
    if (usernameExists) {
        alert("Username baru sudah digunakan oleh akun lain!");
        return;
    }

    // Update username and password
    users[userIndex].username = newUsername;
    users[userIndex].password = newPassword;

    // Save back to storage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Username dan password berhasil diubah!");
    
    // Go back to login form
    toggleCredentialsForm(false);

    // Auto fill new username into login input
    const usernameLogin = document.getElementById("username");
    if (usernameLogin) {
        usernameLogin.value = newUsername;
    }
    const passwordLogin = document.getElementById("password");
    if (passwordLogin) {
        passwordLogin.value = "";
    }
}

// Check auth state
function checkAuth() {
    try {
        const loc = window.location.href;
        const isLoginPage = loc.includes("index.html") || loc.endsWith("/") || loc.endsWith("/Zikri") || loc.endsWith("/Zikri/");
        const activeUser = localStorage.getItem("activeUser");
        if (!activeUser && !isLoginPage) {
            window.location.href = "index.html";
        }
        return activeUser ? JSON.parse(activeUser) : null;
    } catch (e) {
        console.error("Error in checkAuth:", e);
        const loc = window.location.href;
        const isLoginPage = loc.includes("index.html") || loc.endsWith("/") || loc.endsWith("/Zikri") || loc.endsWith("/Zikri/");
        if (!isLoginPage) {
            window.location.href = "index.html";
        }
        return null;
    }
}

// Display current active user info
function displayUserInfo() {
    const user = checkAuth();
    if (!user) return;

    const userNames = document.querySelectorAll(".profile-user-name");
    const userTitles = document.querySelectorAll(".profile-user-title");

    userNames.forEach(el => el.textContent = user.name);
    userTitles.forEach(el => el.textContent = user.title || user.role);
}

// ================= MODAL HELPERS =================

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        if (id === "modalGaji") {
            populateGajiEmployeeDropdown();
        }
    }
}

function populateGajiEmployeeDropdown() {
    const selectEl = document.getElementById("addGajiName");
    if (!selectEl) return;

    const list = getData("karyawan");
    selectEl.innerHTML = "";

    if (list.length === 0) {
        const opt = document.createElement("option");
        opt.value = "";
        opt.textContent = "-- Tidak ada karyawan --";
        selectEl.appendChild(opt);
        return;
    }

    list.forEach(k => {
        const opt = document.createElement("option");
        opt.value = k.nama;
        opt.textContent = `${k.nama} (${k.bagian} - ${k.jabatan})`;
        selectEl.appendChild(opt);
    });

    const updateDivAndSalary = () => {
        const selectedName = selectEl.value;
        const emp = list.find(k => k.nama === selectedName);
        if (emp) {
            const divEl = document.getElementById("addGajiDiv");
            if (divEl) {
                if (emp.bagian === "Lapangan") {
                    if (emp.jabatan.toLowerCase().includes("lahan") || emp.jabatan.toLowerCase().includes("pemeliharaan")) {
                        divEl.value = "Pemeliharaan Lahan";
                    } else {
                        divEl.value = "Produksi Kelapa Sawit";
                    }
                } else if (emp.bagian === "Logistik") {
                    divEl.value = "Logistik & Distribusi";
                } else {
                    divEl.value = "Administrasi Kantor";
                }
            }

            const gajiList = getData("gaji");
            const matchGaji = gajiList.find(g => g.nama && g.nama.toLowerCase() === selectedName.toLowerCase());
            const totalInput = document.getElementById("addGajiTotal");
            if (totalInput) {
                totalInput.value = matchGaji ? (parseFloat(matchGaji.total) || 4500000) : 4500000;
            }
        }
    };

    updateDivAndSalary();
    selectEl.onchange = updateDivAndSalary;
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
    }
}

// ================= DATA MANIPULATION =================

// Standard getter/setter
function getData(key) {
    try {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : [];
    } catch (e) {
        console.error("Error parsing localStorage key " + key + ":", e);
        return [];
    }
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Add/Delete methods
function addKaryawan(event) {
    if (event) event.preventDefault();
    const name = document.getElementById("addNama").value;
    const bagian = document.getElementById("addBagian").value;
    const jabatan = document.getElementById("addJabatan").value;
    const status = document.getElementById("addStatus").value;
    const masaKerja = document.getElementById("addMasaKerja").value;
    const gajiNominal = parseFloat(document.getElementById("addGajiNominal").value) || 4500000;

    const list = getData("karyawan");
    const newCode = "EMP-" + String(list.length + 125).padStart(5, '0');

    list.unshift({ kode: newCode, nama: name, bagian: bagian, jabatan: jabatan, status: status, masaKerja: masaKerja });
    saveData("karyawan", list);

    // Also add corresponding payroll entry (gaji)
    const gajiList = getData("gaji");
    const newGajiCode = "EMP-" + String(Math.floor(1000 + Math.random() * 900));
    let divisiGaji = "Administrasi Kantor";
    if (bagian === "Lapangan") divisiGaji = "Produksi Kelapa Sawit";
    else if (bagian === "Logistik") divisiGaji = "Logistik & Distribusi";

    gajiList.unshift({ kode: newGajiCode, nama: name, divisi: divisiGaji, status: "MENUNGGU", total: gajiNominal });
    saveData("gaji", gajiList);

    closeModal("modalKaryawan");
    renderKaryawan();
    renderGaji();
}

function deleteKaryawan(kode) {
    if (confirm(`Hapus karyawan ${kode}?`)) {
        let list = getData("karyawan");
        const employee = list.find(k => k.kode === kode);
        list = list.filter(k => k.kode !== kode);
        saveData("karyawan", list);

        // Also delete their payroll record if they exist
        if (employee) {
            let gajiList = getData("gaji");
            gajiList = gajiList.filter(g => g.nama.toLowerCase() !== employee.nama.toLowerCase());
            saveData("gaji", gajiList);
            renderGaji();
        }

        renderKaryawan();
    }
}

function addLahan(event) {
    if (event) event.preventDefault();
    const code = document.getElementById("addLahanCode").value;
    const name = document.getElementById("addLahanName").value;
    const luas = parseFloat(document.getElementById("addLahanLuas").value) || 0;
    const yld = parseFloat(document.getElementById("addLahanYield").value) || 0;
    const status = document.getElementById("addLahanStatus").value;
    const desc = document.getElementById("addLahanDesc").value;
    const health = parseInt(document.getElementById("addLahanHealth").value) || 100;

    const list = getData("lahan");
    list.unshift({ kode: code, nama: name, luas: luas, yield: yld, status: status, phase: desc, healthScore: health });
    saveData("lahan", list);
    closeModal("modalLahan");
    renderLahan();
}

function deleteLahan(kode) {
    if (confirm(`Hapus blok lahan ${kode}?`)) {
        let list = getData("lahan");
        list = list.filter(l => l.kode !== kode);
        saveData("lahan", list);
        renderLahan();
    }
}

function addPanen(event) {
    if (event) event.preventDefault();
    const block = document.getElementById("addPanenBlock").value;
    const item = document.getElementById("addPanenItem").value;
    const weight = parseFloat(document.getElementById("addPanenWeight").value) || 0;
    const status = document.getElementById("addPanenStatus").value;

    const date = new Date();
    const timeStr = String(date.getHours()).padStart(2, '0') + ":" + String(date.getMinutes()).padStart(2, '0') + " - " + date.getDate() + " " + ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"][date.getMonth()];

    const list = getData("panen");
    list.unshift({ waktu: timeStr, blok: block, komoditas: item, berat: weight, status: status });
    saveData("panen", list);
    closeModal("modalPanen");
    renderPanen();
}

function deletePanen(index) {
    if (confirm("Hapus log panen ini?")) {
        const list = getData("panen");
        list.splice(index, 1);
        saveData("panen", list);
        renderPanen();
    }
}

function addAbsensi(event) {
    if (event) event.preventDefault();
    const nama = document.getElementById("addAbsenNama").value;
    const jabatan = document.getElementById("addAbsenJabatan").value;
    const checkIn = document.getElementById("addAbsenCheck").value || "--:--";
    const blok = document.getElementById("addAbsenBlok").value || "--";
    const status = document.getElementById("addAbsenStatus").value;

    const list = getData("absensi");
    const code = "EMP-" + String(list.length + 28).padStart(4, '0');
    list.unshift({ kode: code, nama: nama, jabatan: jabatan, checkIn: checkIn, blok: blok, status: status });
    saveData("absensi", list);
    closeModal("modalAbsensi");
    renderAbsensi();
}

function addGudang(event) {
    if (event) event.preventDefault();
    const name = document.getElementById("addGudangName").value;
    const cat = document.getElementById("addGudangCat").value;
    const stock = parseInt(document.getElementById("addGudangStock").value) || 0;
    const unit = document.getElementById("addGudangUnit").value;
    const status = stock < 100 ? "KRITIS" : "AMAN";

    const list = getData("gudang");
    const prefix = cat === "Fertilizer" ? "FRT" : (cat === "Tools" ? "TLS" : "SED");
    const code = prefix + "-" + String(list.length + 13).padStart(3, '0');

    list.unshift({ kode: code, nama: name, kategori: cat, stok: stock, satuan: unit, status: status });
    saveData("gudang", list);
    closeModal("modalGudang");
    renderGudang();
}

function addDistribusi(event) {
    if (event) event.preventDefault();
    const vehicle = document.getElementById("addDistVehicle").value;
    const driver = document.getElementById("addDistDriver").value;
    const dest = document.getElementById("addDistDest").value;
    const vol = document.getElementById("addDistVol").value;
    const status = document.getElementById("addDistStatus").value;

    const list = getData("distribusi");
    const code = "#TRX-" + String(Math.floor(8800 + Math.random() * 200));

    list.unshift({ kode: code, kendaraan: vehicle, driver: driver, tujuan: dest, volume: vol + " Ton", status: status });
    saveData("distribusi", list);
    closeModal("modalDistribusi");
    renderDistribusi();
}

function addGaji(event) {
    if (event) event.preventDefault();
    const name = document.getElementById("addGajiName").value;
    const div = document.getElementById("addGajiDiv").value;
    const total = parseFloat(document.getElementById("addGajiTotal").value) || 0;
    const status = document.getElementById("addGajiStatus").value;

    const list = getData("gaji");
    const code = "EMP-" + String(Math.floor(1000 + Math.random() * 900));

    list.unshift({ kode: code, nama: name, divisi: div, total: total, status: status });
    saveData("gaji", list);
    closeModal("modalGaji");
    renderGaji();
}

function deleteGaji(kode) {
    if (confirm(`Hapus data gaji dengan kode ${kode}?`)) {
        let list = getData("gaji");
        list = list.filter(g => g.kode !== kode);
        saveData("gaji", list);
        renderGaji();
    }
}

function runKolektifGaji() {
    if (confirm("Proses pembayaran gaji kolektif untuk semua karyawan dengan status MENUNGGU?")) {
        const list = getData("gaji");
        list.forEach(g => {
            if (g.status === "MENUNGGU") {
                g.status = "SELESAI";
            }
        });
        saveData("gaji", list);
        renderGaji();
        alert("Gaji kolektif berhasil diproses!");
    }
}

function addKeuangan(event) {
    if (event) event.preventDefault();
    const desc = document.getElementById("addKeuDesc").value;
    const type = document.getElementById("addKeuType").value;
    const amt = parseFloat(document.getElementById("addKeuAmt").value) || 0;

    const date = new Date();
    const dateStr = date.getDate() + " " + ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"][date.getMonth()] + " " + date.getFullYear();

    const list = getData("keuangan");
    list.unshift({
        tanggal: dateStr,
        deskripsi: desc,
        debit: type === "debit" ? amt : 0,
        kredit: type === "kredit" ? amt : 0
    });
    saveData("keuangan", list);
    closeModal("modalKeuangan");
    renderKeuangan();
}

// ================= EXPORT TO CSV =================

function exportToCSV(key, filename) {
    const list = getData(key);
    if (list.length === 0) {
        alert("Tidak ada data untuk diekspor!");
        return;
    }

    const headers = Object.keys(list[0]);
    const csvRows = [headers.join(",")];

    for (const row of list) {
        const values = headers.map(header => {
            const escaped = ('' + row[header]).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
    }

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename || `${key}_export.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ================= SIMULATIONS =================

function deployFieldTeam() {
    alert("Tim Lapangan berhasil ditugaskan ke BLK-D09!");
    let list = getData("lahan");
    const blockIdx = list.findIndex(l => l.kode === "BLK-D09");
    if (blockIdx !== -1) {
        list[blockIdx].status = "PRODUCTIVE";
        list[blockIdx].healthScore = 98;
        list[blockIdx].phase = "Fase panen aktif. Kelembaban dan irigasi kembali optimal setelah perbaikan tim lapangan.";
        saveData("lahan", list);
        renderLahan();
    }
}

function prosesPengadaanCepat() {
    alert("Proses pengadaan cepat berhasil dijalankan!");
    let list = getData("gudang");
    let replenished = false;
    list.forEach(g => {
        if (g.status === "KRITIS") {
            g.stok = g.nama.includes("Urea") ? 1000 : 800;
            g.status = "AMAN";
            replenished = true;
        }
    });
    if (replenished) {
        saveData("gudang", list);
        renderGudang();
    }
}

function printReport(title) {
    alert(`Mengekstrak file analisis untuk ${title || 'SIM Perkebunan'}...`);
    window.print();
}

function triggerFeatureInProgress(featureName) {
    alert(`Fitur "${featureName || 'Ini'}" sedang dalam pengembangan.`);
}

// ================= DYNAMIC PAGINATION SYSTEM =================

// State paginations
let pKaryawan = 1;
let pPanen = 1;
let pAbsensi = 1;
let pGudang = 1;
let pDistribusi = 1;
let pGaji = 1;
let pKeuangan = 1;

const LIMIT = 5;

// Lahan custom "Lihat Semua Data" state
let showAllLahan = false;
function lihatSemuaLahan() {
    showAllLahan = true;
    renderLahan();
    alert("Menampilkan semua data blok lahan!");
}

function paginate(array, page, limit) {
    return array.slice((page - 1) * limit, page * limit);
}

function renderPaginationControls(textId, controlsId, totalItems, currentPage, limit, onChangePageName) {
    const textEl = document.getElementById(textId);
    const controlsEl = document.getElementById(controlsId);
    if (!textEl && !controlsEl) return;

    const totalPages = Math.ceil(totalItems / limit) || 1;
    const start = totalItems === 0 ? 0 : (currentPage - 1) * limit + 1;
    const end = Math.min(currentPage * limit, totalItems);

    if (textEl) {
        textEl.innerText = `Menampilkan ${start}-${end} dari ${totalItems} entri`;
    }

    if (controlsEl) {
        let html = '';
        const prevDisabled = currentPage === 1;
        html += `
            <button onclick="${prevDisabled ? '' : `${onChangePageName}(${currentPage - 1})`}" 
                class="w-8 h-8 rounded-lg bg-slate-50 ${prevDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-slate-100'} flex items-center justify-center border border-slate-200/60">
                <i class="fa-solid fa-chevron-left text-[10px]"></i>
            </button>
        `;

        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage;
            html += `
                <button onclick="${onChangePageName}(${i})" 
                    class="w-8 h-8 rounded-lg ${isActive ? 'bg-[#113222] text-[#8cedaf] shadow-sm' : 'bg-slate-50 text-gray-500 hover:bg-slate-100'} flex items-center justify-center border border-slate-200/60">
                    ${i}
                </button>
            `;
        }

        const nextDisabled = currentPage === totalPages;
        html += `
            <button onclick="${nextDisabled ? '' : `${onChangePageName}(${currentPage + 1})`}" 
                class="w-8 h-8 rounded-lg bg-slate-50 ${nextDisabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-slate-100'} flex items-center justify-center border border-slate-200/60">
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
        `;
        controlsEl.innerHTML = html;
    }
}

// Global page changers called from buttons
function changePageKaryawan(p) { pKaryawan = p; renderKaryawan(); }
function changePagePanen(p) { pPanen = p; renderPanen(); }
function changePageAbsensi(p) { pAbsensi = p; renderAbsensi(); }
function changePageGudang(p) { pGudang = p; renderGudang(); }
function changePageDistribusi(p) { pDistribusi = p; renderDistribusi(); }
function changePageGaji(p) { pGaji = p; renderGaji(); }
function changePageKeuangan(p) { pKeuangan = p; renderKeuangan(); }

// ================= RENDERING LOGIC =================

let productionChart = null;

function updateDashboardChart(timeframe, btn) {
    if (btn) {
        const parent = btn.parentElement;
        parent.querySelectorAll("button").forEach(b => {
            b.className = "px-3 py-1.5 rounded-md text-gray-500 hover:text-gray-800";
        });
        btn.className = "px-3 py-1.5 bg-emerald-800 text-white rounded-md shadow-sm";
    }

    let newData = [25, 23, 27, 26, 29, 28, 31, 30, 32, 34.2, 33, 35];
    let categories = ['Minggu 1', '', '', '', 'Minggu 2', '', '', '', 'Minggu 3', '', 'Minggu 4', ''];

    if (timeframe === '1W') {
        newData = [4.2, 5.1, 4.8, 6.2, 5.8, 6.5, 7.2];
        categories = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    } else if (timeframe === '1Y') {
        newData = [310, 340, 290, 420, 450, 490, 520, 480, 510, 580, 550, 610];
        categories = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    }

    if (productionChart) {
        productionChart.updateSeries([{
            name: timeframe === '1W' ? 'Hasil Bumi (Ton/Hari)' : 'Hasil Bumi (Ton)',
            data: newData
        }]);
        productionChart.updateOptions({
            xaxis: { categories: categories }
        });
    }
}

// Render Dashboard Overview
function renderDashboard() {
    const listK = getData("karyawan");
    const listL = getData("lahan");
    const listP = getData("panen");

    // Dynamic metrics totals
    if (document.getElementById("totalKaryawan")) document.getElementById("totalKaryawan").innerText = listK.length.toLocaleString("id-ID");
    if (document.getElementById("totalLahan")) {
        const totalLuas = listL.reduce((sum, l) => sum + (parseFloat(l.luas) || 0), 0);
        document.getElementById("totalLahan").innerText = totalLuas.toFixed(0).toLocaleString("id-ID");
    }
    if (document.getElementById("totalPanen")) {
        const totalB = listP.reduce((sum, p) => sum + (parseFloat(p.berat) || 0), 0) / 1000;
        document.getElementById("totalPanen").innerText = totalB.toFixed(1);
    }

    // Render Recent Harvest (Only first 3 rows in Dashboard table, can be filtered by dashboard search)
    const listTable = document.getElementById("dashboardHarvestTable");
    if (listTable) {
        listTable.innerHTML = "";

        let filteredP = listP;
        const query = (document.getElementById("searchDashboard")?.value || "").trim().toLowerCase();
        if (query) {
            filteredP = listP.filter(p =>
                (p.blok || "").toLowerCase().includes(query) ||
                (p.komoditas || "").toLowerCase().includes(query) ||
                (p.status || "").toLowerCase().includes(query)
            );
        }

        filteredP.slice(0, 3).forEach(item => {
            const statusColor = (item.status || "") === "VERIFIED" ? "text-green-600 bg-green-50" : "text-yellow-600 bg-yellow-50";
            const indicatorDot = (item.status || "") === "VERIFIED" ? "bg-green-500" : "bg-yellow-500";
            const itemBerat = parseFloat(item.berat) || 0;
            listTable.innerHTML += `
                <tr class="table-row-interactive border-b border-gray-100">
                    <td class="px-6 py-4 font-bold text-gray-800">${item.blok || "-"}</td>
                    <td class="px-6 py-4 text-gray-600 text-sm">${item.komoditas || "-"}</td>
                    <td class="px-6 py-4">
                        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor}">
                            <span class="w-1.5 h-1.5 rounded-full ${indicatorDot}"></span>
                            ${item.status || "PENDING"}
                        </span>
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-800 text-right">${itemBerat.toLocaleString("id-ID")}</td>
                </tr>
            `;
        });
    }

    // Chart: Live Production Analytics
    const chartEl = document.getElementById("liveProductionChart");
    if (chartEl) {
        chartEl.innerHTML = "";
        const options = {
            chart: {
                type: 'line',
                height: 250,
                toolbar: { show: false },
                zoom: { enabled: false }
            },
            stroke: {
                curve: 'smooth',
                width: 3,
                colors: ['#1c4532']
            },
            series: [{
                name: 'Hasil Bumi (Ton)',
                data: [25, 23, 27, 26, 29, 28, 31, 30, 32, 34.2, 33, 35]
            }],
            xaxis: {
                categories: ['Minggu 1', '', '', '', 'Minggu 2', '', '', '', 'Minggu 3', '', 'Minggu 4', ''],
                labels: { style: { colors: '#94a3b8', fontSize: '10px' } }
            },
            yaxis: {
                show: false
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#8cedaf'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 0.9,
                    opacityTo: 0.6,
                    stops: [0, 100, 100]
                }
            },
            markers: {
                size: 4,
                colors: ['#1c4532'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: { size: 6 }
            },
            grid: {
                borderColor: '#f1f5f9',
                strokeDashArray: 4
            },
            tooltip: {
                y: { formatter: (val) => val + " Ton" }
            }
        };
        productionChart = new ApexCharts(chartEl, options);
        productionChart.render();
    }
}

// Render Karyawan Page
function renderKaryawan() {
    let list = getData("karyawan");

    // Filter search
    const query = (document.getElementById("searchKaryawan")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(k =>
            (k.nama || "").toLowerCase().includes(query) ||
            (k.kode || "").toLowerCase().includes(query) ||
            (k.jabatan || "").toLowerCase().includes(query)
        );
    }

    // Filter division dropdown
    const divSelector = document.getElementById("filterKaryawanDivisi");
    if (divSelector && divSelector.value !== "Semua Divisi") {
        list = list.filter(k => k.bagian === divSelector.value);
    }

    const container = document.getElementById("karyawanTableBody");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pKaryawan > totalPages) pKaryawan = totalPages;

    // Paginate list
    const paginatedList = paginate(list, pKaryawan, LIMIT);

    const gajiList = getData("gaji");

    container.innerHTML = "";
    paginatedList.forEach(k => {
        const kNama = k.nama || "Karyawan";
        const initials = kNama.split(" ").filter(Boolean).map(n => n[0]).slice(0, 2).join("").toUpperCase() || "K";
        const badgeColors = ["bg-emerald-100 text-emerald-700", "bg-cyan-100 text-cyan-700", "bg-amber-100 text-amber-700", "bg-rose-100 text-rose-700"];
        const randomColor = badgeColors[Math.abs(kNama.charCodeAt(0) - 65) % badgeColors.length];

        const statusColor = k.status === "AKTIF" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700";

        // Find matching salary from gaji list
        const matchGaji = gajiList.find(g => g.nama && k.nama && g.nama.toLowerCase() === k.nama.toLowerCase());
        const gajiVal = matchGaji ? (parseFloat(matchGaji.total) || 0) : 4500000; // default to 4.5M

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4 font-mono text-xs text-gray-500 font-bold">${k.kode || "-"}</td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-full ${randomColor} flex items-center justify-center font-bold text-xs shadow-sm">
                            ${initials}
                        </div>
                        <div>
                            <div class="font-bold text-gray-900 leading-tight">${kNama}</div>
                            <div class="text-xs text-gray-400 font-medium">${k.jabatan || "Karyawan"}</div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600 font-semibold">${k.bagian || "-"}</td>
                <td class="px-6 py-4">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider ${statusColor}">${k.status || "AKTIF"}</span>
                </td>
                <td class="px-6 py-4 text-xs text-gray-500 font-medium">${k.masaKerja || "Baru"}</td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">Rp. ${gajiVal.toLocaleString("id-ID")}</td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                        <button onclick="alert('Detail Karyawan:\\nID: ${k.kode || "-"}\\nNama: ${kNama}\\nDivisi: ${k.bagian || "-"}\\nJabatan: ${k.jabatan || "-"}\\nStatus: ${k.status || "-"}\\nGaji Bulanan: Rp. ${gajiVal.toLocaleString('id-ID')}')" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100"><i class="fa-regular fa-eye text-xs"></i></button>
                        <button onclick="deleteKaryawan('${k.kode || ""}')" class="text-gray-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50"><i class="fa-regular fa-trash-can text-xs"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("karyawanPaginationText", "karyawanPaginationControls", list.length, pKaryawan, LIMIT, "changePageKaryawan");

    // Dynamic stats computation
    const allKaryawan = getData("karyawan");
    const countLapangan = allKaryawan.filter(k => k.bagian === "Lapangan").length;
    const countAdmin = allKaryawan.filter(k => k.bagian === "Admin").length;
    const countLogistik = allKaryawan.filter(k => k.bagian === "Logistik").length;
    const totalK = allKaryawan.length || 1;

    const pctLapangan = Math.round((countLapangan / totalK) * 100);
    const pctAdmin = Math.round((countAdmin / totalK) * 100);
    const pctLogistik = Math.round((countLogistik / totalK) * 100);

    if (document.getElementById("statKaryawanLapangan")) {
        document.getElementById("statKaryawanLapangan").innerText = `${countLapangan} (${pctLapangan}%)`;
        document.getElementById("barKaryawanLapangan").style.width = `${pctLapangan}%`;
    }
    if (document.getElementById("statKaryawanAdmin")) {
        document.getElementById("statKaryawanAdmin").innerText = `${countAdmin} (${pctAdmin}%)`;
        document.getElementById("barKaryawanAdmin").style.width = `${pctAdmin}%`;
    }
    if (document.getElementById("statKaryawanLogistik")) {
        document.getElementById("statKaryawanLogistik").innerText = `${countLogistik} (${pctLogistik}%)`;
        document.getElementById("barKaryawanLogistik").style.width = `${pctLogistik}%`;
    }

    // Donut Chart: Struktur Divisi
    const chartEl = document.getElementById("divisiChart");
    if (chartEl) {
        chartEl.innerHTML = "";
        const options = {
            chart: { type: 'donut', height: 180 },
            series: [countLapangan, countAdmin, countLogistik],
            labels: ['Lapangan', 'Admin', 'Logistik'],
            colors: ['#0f766e', '#10b981', '#1e293b'],
            legend: { show: false },
            dataLabels: { enabled: false },
            plotOptions: {
                pie: {
                    donut: {
                        size: '80%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'TOTAL',
                                formatter: () => String(allKaryawan.length),
                                style: { fontSize: '18px', fontWeight: 'bold', color: '#1e293b' }
                            }
                        }
                    }
                }
            }
        };
        new ApexCharts(chartEl, options).render();
    }
}

// // Render Lahan Page
function renderLahan() {
    let list = getData("lahan");

    // Filter search
    const query = (document.getElementById("searchLahan")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(l =>
            (l.nama || "").toLowerCase().includes(query) ||
            (l.kode || "").toLowerCase().includes(query) ||
            (l.status || "").toLowerCase().includes(query)
        );
    }

    // Filter status dropdown
    const statusSelector = document.getElementById("filterLahanStatus");
    if (statusSelector && statusSelector.value !== "Semua Status") {
        list = list.filter(l => (l.status || "").toUpperCase() === statusSelector.value.toUpperCase());
    }

    const container = document.getElementById("lahanTableBody");
    const cardsContainer = document.getElementById("lahanCardsGrid");
    if (!container) return;

    // Render Table (lahan does showAll or first 4 records)
    const displayedList = showAllLahan ? list : list.slice(0, 4);

    container.innerHTML = "";
    displayedList.forEach(l => {
        const lyield = parseFloat(l.yield) || 0;
        const yieldColor = lyield >= 80 ? "text-emerald-600" : (lyield >= 40 ? "text-amber-500" : "text-rose-500");
        const yieldIcon = lyield >= 80 ? "fa-arrow-trend-up" : (lyield >= 40 ? "fa-arrow-trend-up" : "fa-arrow-trend-down");
        const lNama = l.nama || "Blok";
        const lLuas = parseFloat(l.luas) || 0;
        const health = parseInt(l.healthScore) || 0;

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">${lNama.split(":")[0]}</td>
                <td class="px-6 py-4 font-medium text-gray-500 text-sm">${lLuas}</td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1.5 font-bold ${yieldColor} text-sm">
                        ${lyield.toFixed(1)}% <i class="fa-solid ${yieldIcon} text-xs"></i>
                    </span>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                        <button onclick="alert('Detail Lahan Blok:\\nID: ${l.kode || "-"}\\nNama: ${lNama}\\nLuas: ${lLuas} HA\\nYield: ${lyield}%\\nHealth: ${health}%\\nKondisi: ${l.phase || "-"}')" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100"><i class="fa-regular fa-eye text-xs"></i></button>
                        <button onclick="deleteLahan('${l.kode || ""}')" class="text-gray-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50"><i class="fa-regular fa-trash-can text-xs"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });

    // Render Block Details (Mockup has 4 cards)
    if (cardsContainer) {
        cardsContainer.innerHTML = "";
        list.slice(0, 4).forEach(l => {
            let badgeBg = "bg-green-100 text-green-700";
            let progBg = "bg-green-600";
            let labelProgress = "Health Score";

            if (l.status === "RESTING") {
                badgeBg = "bg-blue-100 text-blue-700";
                progBg = "bg-blue-600";
                labelProgress = "Recovery Progress";
            } else if (l.status === "IN-PREPARATION") {
                badgeBg = "bg-slate-200 text-slate-700";
                progBg = "bg-slate-500";
                labelProgress = "Infrastructure Setup";
            } else if (l.status === "ACTION REQUIRED") {
                badgeBg = "bg-red-100 text-red-700";
                progBg = "bg-red-600";
                labelProgress = "Humidity Warning";
            }

            const lNama = l.nama || "Blok";
            const health = parseInt(l.healthScore) || 0;
            const lyield = parseFloat(l.yield) || 0;

            cardsContainer.innerHTML += `
                <div class="card-premium p-6 rounded-2xl ${l.status === 'ACTION REQUIRED' ? 'border-l-4 border-red-500' : ''}">
                    <div class="flex items-center justify-between mb-4">
                        <span class="px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${badgeBg}">${l.status || "PRODUCTIVE"}</span>
                        <span class="text-xs font-bold text-gray-400">ID: ${l.kode || "-"}</span>
                    </div>
                    <h3 class="font-bold text-gray-800 text-lg mb-2">${lNama}</h3>
                    <p class="text-xs text-gray-500 font-medium leading-relaxed mb-5 h-[34px] overflow-hidden">${l.phase || "-"}</p>
                    
                    <div class="mb-4">
                        <div class="flex justify-between items-center text-xs font-bold text-gray-500 mb-1.5">
                            <span>${labelProgress}</span>
                            <span>${health}%</span>
                        </div>
                        <div class="w-full bg-gray-100 rounded-full h-2">
                            <div class="${progBg} h-2 rounded-full" style="width: ${health}%"></div>
                        </div>
                    </div>

                    ${l.status === 'ACTION REQUIRED' ? `
                        <button onclick="deployFieldTeam()" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 transition-all">
                            <i class="fa-solid fa-bolt"></i> DEPLOY FIELD TEAM
                        </button>
                    ` : `
                        <div class="flex justify-between items-center text-[10px] font-bold text-gray-400">
                            <span>${l.status === 'RESTING' ? 'ETA Ready: 12 Days' : 'Sistem Irigasi: Aktif'}</span>
                            <a href="#" onclick="alert('Blok: ${lNama}\\nYield: ${lyield}%\\nHealth: ${health}%'); return false;" class="hover:text-emerald-700 transition-colors">DETAILS <i class="fa-solid fa-angle-right"></i></a>
                        </div>
                    `}
                </div>
            `;
        });
    }

    // Chart: Estate Distribution
    const chartEl = document.getElementById("estateChart");
    if (chartEl) {
        chartEl.innerHTML = "";
        const options = {
            chart: { type: 'bar', height: 160, toolbar: { show: false } },
            series: [{ name: 'Aktif', data: [44, 55, 41, 64] }, { name: 'Resting', data: [13, 23, 20, 8] }],
            colors: ['#0f766e', '#8cedaf'],
            plotOptions: { bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 } },
            dataLabels: { enabled: false },
            legend: { show: false },
            grid: { borderColor: '#f1f5f9' },
            xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'], labels: { style: { colors: '#94a3b8' } } }
        };
        new ApexCharts(chartEl, options).render();
    }
}

// Render Panen Page
function renderPanen() {
    let list = getData("panen");

    // Filter search
    const query = (document.getElementById("searchPanen")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(p =>
            (p.blok || "").toLowerCase().includes(query) ||
            (p.komoditas || "").toLowerCase().includes(query) ||
            (p.status || "").toLowerCase().includes(query)
        );
    }

    // Filter komoditas dropdown
    const komoditasSelector = document.getElementById("filterPanenKomoditas");
    if (komoditasSelector && komoditasSelector.value !== "Semua Komoditas") {
        list = list.filter(p => (p.komoditas || "").toLowerCase() === komoditasSelector.value.toLowerCase());
    }

    const container = document.getElementById("panenTableBody");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pPanen > totalPages) pPanen = totalPages;

    // Paginate list
    const paginatedList = paginate(list, pPanen, LIMIT);

    container.innerHTML = "";
    paginatedList.forEach((p, idx) => {
        const badgeClass = p.status === "VERIFIED" ? "bg-green-50 text-green-700" : "bg-slate-100 text-slate-500";
        const dotColor = p.status === "VERIFIED" ? "bg-green-500" : "bg-slate-400";
        const pBerat = parseFloat(p.berat) || 0;

        // actual index of item in global array
        const globalIdx = list.indexOf(p);

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4 text-xs font-bold text-gray-500">${p.waktu || "-"}</td>
                <td class="px-6 py-4 text-sm font-bold text-gray-800">${p.blok || "-"}</td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1.5 font-semibold text-sm text-gray-700">
                        <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                        ${p.komoditas || "-"}
                    </span>
                </td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">${pBerat.toLocaleString("id-ID")}</td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass}">
                        <span class="w-1.5 h-1.5 rounded-full ${dotColor}"></span>
                        ${p.status || "PENDING"}
                    </span>
                </td>
                <td class="px-6 py-4">
                    <button onclick="deletePanen(${globalIdx})" class="text-gray-400 hover:text-red-600 p-1.5 rounded-lg"><i class="fa-regular fa-trash-can text-xs"></i></button>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("panenPaginationText", "panenPaginationControls", list.length, pPanen, LIMIT, "changePagePanen");

    // Chart: Tren Hasil Bumi
    const chartEl = document.getElementById("panenTrenChart");
    if (chartEl) {
        chartEl.innerHTML = "";
        const options = {
            chart: { type: 'area', height: 180, toolbar: { show: false } },
            stroke: { curve: 'smooth', width: 2, colors: ['#1c4532'] },
            fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, colorStops: [] } },
            series: [{ name: 'Hasil Panen (Ton)', data: [220, 240, 210, 310, 428.5, 380] }],
            xaxis: { categories: ['MEI', 'JUN', 'JUL', 'AGU', 'SEP', 'OKT'], labels: { style: { colors: '#94a3b8', fontSize: '9px' } } },
            grid: { borderColor: '#f1f5f9' },
            colors: ['#1c4532']
        };
        new ApexCharts(chartEl, options).render();
    }
}

// Render Absensi Page
function renderAbsensi() {
    let list = getData("absensi");

    // Filter search
    const query = (document.getElementById("searchAbsen")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(a =>
            (a.nama || "").toLowerCase().includes(query) ||
            (a.kode || "").toLowerCase().includes(query) ||
            (a.status || "").toLowerCase().includes(query)
        );
    }

    // Filter status dropdown
    const statusSelector = document.getElementById("filterAbsensiStatus");
    if (statusSelector && statusSelector.value !== "Semua Status") {
        list = list.filter(a => (a.status || "").toLowerCase() === statusSelector.value.toLowerCase());
    }

    const container = document.getElementById("absensiTableBody");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pAbsensi > totalPages) pAbsensi = totalPages;

    const paginatedList = paginate(list, pAbsensi, LIMIT);

    container.innerHTML = "";
    paginatedList.forEach(a => {
        const aNama = a.nama || "Karyawan";
        const initials = aNama.split(" ").filter(Boolean).map(n => n[0]).slice(0, 2).join("").toUpperCase() || "K";
        let badgeClass = "bg-green-100 text-green-700";
        if (a.status === "ALPA") badgeClass = "bg-red-100 text-red-700";
        else if (a.status === "SAKIT") badgeClass = "bg-yellow-100 text-yellow-700";
        else if (a.status === "IZIN") badgeClass = "bg-blue-100 text-blue-700";

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs border border-gray-200">
                            ${initials}
                        </div>
                        <div>
                            <div class="font-bold text-gray-800 text-sm leading-tight">${aNama}</div>
                            <div class="text-[10px] text-gray-400 font-bold tracking-wider">${a.kode || "-"}</div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-600 text-sm">${a.jabatan || "-"}</td>
                <td class="px-6 py-4 font-mono text-xs text-gray-500">${a.checkIn || "--:--"}</td>
                <td class="px-6 py-4 font-bold text-gray-600 text-sm">${a.blok || "--"}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeClass}">${a.status || "HADIR"}</span>
                </td>
                <td class="px-6 py-4">
                    <button onclick="alert('Posisi: ${a.jabatan || "-"}\\nBlok Sektor: ${a.blok || "-"}\\nJam Check-in: ${a.checkIn || "-"}')" class="text-gray-400 hover:text-gray-600 p-1.5"><i class="fa-solid fa-ellipsis-vertical text-xs"></i></button>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("absensiPaginationText", "absensiPaginationControls", list.length, pAbsensi, LIMIT, "changePageAbsensi");

    // Compute stats on overall list
    const totalList = getData("absensi");
    const hadir = totalList.filter(a => a.status === "HADIR").length;
    const sakit = totalList.filter(a => a.status === "SAKIT").length;
    const izin = totalList.filter(a => a.status === "IZIN").length;
    const alpa = totalList.filter(a => a.status === "ALPA").length;

    if (document.getElementById("statHadir")) document.getElementById("statHadir").innerText = String(hadir).padStart(2, '0');
    if (document.getElementById("statSakit")) document.getElementById("statSakit").innerText = String(sakit).padStart(2, '0');
    if (document.getElementById("statIzin")) document.getElementById("statIzin").innerText = String(izin).padStart(2, '0');
    if (document.getElementById("statAlpa")) document.getElementById("statAlpa").innerText = String(alpa).padStart(2, '0');
}

// Render Gudang Page
function renderGudang() {
    let list = getData("gudang");

    // Filter search
    const query = (document.getElementById("searchGudang")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(g =>
            (g.nama || "").toLowerCase().includes(query) ||
            (g.kategori || "").toLowerCase().includes(query) ||
            (g.kode || "").toLowerCase().includes(query)
        );
    }

    const container = document.getElementById("gudangTableBody");
    const warningContainer = document.getElementById("inventoryWarnings");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pGudang > totalPages) pGudang = totalPages;

    const paginatedList = paginate(list, pGudang, LIMIT);

    container.innerHTML = "";
    paginatedList.forEach(g => {
        const catBadge = g.kategori === "Fertilizer" ? "bg-emerald-50 text-emerald-700" : (g.kategori === "Tools" ? "bg-sky-50 text-sky-700" : "bg-indigo-50 text-indigo-700");
        const statusBadge = g.status === "AMAN" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
        const stockText = g.status === "KRITIS" ? "text-red-600 font-bold" : "text-gray-800";
        const gStok = parseInt(g.stok) || 0;

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4 font-mono text-xs text-gray-500 font-bold">${g.kode || "-"}</td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">${g.nama || "-"}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${catBadge}">${g.kategori || "-"}</span>
                </td>
                <td class="px-6 py-4 text-sm ${stockText}">${gStok.toLocaleString("id-ID")}</td>
                <td class="px-6 py-4 text-xs font-semibold text-gray-500">${g.satuan || "-"}</td>
                <td class="px-6 py-4">
                    <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${statusBadge}">
                        <span class="w-1.5 h-1.5 rounded-full ${g.status === 'AMAN' ? 'bg-green-500' : 'bg-red-500'}"></span>
                        ${g.status || "AMAN"}
                    </span>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("gudangPaginationText", "gudangPaginationControls", list.length, pGudang, LIMIT, "changePageGudang");

    // Warnings list on the right (reads global list)
    if (warningContainer) {
        warningContainer.innerHTML = "";
        const allItems = getData("gudang");
        const criticalItems = allItems.filter(g => g.status === "KRITIS");
        criticalItems.forEach(item => {
            warningContainer.innerHTML += `
                <div class="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center justify-between mb-3">
                    <div>
                        <div class="text-[10px] font-bold text-red-600 uppercase">CRITICAL LOW</div>
                        <div class="font-bold text-gray-800 text-sm mt-0.5">${item.nama}</div>
                        <div class="text-xs text-gray-500">Sisa: ${item.stok} ${item.satuan}</div>
                    </div>
                    <button onclick="prosesPengadaanCepat()" class="bg-red-650 hover:bg-red-750 text-white p-2 rounded-lg text-xs"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            `;
        });
        if (criticalItems.length === 0) {
            warningContainer.innerHTML = `<div class="text-xs text-gray-400 text-center py-6">Tidak ada stok kritis saat ini.</div>`;
        }
    }
}

// Render Distribusi Page
function renderDistribusi() {
    let list = getData("distribusi");

    // Filter search
    const query = (document.getElementById("searchDist")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(d =>
            (d.driver || "").toLowerCase().includes(query) ||
            (d.kendaraan || "").toLowerCase().includes(query) ||
            (d.tujuan || "").toLowerCase().includes(query) ||
            (d.kode || "").toLowerCase().includes(query)
        );
    }

    // Filter status dropdown
    const statusSelector = document.getElementById("filterDistribusiStatus");
    if (statusSelector && statusSelector.value !== "Semua Status") {
        list = list.filter(d => (d.status || "").toLowerCase() === statusSelector.value.toLowerCase());
    }

    const container = document.getElementById("distribusiTableBody");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pDistribusi > totalPages) pDistribusi = totalPages;

    const paginatedList = paginate(list, pDistribusi, LIMIT);

    container.innerHTML = "";
    paginatedList.forEach(d => {
        let badgeColor = "bg-green-100 text-green-700";
        if (d.status === "DIKEMAS") badgeColor = "bg-yellow-100 text-yellow-700";
        else if (d.status === "DIJALAN") badgeColor = "bg-blue-100 text-blue-700";

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4 font-mono text-xs text-gray-600 font-bold">${d.kode || "-"}</td>
                <td class="px-6 py-4 font-semibold text-gray-500 text-sm">${d.kendaraan || "-"}</td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">${d.driver || "-"}</td>
                <td class="px-6 py-4 text-xs font-semibold text-gray-500">${d.tujuan || "-"}</td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">${d.volume || "-"}</td>
                <td class="px-6 py-4">
                    <span class="px-2.5 py-0.5 rounded text-[10px] font-bold ${badgeColor}">${d.status || "DIKEMAS"}</span>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("distribusiPaginationText", "distribusiPaginationControls", list.length, pDistribusi, LIMIT, "changePageDistribusi");
}

// Render Penggajian Page
function renderGaji() {
    let list = getData("gaji");

    // Filter search
    const query = (document.getElementById("searchGaji")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(g =>
            (g.nama || "").toLowerCase().includes(query) ||
            (g.divisi || "").toLowerCase().includes(query) ||
            (g.kode || "").toLowerCase().includes(query)
        );
    }

    // Filter status dropdown
    const statusSelector = document.getElementById("filterGajiStatus");
    if (statusSelector && statusSelector.value !== "Semua Status") {
        list = list.filter(g => (g.status || "").toLowerCase() === statusSelector.value.toLowerCase());
    }

    const container = document.getElementById("gajiTableBody");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pGaji > totalPages) pGaji = totalPages;

    const paginatedList = paginate(list, pGaji, LIMIT);

    container.innerHTML = "";
    paginatedList.forEach(g => {
        let badgeColor = "bg-green-100 text-green-700";
        if (g.status === "MENUNGGU") badgeColor = "bg-slate-200 text-slate-700";
        else if (g.status === "DITOLAK") badgeColor = "bg-red-100 text-red-700";

        const gNama = g.nama || "Karyawan";
        const initials = gNama.split(" ").filter(Boolean).map(n => n[0]).slice(0, 2).join("").toUpperCase() || "K";
        const gTotal = parseFloat(g.total) || 0;

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-[#1c4532] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                            ${initials}
                        </div>
                        <div>
                            <div class="font-bold text-gray-800 text-sm leading-tight">${gNama}</div>
                            <div class="text-[10px] text-gray-400 font-bold tracking-wider">ID: ${g.kode || "-"}</div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-500 text-sm">${g.divisi || "-"}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeColor}">${g.status || "MENUNGGU"}</span>
                </td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">Rp. ${gTotal.toLocaleString("id-ID")}</td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                        <button onclick="alert('Slip Gaji Karyawan:\\nID: ${g.kode || "-"}\\nNama: ${gNama}\\nDivisi: ${g.divisi || "-"}\\nJumlah: Rp ${gTotal.toLocaleString('id-ID')}\\nStatus: ${g.status || "-"}')" class="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100"><i class="fa-regular fa-eye text-xs"></i></button>
                        <button onclick="deleteGaji('${g.kode || ""}')" class="text-gray-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50"><i class="fa-regular fa-trash-can text-xs"></i></button>
                    </div>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("gajiPaginationText", "gajiPaginationControls", list.length, pGaji, LIMIT, "changePageGaji");

    // Update total budget details dynamically (reads global list)
    const allWages = getData("gaji");
    const totalBud = allWages.reduce((acc, curr) => acc + ((curr.status === "SELESAI") ? (parseFloat(curr.total) || 0) : 0), 0);
    const budgetEl = document.getElementById("totalAnggaranGaji");
    if (budgetEl) {
        budgetEl.innerText = "Rp " + totalBud.toLocaleString("id-ID");
    }

    // Dynamic wages per division computation
    const totalGaji = allWages.reduce((acc, curr) => acc + (parseFloat(curr.total) || 0), 0) || 1;
    const prodSum = allWages.filter(g => g.divisi === "Produksi Kelapa Sawit").reduce((sum, g) => sum + (parseFloat(g.total) || 0), 0);
    const logSum = allWages.filter(g => g.divisi === "Logistik & Distribusi").reduce((sum, g) => sum + (parseFloat(g.total) || 0), 0);
    const lahSum = allWages.filter(g => g.divisi === "Pemeliharaan Lahan").reduce((sum, g) => sum + (parseFloat(g.total) || 0), 0);
    const admSum = allWages.filter(g => g.divisi === "Administrasi Kantor").reduce((sum, g) => sum + (parseFloat(g.total) || 0), 0);

    const prodPct = Math.round((prodSum / totalGaji) * 100);
    const logPct = Math.round((logSum / totalGaji) * 100);
    const lahPct = Math.round((lahSum / totalGaji) * 100);
    const admPct = Math.round((admSum / totalGaji) * 100);

    const formatMillion = (val) => {
        if (val >= 1000000) {
            return "Rp " + (val / 1000000).toFixed(1) + " Jt";
        }
        return "Rp " + val.toLocaleString("id-ID");
    };

    if (document.getElementById("gajiTotalProduksi")) {
        document.getElementById("gajiTotalProduksi").innerText = formatMillion(prodSum);
        document.getElementById("gajiBarProduksi").style.width = `${prodPct}%`;
    }
    if (document.getElementById("gajiTotalLogistik")) {
        document.getElementById("gajiTotalLogistik").innerText = formatMillion(logSum);
        document.getElementById("gajiBarLogistik").style.width = `${logPct}%`;
    }
    if (document.getElementById("gajiTotalLahan")) {
        document.getElementById("gajiTotalLahan").innerText = formatMillion(lahSum);
        document.getElementById("gajiBarLahan").style.width = `${lahPct}%`;
    }
    if (document.getElementById("gajiTotalAdmin")) {
        document.getElementById("gajiTotalAdmin").innerText = formatMillion(admSum);
        document.getElementById("gajiBarAdmin").style.width = `${admPct}%`;
    }
}

// Render Keuangan Page
function renderKeuangan() {
    let list = getData("keuangan");

    // Filter search
    const query = (document.getElementById("searchKeu")?.value || "").trim().toLowerCase();
    if (query) {
        list = list.filter(k =>
            (k.deskripsi || "").toLowerCase().includes(query) ||
            (k.tanggal || "").toLowerCase().includes(query)
        );
    }

    // Filter type dropdown
    const typeSelector = document.getElementById("filterKeuanganType");
    if (typeSelector && typeSelector.value !== "Semua") {
        if (typeSelector.value === "Debit") {
            list = list.filter(k => (parseFloat(k.debit) || 0) > 0);
        } else if (typeSelector.value === "Kredit") {
            list = list.filter(k => (parseFloat(k.kredit) || 0) > 0);
        }
    }

    const container = document.getElementById("keuanganTableBody");
    if (!container) return;

    // Clamp page index
    const totalPages = Math.ceil(list.length / LIMIT) || 1;
    if (pKeuangan > totalPages) pKeuangan = totalPages;

    const paginatedList = paginate(list, pKeuangan, LIMIT);

    container.innerHTML = "";
    paginatedList.forEach(k => {
        const creditVal = parseFloat(k.kredit) || 0;
        const debitVal = parseFloat(k.debit) || 0;
        const isCredit = creditVal > 0;
        const amtText = isCredit ? `+ Rp ${creditVal.toLocaleString("id-ID")}` : `- Rp ${debitVal.toLocaleString("id-ID")}`;
        const amtColor = isCredit ? "text-emerald-600 font-bold bg-emerald-50 border border-emerald-100" : "text-rose-600 font-bold";

        container.innerHTML += `
            <tr class="table-row-interactive border-b border-gray-100">
                <td class="px-6 py-4 text-xs font-semibold text-gray-400">${k.tanggal || "-"}</td>
                <td class="px-6 py-4 font-bold text-gray-800 text-sm">${k.deskripsi || "-"}</td>
                <td class="px-6 py-4">
                    ${!isCredit ? `<span class="${amtColor} px-2.5 py-1 rounded text-xs">${amtText}</span>` : `<span class="text-slate-400 text-xs">0</span>`}
                </td>
                <td class="px-6 py-4">
                    ${isCredit ? `<span class="${amtColor} px-2.5 py-1 rounded text-xs">${amtText}</span>` : `<span class="text-slate-400 text-xs">0</span>`}
                </td>
                <td class="px-6 py-4">
                    <button onclick="alert('Keterangan Transaksi:\\nTanggal: ${k.tanggal || "-"}\\nDeskripsi: ${k.deskripsi || "-"}\\nNilai: ${amtText}')" class="text-gray-400 hover:text-gray-600 p-1.5"><i class="fa-solid fa-ellipsis-vertical text-xs"></i></button>
                </td>
            </tr>
        `;
    });

    renderPaginationControls("keuanganPaginationText", "keuanganPaginationControls", list.length, pKeuangan, LIMIT, "changePageKeuangan");

    // Update Cash Balance dynamically (Kredit - Debit)
    const revenueEl = document.getElementById("monthlyRevenueVal");
    if (revenueEl) {
        const allTrans = getData("keuangan");
        const totalRevenue = allTrans.reduce((sum, k) => sum + (parseFloat(k.kredit) || 0) - (parseFloat(k.debit) || 0), 0);
        const formattedRevenue = totalRevenue >= 0
            ? "Rp " + totalRevenue.toLocaleString("id-ID")
            : "- Rp " + Math.abs(totalRevenue).toLocaleString("id-ID");
        revenueEl.innerText = formattedRevenue;
    }

    // Chart: Arus Kas
    const chartEl = document.getElementById("cashFlowChart");
    if (chartEl) {
        chartEl.innerHTML = "";
        const options = {
            chart: { type: 'bar', height: 160, toolbar: { show: false } },
            series: [{ name: 'Arus Masuk', data: [120, 150, 110, 145, 130, 160] }],
            colors: ['#0f766e'],
            plotOptions: { bar: { borderRadius: 4, columnWidth: '40%' } },
            xaxis: { categories: ['JUL', 'AGU', 'SEP', 'OKT', 'NOV', 'DES'], labels: { style: { colors: '#94a3b8', fontSize: '9px' } } },
            grid: { borderColor: '#f1f5f9' },
            dataLabels: { enabled: false }
        };
        new ApexCharts(chartEl, options).render();
    }
}

// ================= GENERAL INITIALIZATION =================

window.onload = () => {
    try { displayUserInfo(); } catch (e) { console.error("Error in displayUserInfo:", e); }
    try { renderDashboard(); } catch (e) { console.error("Error in renderDashboard:", e); }
    try { renderKaryawan(); } catch (e) { console.error("Error in renderKaryawan:", e); }
    try { renderLahan(); } catch (e) { console.error("Error in renderLahan:", e); }
    try { renderPanen(); } catch (e) { console.error("Error in renderPanen:", e); }
    try { renderAbsensi(); } catch (e) { console.error("Error in renderAbsensi:", e); }
    try { renderGudang(); } catch (e) { console.error("Error in renderGudang:", e); }
    try { renderDistribusi(); } catch (e) { console.error("Error in renderDistribusi:", e); }
    try { renderGaji(); } catch (e) { console.error("Error in renderGaji:", e); }
    try { renderKeuangan(); } catch (e) { console.error("Error in renderKeuangan:", e); }
};