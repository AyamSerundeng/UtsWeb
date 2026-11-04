# Tugas UTS Pemrograman Web - Toko Buku Pustaka Online

---

**Nama:** Khairi Ramadhan Yudhatama (312510099)  
**Kelas:** I251A
**Dosen:** Agung Nugroho, S.Kom., M.Kom
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

<img width="485" height="567" alt="image" src="https://github.com/user-attachments/assets/72e7ff1e-b0d3-4123-809c-7ea5dba51dfa" />

<img width="1918" height="800" alt="image" src="https://github.com/user-attachments/assets/ac2ab666-4241-4640-8f66-368136b45a4d" />


---

### Pengujian 2: Validasi Login Gagal

- **Deskripsi:** Menguji sistem notifikasi _alert_ ketika pengguna memasukkan kombinasi email atau kata sandi yang salah.
- **Langkah Pengujian:**
  1. Masukkan email atau kata sandi yang salah pada `index.html`.
  2. Klik tombol **Login**.
- **Hasil yang Diharapkan:** Muncul pesan pop-up/alert: `"Email atau password yang Anda masukkan salah."`.

**Hasil Pengujian di Browser:**

<img width="505" height="558" alt="image" src="https://github.com/user-attachments/assets/1c35259d-f95c-4f66-af8d-d6d691236998" />

<img width="673" height="875" alt="image" src="https://github.com/user-attachments/assets/1cc2d130-bc51-4746-8d9b-8f96ea130c46" />

---

### Pengujian 3: Modal Box - Lupa Password

- **Deskripsi:** Menguji fungsi _modal box_ bawaan HTML `<dialog>` untuk pemulihan kata sandi.
- **Langkah Pengujian:**
  1. Klik tombol **Lupa Password?** pada halaman login.
  2. Isi email pada form modal, lalu klik **Kirim Instruksi**.
- **Hasil yang Diharapkan:** Modal terbuka secara halus, dan saat form dikirim muncul konfirmasi bahwa petunjuk telah dikirim.

**Hasil Pengujian di Browser:**

<img width="647" height="372" alt="image" src="https://github.com/user-attachments/assets/9d429d12-4250-4217-830b-3798601419e5" />

<img width="605" height="238" alt="image" src="https://github.com/user-attachments/assets/e4dc69c9-b80a-48d0-bed8-bf9c4440c6ae" />


---

### Pengujian 4: Modal Box - Daftar Akun Baru

- **Deskripsi:** Menguji pendaftaran akun pengguna baru via modal box dan menambahkannya ke array pengguna.
- **Langkah Pengujian:**
  1. Klik tombol **Belum punya akun? Daftar** pada halaman login.
  2. Lengkapi form Nama, Email, dan Password.
  3. Klik tombol **Daftar Sekarang**.
- **Hasil yang Diharapkan:** Akun berhasil ditambahkan, muncul alert sukses, dan modal menutup.

**Hasil Pengujian di Browser:**

<img width="615" height="466" alt="image" src="https://github.com/user-attachments/assets/9b39a705-575f-4fff-94d3-9ab48f12196c" />

<img width="583" height="201" alt="image" src="https://github.com/user-attachments/assets/9cce4e65-a3fe-442e-a65f-4f612e15cd1b" />

<img width="487" height="553" alt="image" src="https://github.com/user-attachments/assets/0bfc87c8-8236-4dd6-9b04-92950b24e1c5" />

---

### Pengujian 5: Dashboard & Salam Waktu Lokal (Greeting)

- **Deskripsi:** Menguji tampilan dashboard utama dan sapaan otomatis berdasarkan waktu lokal pengguna (pagi/siang/sore/malam) serta nama akun terautentikasi.
- **Langkah Pengujian:**
  1. Buka halaman `dashboard.html` setelah login.
  2. Periksa teks salam sapaan pada bagian atas halaman.
- **Hasil yang Diharapkan:** Teks salam menampilkan `"Selamat Pagi/Siang/Sore/Malam, [Nama User]"`.

**Hasil Pengujian di Browser:**

<img width="1383" height="592" alt="image" src="https://github.com/user-attachments/assets/5d120598-6a42-4ae1-85dd-01af8f41e1c1" />

---

### Pengujian 6: Tampil & Sembunyikan Riwayat Transaksi

- **Deskripsi:** Menguji manipulasi DOM untuk menampilkan dan menyembunyikan rekapitulasi riwayat transaksi pada dashboard.
- **Langkah Pengujian:**
  1. Pada `dashboard.html`, klik tombol **Lihat Riwayat** di kartu Riwayat Transaksi.
  2. Klik kembali tombol **Sembunyikan Riwayat**.
- **Hasil yang Diharapkan:** Tabel riwayat transaksi muncul/tersembunyi secara dinamis saat tombol diklik.

**Hasil Pengujian di Browser:**

<img width="1386" height="671" alt="image" src="https://github.com/user-attachments/assets/05592689-6bdc-4367-ab35-cddf06539883" />


---

### Pengujian 7: Menampilkan Informasi Stok & Katalog Buku

