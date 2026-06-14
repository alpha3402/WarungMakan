# WarungMakan
WarungMakan adalah WebApp yang di buat untuk memudahkan UMKM di salah satu kabupaten di Provinsi Lampung, dengan fitur-fitur yang memudahkan dalam merekap, menginput dan meng-ekstrak/eksport dari inivoice.


╔══════════════════════════════════════════════════════════════╗
║              KASIR WARUNG MAKAN                              ║
║         Aplikasi Kasir untuk Rumah Makan                    ║
║         By Atlas Tech Company                               ║
║         "Make The World Better With Technology"             ║
╚══════════════════════════════════════════════════════════════╝


----------------------------------------------------------------------
                        FITUR APLIKASI
----------------------------------------------------------------------

✅ KASIR - Memproses pesanan pelanggan
  • Pilih menu dengan sekali klik
  • Atur jumlah pesanan (+/-)
  • Lihat subtotal dan total otomatis
  • Pembayaran dengan hitung kembalian otomatis
  • Cetak invoice otomatis setelah bayar

✅ MANAJEMEN MENU - Kelola daftar makanan & minuman
  • Tambah menu baru (nama, kategori, harga, deskripsi, foto)
  • Edit menu yang sudah ada
  • Hapus menu
  • Filter dan cari menu

✅ RIWAYAT TRANSAKSI - Catat semua penjualan
  • Filter: Hari Ini / Minggu Ini / Bulan Ini / Semua
  • Pilih tanggal spesifik
  • Lihat detail transaksi
  • Cetak ulang invoice
  • Export ke CSV

✅ LAPORAN KEUANGAN - Analisis pendapatan
  • Laporan Harian / Mingguan / Bulanan / Tahunan
  • Total pendapatan, jumlah transaksi, item terjual
  • Export CSV
  • Print laporan

✅ PENGATURAN TOKO
  • Ubah nama toko, alamat, telepon, jam buka
  • Kelola kategori menu
  • Backup & restore data (Export/Import JSON)
  • Reset semua data


----------------------------------------------------------------------
                  CARA INSTALL DI KOMPUTER (WINDOWS)
----------------------------------------------------------------------

METODE 1: MENGGUNAKAN FILE .EXE (LANGSUNG JALAN)

  1. Buka folder "dist"
  2. Double-click file "KasirWarungMakan.exe"
  3. Aplikasi langsung terbuka, tidak perlu install apa-apa!

  Persyaratan: Windows 10 atau lebih baru


METODE 2: MENGGUNAKAN PYTHON (UNTUK DEVELOPER)

  Persyaratan:
  - Python 3.8 atau lebih baru
  - pip (Python package manager)

  Langkah-langkah:

  1. Install dependencies:
     pip install pywebview cefpython3

  2. Jalankan aplikasi:
     python kasir_app.py

  3. Untuk build EXE installer (.exe):
     python build_exe.py

     Hasil: dist/KasirWarungMakan.exe


----------------------------------------------------------------------
              CARA INSTALL DI HP ANDROID / iOS (PWA)
----------------------------------------------------------------------

Tidak perlu download dari Play Store! Cukup pakai browser:

  ANDROID (Chrome):
  1. Buka file index.html di Chrome
  2. Tap icon ⋮ (tiga titik) di pojok kanan atas
  3. Pilih "Install app" atau "Add to Home screen"
  4. Aplikasi akan terinstall dengan icon di home screen

  iOS (Safari):
  1. Buka file index.html di Safari
  2. Tap icon Share (kotak dengan panah atas)
  3. Scroll ke bawah, pilih "Add to Home Screen"
  4. Tap "Add" di pojok kanan atas

  Aplikasi akan berjalan FULLSCREEN seperti native app!


----------------------------------------------------------------------
                    STRUKTUR FILE APLIKASI
----------------------------------------------------------------------

  Warung Makan/
  ├── index.html          ← Halaman utama aplikasi
  ├── style.css           ← Styling / tampilan
  ├── script.js           ← Logika aplikasi (JavaScript)
  ├── kasir_app.py        ← Launcher desktop (Python + pywebview)
  ├── build_exe.py        ← Build script untuk EXE installer
  ├── manifest.json       ← Konfigurasi PWA (Android/iOS)
  ├── sw.js               ← Service Worker (offline support)
  ├── generate_icons.py   ← Script generate icon aplikasi
  ├── README.txt          ← File ini
  │
  ├── icons/              ← Icon aplikasi
  │   ├── icon-192.png
  │   ├── icon-512.png
  │   └── icon.ico
  │
  └── dist/               ← Hasil build EXE (setelah di-build)
      └── KasirWarungMakan.exe


----------------------------------------------------------------------
                    DATA & PENYIMPANAN
----------------------------------------------------------------------

  • Semua data disimpan di localStorage browser/WebView
  • Data tidak hilang selama tidak dihapus (clear data browser)
  • Untuk backup: Export Data di menu Pengaturan
  • Untuk restore: Import Data di menu Pengaturan
  • Untuk reset total: Reset Semua Data di menu Pengaturan


----------------------------------------------------------------------
                      TENTANG
----------------------------------------------------------------------

  Aplikasi:  Kasir Warung Makan v1.0
  Developer: Atlas Tech Company
  Tagline:   Make The World Better With Technology
  Tahun:     2026

  Dibuat dengan: HTML, CSS, JavaScript, Python, pywebview, PyInstaller
  Platform: Windows (Desktop) + Android/iOS (PWA)

----------------------------------------------------------------------
                           © 2026 Atlas Tech Company
