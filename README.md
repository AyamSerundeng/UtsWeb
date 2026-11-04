# Tugas UTS Pemrograman Web - Toko Buku Pustaka Online

**Nama:** Khairi Ramadhan Yudhatama (312510099)  
**Kelas:** Pemrograman Web (I251A)  
**Dosen:** Agung Nugroho, S.Kom., M.Kom.
**Mata Kuliah:** Pemrograman Web
**Proyek:** Aplikasi Web Pemesanan Buku Front-End (HTML, CSS, JavaScript DOM & JSON)

---

## Pengujian Fitur Aplikasi

### Pengujian 1: Halaman Login (Login Berhasil)

- **Deskripsi:** Menguji autentikasi pengguna dengan memasukkan email dan kata sandi yang terdaftar di `data.js`.
- **Langkah Pengujian:**
  1. Buka halaman `index.html`.
  2. Masukkan email terdaftar (contoh: `rina@gmail.com`).
  3. Masukkan password terdaftar (contoh: `rina123`).
  4. Klik tombol **Login**.
- **Hasil yang Diharapkan:** Pengguna berhasil dialihkan (_redirect_) ke halaman `dashboard.html`.

**Hasil Pengujian di Browser:**

![Screenshot 01 - Login Berhasil](screenshots/01-login-berhasil.png)

---

### Pengujian 2: Validasi Login Gagal

- **Deskripsi:** Menguji sistem notifikasi _alert_ ketika pengguna memasukkan kombinasi email atau kata sandi yang salah.
- **Langkah Pengujian:**
  1. Masukkan email atau kata sandi yang salah pada `index.html`.
  2. Klik tombol **Login**.
- **Hasil yang Diharapkan:** Muncul pesan pop-up/alert: `"Email atau password yang Anda masukkan salah."`.

**Hasil Pengujian di Browser:**

![Screenshot 02 - Login Gagal Alert](screenshots/02-login-gagal-alert.png)

---

### Pengujian 3: Modal Box - Lupa Password

- **Deskripsi:** Menguji fungsi _modal box_ bawaan HTML `<dialog>` untuk pemulihan kata sandi.
- **Langkah Pengujian:**
  1. Klik tombol **Lupa Password?** pada halaman login.
  2. Isi email pada form modal, lalu klik **Kirim Instruksi**.
- **Hasil yang Diharapkan:** Modal terbuka secara halus, dan saat form dikirim muncul konfirmasi bahwa petunjuk telah dikirim.

**Hasil Pengujian di Browser:**

![Screenshot 03 - Modal Lupa Password](screenshots/03-modal-lupa-password.png)

---

### Pengujian 4: Modal Box - Daftar Akun Baru

- **Deskripsi:** Menguji pendaftaran akun pengguna baru via modal box dan menambahkannya ke array pengguna.
- **Langkah Pengujian:**
  1. Klik tombol **Belum punya akun? Daftar** pada halaman login.
  2. Lengkapi form Nama, Email, dan Password.
  3. Klik tombol **Daftar Sekarang**.
- **Hasil yang Diharapkan:** Akun berhasil ditambahkan, muncul alert sukses, dan modal menutup.

**Hasil Pengujian di Browser:**

![Screenshot 04 - Modal Daftar Akun](screenshots/04-modal-daftar-akun.png)

---

### Pengujian 5: Dashboard & Salam Waktu Lokal (Greeting)

- **Deskripsi:** Menguji tampilan dashboard utama dan sapaan otomatis berdasarkan waktu lokal pengguna (pagi/siang/sore/malam) serta nama akun terautentikasi.
- **Langkah Pengujian:**
  1. Buka halaman `dashboard.html` setelah login.
  2. Periksa teks salam sapaan pada bagian atas halaman.
- **Hasil yang Diharapkan:** Teks salam menampilkan `"Selamat Pagi/Siang/Sore/Malam, [Nama User]"`.

**Hasil Pengujian di Browser:**

![Screenshot 05 - Dashboard Greeting](screenshots/05-dashboard-greeting.png)

---

### Pengujian 6: Tampil & Sembunyikan Riwayat Transaksi

- **Deskripsi:** Menguji manipulasi DOM untuk menampilkan dan menyembunyikan rekapitulasi riwayat transaksi pada dashboard.
- **Langkah Pengujian:**
  1. Pada `dashboard.html`, klik tombol **Lihat Riwayat** di kartu Riwayat Transaksi.
  2. Klik kembali tombol **Sembunyikan Riwayat**.
- **Hasil yang Diharapkan:** Tabel riwayat transaksi muncul/tersembunyi secara dinamis saat tombol diklik.

**Hasil Pengujian di Browser:**

![Screenshot 06 - Riwayat Transaksi](screenshots/06-riwayat-transaksi.png)

---

### Pengujian 7: Menampilkan Informasi Stok & Katalog Buku

