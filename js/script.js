document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initAuth();
  initDashboard();
  initKatalogStok();
  initCheckout();
  initTracking();
  initLogout();
});

function initStorage() {
  if (!localStorage.getItem("dataKatalogBuku")) {
    localStorage.setItem("dataKatalogBuku", JSON.stringify(dataKatalogBuku));
  }
  if (!localStorage.getItem("dataTracking")) {
    localStorage.setItem("dataTracking", JSON.stringify(dataTracking));
  }
}

function getKatalogData() {
  return JSON.parse(localStorage.getItem("dataKatalogBuku")) || dataKatalogBuku;
}

function saveKatalogData(data) {
  localStorage.setItem("dataKatalogBuku", JSON.stringify(data));
}

function getTrackingData() {
  return JSON.parse(localStorage.getItem("dataTracking")) || dataTracking;
}

function saveTrackingData(data) {
  localStorage.setItem("dataTracking", JSON.stringify(data));
}

// Fitur Login & Modal Box (index.html)
function initAuth() {
  const loginForm = document.getElementById("login-form");
  const modalLupaPass = document.getElementById("modal-lupa-password");
  const modalDaftar = document.getElementById("modal-daftar");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const user = dataPengguna.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        sessionStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "dashboard.html";
      } else {
        alert("Email atau password yang Anda masukkan salah.");
      }
    });
  }

  const btnLupaPass = document.getElementById("btn-lupa-password");
  const closeLupaPass = document.getElementById("close-lupa-password");
  const cancelLupaPass = document.getElementById("cancel-lupa-password");
  const formLupaPass = document.getElementById("form-lupa-password");

  if (modalLupaPass && btnLupaPass) {
    btnLupaPass.addEventListener("click", () => modalLupaPass.showModal());
    closeLupaPass?.addEventListener("click", () => modalLupaPass.close());
    cancelLupaPass?.addEventListener("click", () => modalLupaPass.close());

    formLupaPass?.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("reset-email").value;
      alert(`Instruksi pemulihan kata sandi telah dikirim ke ${email}`);
      modalLupaPass.close();
      formLupaPass.reset();
    });
  }

  const btnDaftar = document.getElementById("btn-daftar");
  const closeDaftar = document.getElementById("close-daftar");
  const cancelDaftar = document.getElementById("cancel-daftar");
  const formDaftar = document.getElementById("form-daftar");

  if (modalDaftar && btnDaftar) {
    btnDaftar.addEventListener("click", () => modalDaftar.showModal());
    closeDaftar?.addEventListener("click", () => modalDaftar.close());
    cancelDaftar?.addEventListener("click", () => modalDaftar.close());

    formDaftar?.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("reg-nama").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const password = document.getElementById("reg-password").value.trim();

      const newId = dataPengguna.length + 1;
      dataPengguna.push({ id: newId, nama, email, password, role: "User" });

      alert("Pendaftaran akun baru berhasil. Silakan login.");
      modalDaftar.close();
      formDaftar.reset();
    });
  }
}

// Fitur Dashboard & Greeting Waktu (dashboard.html)
function initDashboard() {
  const greetingEl = document.getElementById("greeting-text");
  const btnToggleRiwayat = document.getElementById("btn-toggle-riwayat");
  const riwayatSection = document.getElementById("riwayat-section");
  const tblRiwayatBody = document.getElementById("tbl-riwayat-body");

  if (greetingEl) {
    const hour = new Date().getHours();
    let waktuGreeting = "Pagi";

    if (hour >= 11 && hour < 15) {
      waktuGreeting = "Siang";
    } else if (hour >= 15 && hour < 18) {
      waktuGreeting = "Sore";
    } else if (hour >= 18 || hour < 5) {
      waktuGreeting = "Malam";
    }

    const savedUser = sessionStorage.getItem("currentUser");
    const namaUser = savedUser ? JSON.parse(savedUser).nama : "";

    greetingEl.textContent = `Selamat ${waktuGreeting}${namaUser ? `, ${namaUser}` : ""}`;
  }

  if (btnToggleRiwayat && riwayatSection && tblRiwayatBody) {
    btnToggleRiwayat.addEventListener("click", () => {
      const isHidden = riwayatSection.style.display === "none";
      if (isHidden) {
        renderRiwayatTransaksi(tblRiwayatBody);
        riwayatSection.style.display = "block";
        btnToggleRiwayat.textContent = "Sembunyikan Riwayat";
      } else {
        riwayatSection.style.display = "none";
        btnToggleRiwayat.textContent = "Lihat Riwayat";
      }
    });
  }
}