- **Deskripsi:** Menguji pembacaan data array JSON `dataKatalogBuku` dan merender seluruh item buku secara dinamis ke tabel katalog.
- **Langkah Pengujian:**
  1. Buka halaman `stok.html`.
  2. Amati daftar baris buku yang muncul pada tabel.
- **Hasil yang Diharapkan:** Seluruh data buku dari `data.js` tampil lengkap beserta gambar cover, kode, nama, kategori, harga, dan jumlah stok.

**Hasil Pengujian di Browser:**

<img width="1365" height="901" alt="image" src="https://github.com/user-attachments/assets/0f0d0ede-350e-478c-aa72-90c9289e132b" />

---

### Pengujian 8: Menambahkan Stok / Buku Baru ke Katalog

- **Deskripsi:** Menguji fitur penambahan baris stok/buku baru menggunakan JavaScript DOM manipulationtanpa melakukan _reload_ file.
- **Langkah Pengujian:**
  1. Isi form **Tambah Stok Buku** di sebelah kanan halaman `stok.html`.
  2. Klik tombol **Tambah ke Katalog**.
- **Hasil yang Diharapkan:** Baris buku baru langsung ditambahkan ke bagian bawah tabel secara dinamis.

**Hasil Pengujian di Browser:**

- mengubah stok
<img width="948" height="160" alt="image" src="https://github.com/user-attachments/assets/5cc9f051-9488-48f2-ae07-269e56ee6081" />

<img width="584" height="217" alt="image" src="https://github.com/user-attachments/assets/599dda76-b1b7-4db3-b2c5-006d75fb5ff9" />

- tambah buku baru

<img width="442" height="783" alt="image" src="https://github.com/user-attachments/assets/cbb32ee9-e4cd-43a0-9f33-1a1f6849fc2b" />

<img width="572" height="182" alt="image" src="https://github.com/user-attachments/assets/05c37781-e841-434d-9875-9c18f87572ef" />

<img width="957" height="135" alt="image" src="https://github.com/user-attachments/assets/387f33a6-947c-41ab-9d27-016c4afc2345" />


---

### Pengujian 9: Menghapus Buku dari Katalog

- **Deskripsi:** Menguji fitur penghapusan baris tabel katalog menggunakan _event handling_ pada tombol "Hapus".
- **Langkah Pengujian:**
  1. Klik tombol **Hapus** pada salah satu baris buku di `stok.html`.
  2. Konfirmasi pop-up penghapusan.
- **Hasil yang Diharapkan:** Baris buku terhapus dari DOM tabel secara langsung.

**Hasil Pengujian di Browser:**

<img width="957" height="135" alt="image" src="https://github.com/user-attachments/assets/bc2bb001-affc-4fa8-93d6-8f3fd103ce3b" />

<img width="586" height="188" alt="image" src="https://github.com/user-attachments/assets/46029123-280a-41c8-bdce-68c5e702d9b3" />

<img width="943" height="843" alt="image" src="https://github.com/user-attachments/assets/37be5ab3-ddbe-4872-894a-ea418def6747" />


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

<img width="860" height="767" alt="image" src="https://github.com/user-attachments/assets/534248e3-2b20-48a1-b013-259fd2b7e090" />

<img width="831" height="741" alt="image" src="https://github.com/user-attachments/assets/98051782-8900-4267-91bb-07c226d7df71" />


---

### Pengujian 12: Memproses Pemesanan (Checkout & Nomor DO)

- **Deskripsi:** Menguji validasi form data pemesan dan pembuatan nomor Delivery Order (DO) otomatis saat transaksi diproses.
- **Langkah Pengujian:**
  1. Isi Nama, Email, Telepon, Alamat, dan Metode Pembayaran pada form `checkout.html`.
  2. Klik **Proses Pemesanan**.
- **Hasil yang Diharapkan:** Muncul alert konfirmasi pemesanan sukses dengan Nomor DO unik. Data pemesanan baru otomatis dicatat ke riwayat transaksi dan sistem tracking.

**Hasil Pengujian di Browser:**

<img width="1378" height="747" alt="image" src="https://github.com/user-attachments/assets/5adee24b-b6b8-41b8-9b4c-7004f6cb2970" />

<img width="575" height="211" alt="image" src="https://github.com/user-attachments/assets/b2939002-58c0-4a1c-9ab7-a9e56e792354" />


---

### Pengujian 13: Pelacakan Status Pengiriman (Tracking DO)

- **Deskripsi:** Menguji fitur pencarian nomor Delivery Order dan visualisasi status pengiriman menggunakan _progress bar_.
- **Langkah Pengujian:**
  1. Buka `tracking.html`.
  2. Masukkan Nomor DO (misal: `20230012` atau Nomor DO baru dari pemesanan).
  3. Klik tombol **Cari Pengiriman**.
- **Hasil yang Diharapkan:** Informasi detail pengiriman, nama pemesan, rincian biaya, serta persentase _progress bar_ sesuai status pengiriman ditampilkan.

**Hasil Pengujian di Browser:**

<img width="1434" height="897" alt="image" src="https://github.com/user-attachments/assets/bf1ac9ae-e6ae-412c-99a2-299cf0f98327" />



---