- **Deskripsi:** Menguji pembacaan data array JSON `dataKatalogBuku` dan merender seluruh item buku secara dinamis ke tabel katalog.
- **Langkah Pengujian:**
  1. Buka halaman `stok.html`.
  2. Amati daftar baris buku yang muncul pada tabel.
- **Hasil yang Diharapkan:** Seluruh data buku dari `data.js` tampil lengkap beserta gambar cover, kode, nama, kategori, harga, dan jumlah stok.

**Hasil Pengujian di Browser:**

![Screenshot 07 - Katalog Buku Dinamis](screenshots/07-katalog-buku-dinamis.png)

---

### Pengujian 8: Menambahkan Stok / Buku Baru ke Katalog

- **Deskripsi:** Menguji fitur penambahan baris stok/buku baru menggunakan JavaScript DOM manipulationtanpa melakukan _reload_ file.
- **Langkah Pengujian:**
  1. Isi form **Tambah Stok Buku** di sebelah kanan halaman `stok.html`.
  2. Klik tombol **Tambah ke Katalog**.
- **Hasil yang Diharapkan:** Baris buku baru langsung ditambahkan ke bagian bawah tabel secara dinamis.

**Hasil Pengujian di Browser:**

![Screenshot 08 - Tambah Stok Baru](screenshots/08-tambah-stok-baru.png)

---

### Pengujian 9: Menghapus Buku dari Katalog

- **Deskripsi:** Menguji fitur penghapusan baris tabel katalog menggunakan _event handling_ pada tombol "Hapus".
- **Langkah Pengujian:**
  1. Klik tombol **Hapus** pada salah satu baris buku di `stok.html`.
  2. Konfirmasi pop-up penghapusan.
- **Hasil yang Diharapkan:** Baris buku terhapus dari DOM tabel secara langsung.

**Hasil Pengujian di Browser:**

![Screenshot 09 - Hapus Stok Buku](screenshots/09-hapus-stok-buku.png)

---

### Pengujian 10: Memilih Buku & Menambah ke Keranjang Belanja

- **Deskripsi:** Menguji pemilihan kartu buku pada `checkout.html` dan memasukkannya ke tabel keranjang belanja.
- **Langkah Pengujian:**
  1. Buka halaman `checkout.html`.
  2. Klik tombol **Tambah ke Keranjang** pada salah satu kartu buku.
- **Hasil yang Diharapkan:** Buku berpindah ke tabel **Keranjang Belanja** beserta gambar cover, harga, jumlah, dan subtotal yang terhitung otomatis.

**Hasil Pengujian di Browser:**

![Screenshot 10 - Tambah ke Keranjang](screenshots/10-tambah-ke-keranjang.png)

---

### Pengujian 11: Mengelola Item Keranjang (Perubahan Qty & Hapus Item)

- **Deskripsi:** Menguji pengubahan jumlah beli (_quantity_) dan penghapusan item dari tabel keranjang.
- **Langkah Pengujian:**
  1. Ubah angka pada kolom jumlah buku di tabel keranjang belanja.
  2. Klik tombol **Hapus** pada salah satu item di keranjang.
- **Hasil yang Diharapkan:** Subtotal dan total harga pembayaran diperbarui secara otomatis.

**Hasil Pengujian di Browser:**

![Screenshot 11 - Kelola Keranjang Belanja](screenshots/11-kelola-keranjang.png)

---

### Pengujian 12: Memproses Pemesanan (Checkout & Nomor DO)

- **Deskripsi:** Menguji validasi form data pemesan dan pembuatan nomor Delivery Order (DO) otomatis saat transaksi diproses.
- **Langkah Pengujian:**
  1. Isi Nama, Email, Telepon, Alamat, dan Metode Pembayaran pada form `checkout.html`.
  2. Klik **Proses Pemesanan**.
- **Hasil yang Diharapkan:** Muncul alert konfirmasi pemesanan sukses dengan Nomor DO unik. Data pemesanan baru otomatis dicatat ke riwayat transaksi dan sistem tracking.

**Hasil Pengujian di Browser:**

![Screenshot 12 - Pemesanan Berhasil](screenshots/12-pemesanan-berhasil.png)

---

### Pengujian 13: Pelacakan Status Pengiriman (Tracking DO)

- **Deskripsi:** Menguji fitur pencarian nomor Delivery Order dan visualisasi status pengiriman menggunakan _progress bar_.
- **Langkah Pengujian:**
  1. Buka `tracking.html`.
  2. Masukkan Nomor DO (misal: `20230012` atau Nomor DO baru dari pemesanan).
  3. Klik tombol **Cari Pengiriman**.
- **Hasil yang Diharapkan:** Informasi detail pengiriman, nama pemesan, rincian biaya, serta persentase _progress bar_ sesuai status pengiriman ditampilkan.

**Hasil Pengujian di Browser:**

![Screenshot 13 - Tracking Pengiriman](screenshots/13-tracking-pengiriman.png)

---