function renderRiwayatTransaksi(targetEl) {
  targetEl.innerHTML = "";
  const allTracking = getTrackingData();
  const listTransaksi = Object.values(allTracking);

  if (listTransaksi.length === 0) {
    targetEl.innerHTML = '<tr><td colspan="5" class="text-center">Belum ada riwayat transaksi.</td></tr>';
    return;
  }

  listTransaksi.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.nomorDO}</td>
      <td>${item.tanggalKirim}</td>
      <td>${item.nama}</td>
      <td>${item.total}</td>
      <td><span class="status-badge">${item.status}</span></td>
    `;
    targetEl.appendChild(tr);
  });
}

// Fitur Katalog & Tambah Stok DOM (stok.html)
function initKatalogStok() {
  const tbodyKatalog = document.getElementById("tabel-katalog-body");
  const formTambahBuku = document.getElementById("form-tambah-buku");

  if (tbodyKatalog) {
    renderKatalogTabel(tbodyKatalog);
  }

  if (formTambahBuku && tbodyKatalog) {
    formTambahBuku.addEventListener("submit", (e) => {
      e.preventDefault();

      const kode = document.getElementById("buku-kode").value.trim();
      const judul = document.getElementById("buku-judul").value.trim();
      const kategori = document.getElementById("buku-kategori").value;
      const hargaNum = parseInt(document.getElementById("buku-harga").value, 10);
      const stokNum = parseInt(document.getElementById("buku-stok").value, 10);
      const gambarInput = document.getElementById("buku-gambar").value.trim();

      const hargaFormatted = `Rp ${hargaNum.toLocaleString("id-ID")}`;
      const pathCover = gambarInput.startsWith("img/") ? gambarInput : `img/${gambarInput}`;

      const newBuku = {
        kodeBarang: kode,
        namaBarang: judul,
        jenisBarang: kategori,
        edisi: "1",
        stok: stokNum,
        harga: hargaFormatted,
        cover: pathCover,
      };

      const currentKatalog = getKatalogData();
      currentKatalog.push(newBuku);
      saveKatalogData(currentKatalog);

      tambahBarisKatalogDOM(tbodyKatalog, newBuku);

      alert(`Buku "${judul}" berhasil ditambahkan ke katalog.`);
      formTambahBuku.reset();
    });
  }
}

function renderKatalogTabel(targetEl) {
  targetEl.innerHTML = "";
  const katalog = getKatalogData();
  katalog.forEach((buku) => {
    tambahBarisKatalogDOM(targetEl, buku);
  });
}

function tambahBarisKatalogDOM(targetEl, buku) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><img src="${buku.cover}" alt="${buku.namaBarang}" class="img-thumbnail" onerror="this.src='https://via.placeholder.com/40x50?text=Buku'"></td>
    <td><strong>${buku.kodeBarang}</strong></td>
    <td>${buku.namaBarang}</td>
    <td>${buku.jenisBarang}</td>
    <td>${buku.harga}</td>
    <td>${buku.stok}</td>
    <td>
      <button type="button" class="btn btn-danger btn-sm btn-hapus-stok">Hapus</button>
    </td>
  `;

  tr.querySelector(".btn-hapus-stok").addEventListener("click", () => {
    if (confirm(`Hapus ${buku.namaBarang} dari katalog?`)) {
      let currentKatalog = getKatalogData();
      currentKatalog = currentKatalog.filter((b) => b.kodeBarang !== buku.kodeBarang);
      saveKatalogData(currentKatalog);
      tr.remove();
    }
  });

  targetEl.appendChild(tr);
}

// Fitur Pemesanan & Cart (checkout.html)
let cartItems = [];

function initCheckout() {
  const booksGrid = document.getElementById("checkout-books-grid");
  const tblCartBody = document.getElementById("tbl-cart-body");
  const formCheckout = document.getElementById("form-checkout");

  if (booksGrid) {
    renderCheckoutBooks(booksGrid, tblCartBody);
  }

  if (formCheckout) {
    formCheckout.addEventListener("submit", (e) => {
      e.preventDefault();
      if (cartItems.length === 0) {
        alert("Keranjang belanja masih kosong. Pilih buku terlebih dahulu.");
        return;
      }

      const nama = document.getElementById("cust-nama").value.trim();
      const randomDO = `DO-${Math.floor(10000000 + Math.random() * 90000000)}`;
      const grandTotal = cartItems.reduce((acc, item) => acc + item.harga * item.qty, 0);
      const totalFormatted = `Rp ${grandTotal.toLocaleString("id-ID")}`;
      const todayStr = new Date().toISOString().split("T")[0];

      const currentTracking = getTrackingData();
      currentTracking[randomDO] = {
        nomorDO: randomDO,
        nama: nama,
        status: "Diproses",
        ekspedisi: "JNE",
        tanggalKirim: todayStr,
        paket: "REGULAR",
        total: totalFormatted,
        perjalanan: [
          {
            waktu: `${todayStr} ${new Date().toLocaleTimeString("id-ID")}`,
            keterangan: "Pesanan berhasil dibuat dan sedang diproses oleh toko.",
          },
        ],
      };

      saveTrackingData(currentTracking);

      alert(`Pemesanan atas nama ${nama} berhasil diproses.\nNomor Delivery Order (DO) Anda: ${randomDO}`);

      cartItems = [];
      if (tblCartBody) renderCart(tblCartBody);
      formCheckout.reset();
    });
  }
}

// Render Pilihan Kartu Buku dengan Gambar dan Tombol "Tambah ke Keranjang"
function renderCheckoutBooks(gridEl, tblCartBody) {
  gridEl.innerHTML = "";
  const katalog = getKatalogData();

  katalog.forEach((buku) => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
      <img src="${buku.cover}" alt="${buku.namaBarang}" onerror="this.src='https://via.placeholder.com/90x120?text=Buku'">
      <h3>${buku.namaBarang}</h3>
      <span class="book-price">${buku.harga}</span>
      <button type="button" class="btn btn-secondary btn-sm btn-add-cart">Tambah ke Keranjang</button>
    `;

    card.querySelector(".btn-add-cart").addEventListener("click", () => {
      addToCart(buku);
      if (tblCartBody) renderCart(tblCartBody);
    });

    gridEl.appendChild(card);
  });
}

function addToCart(buku) {
  const hargaClean = parseInt(buku.harga.replace(/[^0-9]/g, ""), 10);
  const existing = cartItems.find((item) => item.kodeBarang === buku.kodeBarang);

  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({
      kodeBarang: buku.kodeBarang,
      namaBarang: buku.namaBarang,
      cover: buku.cover,
      harga: hargaClean,
      qty: 1,
    });
  }
}

function renderCart(targetEl) {
  targetEl.innerHTML = "";
  let grandTotal = 0;

  if (cartItems.length === 0) {
    targetEl.innerHTML = '<tr><td colspan="6" class="text-center">Keranjang masih kosong.</td></tr>';
    document.getElementById("cart-total-price").textContent = "Rp 0";
    return;
  }

  cartItems.forEach((item, index) => {
    const subtotal = item.harga * item.qty;
    grandTotal += subtotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><img src="${item.cover}" alt="${item.namaBarang}" class="img-thumbnail" onerror="this.src='https://via.placeholder.com/40x50?text=Buku'"></td>
      <td>${item.namaBarang}</td>
      <td>Rp ${item.harga.toLocaleString("id-ID")}</td>
      <td>
        <input type="number" min="1" value="${item.qty}" class="input-qty-cart" style="width: 60px; text-align: center;">
      </td>
      <td>Rp ${subtotal.toLocaleString("id-ID")}</td>
      <td>
        <button type="button" class="btn btn-danger btn-sm btn-hapus-cart">Hapus</button>
      </td>
    `;

    // Event ubah jumlah kuantitas langsung dari tabel
    tr.querySelector(".input-qty-cart").addEventListener("change", (e) => {
      const newQty = parseInt(e.target.value, 10);
      if (newQty > 0) {
        item.qty = newQty;
        renderCart(targetEl);
      }
    });

    // Event hapus item
    tr.querySelector(".btn-hapus-cart").addEventListener("click", () => {
      cartItems.splice(index, 1);
      renderCart(targetEl);
    });

    targetEl.appendChild(tr);
  });

  document.getElementById("cart-total-price").textContent = `Rp ${grandTotal.toLocaleString("id-ID")}`;
}

// Fitur Tracking Pengiriman (tracking.html)
function initTracking() {
  const formTracking = document.getElementById("form-tracking");
  const resultCard = document.getElementById("tracking-result");

  if (formTracking && resultCard) {
    formTracking.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputDO = document.getElementById("no-do").value.trim();

      const allTracking = getTrackingData();
      const trackingInfo = allTracking[inputDO];

      if (trackingInfo) {
        document.getElementById("track-do-num").textContent = trackingInfo.nomorDO;
        document.getElementById("track-nama").textContent = trackingInfo.nama;
        document.getElementById("track-ekspedisi").textContent = trackingInfo.ekspedisi;
        document.getElementById("track-tanggal").textContent = trackingInfo.tanggalKirim;
        document.getElementById("track-paket").textContent = trackingInfo.paket;
        document.getElementById("track-total").textContent = trackingInfo.total;
        document.getElementById("track-alamat").textContent = "Tujuan Pemesan";

        const badgeEl = document.getElementById("track-status-badge");
        const progressFill = document.getElementById("progress-fill");
        const step1 = document.getElementById("step-1");
        const step2 = document.getElementById("step-2");
        const step3 = document.getElementById("step-3");

        badgeEl.textContent = trackingInfo.status;

        step1.classList.add("step-done");
        if (trackingInfo.status === "Selesai Antar" || trackingInfo.status === "Selesai") {
          progressFill.style.width = "100%";
          step2.classList.add("step-done");
          step3.classList.add("step-done");
        } else if (trackingInfo.status === "Dalam Perjalanan" || trackingInfo.status === "Dikirim") {
          progressFill.style.width = "66%";
          step2.classList.add("step-done");
          step3.classList.remove("step-done");
        } else {
          progressFill.style.width = "33%";
          step2.classList.remove("step-done");
          step3.classList.remove("step-done");
        }

        resultCard.style.display = "block";
      } else {
        resultCard.style.display = "none";
        alert(`Nomor Delivery Order "${inputDO}" tidak ditemukan.`);
      }
    });
  }
}

// Fitur Logout
function initLogout() {
  const btnLogout = document.getElementById("btn-logout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      sessionStorage.removeItem("currentUser");
      window.location.href = "index.html";
    });
  }
}