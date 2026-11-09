// ==========================================
// PENGATURAN TOKO & ADMIN
// ==========================================
const WHATSAPP_NUMBER = "6282120455523";
const ADMIN_EMAIL = "fawzybangkit@gmail.com";
const GOOGLE_CLIENT_ID =
  "571088132754-78seinpkcbv05l1ndtgml26e9u4657la.apps.googleusercontent.com";

const QUEUE_LIMIT_SECONDS = 600; // 10 menit
const STATUSES = ["PENDING", "DIPROSES", "SIAP DIAMBIL", "SELESAI"];
const ACTIVE_STATUSES = ["PENDING", "DIPROSES"];

const PAYMENT_DETAILS = {
  qris: { label: "ALL QRIS", isQris: true },
  dana: {
    label: "DANA / Indomaret / Alfamart",
    number: "082120455523",
    name: "Farrel A.F",
    note: "📌 *Jika bayar lewat Indomaret/Alfamart, nominal perak (misal Rp11.990) bisa digenapkan ke atas (jadi Rp12.000). Sisa kelebihannya aman & diproses admin!",
    isQris: false,
  },
  gopay: {
    label: "GoPay",
    number: "082120455523",
    name: "Farrel A.F",
    note: "📌 *Transfer via GoPay. Nominal ganjil/perak bisa digenapkan.",
    isQris: false,
  },
  shopeepay: {
    label: "ShopeePay",
    number: "082120455523",
    name: "Farrel A.F",
    note: "📌 *Transfer via ShopeePay. Nominal perak bisa digenapkan.",
    isQris: false,
  },
  seabank: {
    label: "SeaBank",
    number: "901432823323",
    name: "Farrel A.F",
    note: "*Transfer via SeaBank ke nomor rekening di atas.",
    isQris: false,
  },
  bca: {
    label: "Bank BCA",
    number: "Gangguan",
    name: "Fawzyy Store",
    note: "*Transfer via Bank BCA ke nomor rekening di atas.",
    isQris: false,
  },
  ovo: {
    label: "OVO",
    number: "082120455523",
    name: "Farrel A.F",
    note: "📌 *Transfer via OVO. Nominal perak bisa digenapkan.",
    isQris: false,
  },
};

let currentUser = null;
let ordersData = [];
let reviewsData = JSON.parse(localStorage.getItem("fawzyy_reviews")) || [
  {
    name: "Prayoga",
    rating: 5,
    text: "Proses cepat poll, wort it beli disini",
  },
  {
    name: "RZKY_DDS",
    rating: 5,
    text: "Top up cash amanah 100%, recommended.",
  },
];

let activeCategory = "all";
let cart = [];
let currentCheckoutData = null;
let queueWatchOrderNo = null;
let queueTimer = null;
let guideIndex = 0;

// ==========================================
// DAFTAR PRODUK
// ==========================================
const products = [
  {
    id: 1,
    name: "Dragspec Pass",
    category: "gamepass",
    price: 11990,
    desc: "Akses Drag Bikes",
    icon: "🏍️",
    image: "Dragspec.jpg",
    badge: "BEST SELLER",
    popular: 1,
  },
  {
    id: 2,
    name: "Advance Paint Pass",
    category: "gamepass",
    price: 5000,
    desc: "Warna kendaraan lebih bebas",
    icon: "🎨",
    image: "cat.jpg",
    badge: "POPULAR",
    popular: 2,
  },
  {
    id: 3,
    name: "Luxury Pass",
    category: "gamepass",
    price: 13090,
    desc: "Akses Sport Bikes",
    icon: "🏎️",
    image: "Luxury.jpg",
    badge: "POPULAR",
    popular: 3,
  },
  {
    id: 4,
    name: "Exclusive Rims",
    category: "gamepass",
    price: 8690,
    desc: "Velg eksklusif",
    icon: "🛞",
    image: "velg.jpg",
    badge: "",
    popular: 4,
  },
  {
    id: 5,
    name: "Custom Plate Pass",
    category: "gamepass",
    price: 8690,
    desc: "Kustom plat kendaraan",
    icon: "🔠",
    image: "plat.jpg",
    badge: "",
    popular: 5,
  },
  {
    id: 6,
    name: "Boombox Radio",
    category: "gamepass",
    price: 3190,
    desc: "Putar musik favorit",
    icon: "🎵",
    image: "boombox.jpg",
    badge: "",
    popular: 6,
  },
  {
    id: 7,
    name: "Premium Accessories",
    category: "gamepass",
    price: 6490,
    desc: "Aksesori premium",
    icon: "🪽",
    image: "premium.jpg",
    badge: "",
    popular: 7,
  },
  {
    id: 8,
    name: "Suspension Pro",
    category: "gamepass",
    price: 3190,
    desc: "Fitur tuning kendaraan",
    icon: "⚙️",
    image: "suspensi.jpg",
    badge: "",
    popular: 8,
  },
  {
    id: 9,
    name: "Police Pass",
    category: "gamepass",
    price: 16390,
    desc: "Roleplay sebagai polisi",
    icon: "🚨",
    image: "polisi.jpg",
    badge: "",
    popular: 9,
  },
  {
    id: 10,
    name: "Slot Limit Unlocker",
    category: "gamepass",
    price: 9790,
    desc: "Tambahan slot kendaraan",
    icon: "🔓",
    image: "slot.jpg",
    badge: "",
    popular: 10,
  },
  {
    id: 11,
    name: "2x Paycheck",
    category: "gamepass",
    price: 54391,
    desc: "Bonus paycheck pekerjaan",
    icon: "💸",
    image: "2x.jpg",
    badge: "",
    popular: 11,
  },
  {
    id: 12,
    name: "Cash DDS 1 Juta",
    category: "cash",
    price: 990,
    desc: "Uang dalam game",
    icon: "💵",
    image: "uang.jpg",
    badge: "",
    popular: 12,
  },
  {
    id: 13,
    name: "Cash DDS 5 Juta",
    category: "cash",
    price: 1980,
    desc: "Uang dalam game",
    icon: "💰",
    image: "uang.jpg",
    badge: "",
    popular: 13,
  },
  {
    id: 14,
    name: "Cash DDS 10 Juta",
    category: "cash",
    price: 3850,
    desc: "Uang dalam game",
    icon: "💸",
    image: "uang.jpg",
    badge: "",
    popular: 14,
  },
  {
    id: 15,
    name: "Cash DDS 50 Juta",
    category: "cash",
    price: 6490,
    desc: "Uang dalam game",
    icon: "🤑",
    image: "uang.jpg",
    badge: "",
    popular: 15,
  },
  {
    id: 16,
    name: "Cash DDS 100 Juta",
    category: "cash",
    price: 10890,
    desc: "Uang dalam game",
    icon: "🏦",
    image: "uang.jpg",
    badge: "",
    popular: 16,
  },
  {
    id: 17,
    name: "Cash DDS 500 Juta",
    category: "cash",
    price: 43890,
    desc: "Uang dalam game",
    icon: "💎",
    image: "uang.jpg",
    badge: "",
    popular: 17,
  },
];

const $ = (id) => document.getElementById(id);

function rupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function esc(str) {
  return String(str ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function openModal(id) {
  const el = $(id);
  if (el) el.style.display = "flex";
}
function closeModal(id) {
  const el = $(id);
  if (el) el.style.display = "none";
}
function openLoginModal() {
  openModal("loginModal");
}
function closeLoginModal() {
  closeModal("loginModal");
}

// ==========================================
// FIRESTORE SYNC (REAL-TIME DATABASE)
// ==========================================
function initRealtimeOrders() {
  if (!window.db) return;
  const { collection, onSnapshot } = window.firebaseCollections;

  onSnapshot(collection(window.db, "orders"), (snapshot) => {
    ordersData = [];
    snapshot.forEach((docSnap) => {
      ordersData.push({ id: docSnap.id, ...docSnap.data() });
    });
    // Urutkan dari yang terbaru/terlama sesuai kebutuhan
    ordersData.sort((a, b) => b.createdAt - a.createdAt);

    if ($("adminModal") && $("adminModal").style.display === "flex") {
      renderAdminOrders();
    }
  });
}

window.addEventListener("firebase-ready", () => {
  initRealtimeOrders();
});

// ==========================================
// LOGIN GOOGLE OAUTH
// ==========================================
function loginWithGoogle() {
  if (
    typeof google !== "undefined" &&
    google.accounts &&
    google.accounts.oauth2
  ) {
    try {
      const client = google.accounts.oauth2.initTokenClient({
        client_id: GOOGLE_CLIENT_ID,
        scope:
          "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
        prompt: "select_account",
        callback: (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            fetch(
              `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`,
            )
              .then((r) => r.json())
              .then((u) => {
                if (u && u.name) {
                  currentUser = {
                    name: u.name.toUpperCase(),
                    email: (u.email || "").toLowerCase(),
                  };
                  localStorage.setItem(
                    "fawzyy_current_user",
                    JSON.stringify(currentUser),
                  );
                  closeLoginModal();
                  updateAuthUI();
                  showToast(`Berhasil login sebagai ${currentUser.name}`);
                }
              });
          }
        },
      });
      client.requestAccessToken();
    } catch (e) {
      console.error(e);
    }
  } else {
    showToast("SDK Google belum siap.");
  }
}

function logoutGoogle() {
  currentUser = null;
  localStorage.removeItem("fawzyy_current_user");
  updateAuthUI();
  showToast("Berhasil logout.");
}

function isAdmin() {
  return !!currentUser && currentUser.email === ADMIN_EMAIL.toLowerCase();
}

function updateAuthUI() {
  const loginBtn = $("googleLoginBtn");
  const userProfile = $("userProfile");
  const userNameEl = $("userName");
  const reviewNameEl = $("reviewName");
  const adminMenuBtn = $("adminMenuBtn");
  const myOrdersBtn = $("myOrdersBtn");

  if (currentUser && currentUser.name) {
    if (loginBtn) loginBtn.style.setProperty("display", "none", "important");
    if (userProfile)
      userProfile.style.setProperty("display", "flex", "important");
    if (userNameEl) userNameEl.textContent = currentUser.name;
    if (reviewNameEl) reviewNameEl.value = currentUser.name;
    if (adminMenuBtn)
      adminMenuBtn.style.display = isAdmin() ? "inline-block" : "none";
    if (myOrdersBtn) myOrdersBtn.style.display = "inline-block";
  } else {
    if (loginBtn)
      loginBtn.style.setProperty("display", "inline-block", "important");
    if (userProfile)
      userProfile.style.setProperty("display", "none", "important");
    if (adminMenuBtn) adminMenuBtn.style.display = "none";
    if (myOrdersBtn) myOrdersBtn.style.display = "none";
    if (reviewNameEl) reviewNameEl.value = "";
  }
}

// ==========================================
// PESANAN SAYA
// ==========================================
function openMyOrders() {
  if (!currentUser) return showToast("Silakan login terlebih dahulu.");

  const myOrders = ordersData.filter(
    (o) => (o.email || "").toLowerCase() === currentUser.email.toLowerCase(),
  );

  const container = $("myOrdersList");
  if (!container) return;

  if (!myOrders.length) {
    container.innerHTML = `<p style="color:#94a3b8; text-align:center; padding: 1.5rem;">Belum ada riwayat pesanan.</p>`;
  } else {
    container.innerHTML = myOrders
      .map(
        (o) => `
        <div style="background:#1e293b; padding:1rem; border-radius:8px; border:1px solid #334155; margin-bottom: 0.5rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong style="color:#38bdf8;">${esc(o.orderNo)}</strong>
            <span style="background:#38bdf820; color:#38bdf8; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">${esc(o.status)}</span>
          </div>
          <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Roblox: <code style="color:#38bdf8;">${esc(o.roblox)}</code></p>
          <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Total: <strong>${rupiah(o.total)}</strong></p>
          
          ${
            o.adminNote
              ? `<div style="margin-top: 8px; background: rgba(56, 189, 248, 0.1); border: 1px dashed #38bdf8; padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; color: #38bdf8;">
                   <strong>💬 Catatan dari Admin:</strong><br>${esc(o.adminNote)}
                 </div>`
              : ``
          }

          <button onclick="openQueueModal('${esc(o.orderNo)}'); closeModal('myOrdersModal');" style="margin-top:8px; background:#2563eb; color:white; border:none; padding:6px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer; width:100%; font-weight:bold;">
            🔍 Lihat Live Antrean / Waktu
          </button>
        </div>
      `,
      )
      .join("");
  }

  openModal("myOrdersModal");
}

// ==========================================
// ULASAN
// ==========================================
function renderReviews() {
  const list = $("reviewsList");
  if (!list) return;
  list.innerHTML = reviewsData
    .map(
      (rev) => `
    <div style="background:#1e293b; padding:1.25rem; border-radius:8px; border:1px solid #334155;">
      <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
        <strong>${esc(rev.name)}</strong>
        <span>${"⭐".repeat(rev.rating)}</span>
      </div>
      <p>${esc(rev.text)}</p>
    </div>`,
    )
    .join("");
}

function submitReview() {
  if (!currentUser) {
    alert(
      "⚠️ Anda belum login! Silakan login akun Google terlebih dahulu untuk menulis ulasan.",
    );
    openLoginModal();
    return;
  }
  const text = $("reviewText").value.trim();
  const rating = Number($("reviewRating").value);
  if (!text) return showToast("Tuliskan komentar ulasanmu dulu ya!");

  reviewsData.unshift({ name: currentUser.name, rating, text });
  localStorage.setItem("fawzyy_reviews", JSON.stringify(reviewsData));
  $("reviewText").value = "";
  renderReviews();
  showToast("Terima kasih, ulasan berhasil dikirim!");
}

// ==========================================
// PRODUK & KERANJANG
// ==========================================
function renderProducts() {
  const q = $("searchInput").value.toLowerCase();
  let shown = products.filter(
    (p) =>
      (activeCategory === "all" || p.category === activeCategory) &&
      p.name.toLowerCase().includes(q),
  );

  const sort = $("sortSelect").value;
  if (sort === "low") shown.sort((a, b) => a.price - b.price);
  else if (sort === "high") shown.sort((a, b) => b.price - a.price);
  else if (sort === "az") shown.sort((a, b) => a.name.localeCompare(b.name));
  else shown.sort((a, b) => a.popular - b.popular);

  $("productGrid").innerHTML = shown
    .map(
      (p) => `
    <article class="product-card">
      <div class="product-art">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <span class="product-category">${p.category === "cash" ? "CASH DDS" : "GAMEPASS"}</span>
        ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;" onerror="this.style.display='none'" />` : `<span class="product-symbol">${p.icon}</span>`}
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-meta">
          <strong class="product-price">${rupiah(p.price)}</strong>
          <span class="product-rating">★ 5.0</span>
        </div>
        <button class="buy-button" data-add="${p.id}">+ Tambah ke keranjang</button>
      </div>
    </article>`,
    )
    .join("");

  $("emptyState").hidden = shown.length > 0;
  $("allCount").textContent = products.length;
}

function addToCart(id) {
  const product = products.find((i) => i.id === id);
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  renderCart();
  showToast(`${product.name} ditambahkan ke keranjang`);
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  $("cartCount").textContent = totalItems;
  $("cartTotal").textContent = rupiah(totalPrice);

  if (!cart.length) {
    $("cartItems").innerHTML =
      `<div class="cart-empty">🛒<br><br>Keranjangmu masih kosong.<br>Yuk pilih produk dulu!</div>`;
    return;
  }

  $("cartItems").innerHTML = cart
    .map(
      (i) => `
    <div class="cart-row">
      <div class="cart-thumb" style="overflow:hidden; display:flex; align-items:center; justify-content:center;">
        ${i.image ? `<img src="${i.image}" alt="${i.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'" />` : i.icon}
      </div>
      <div class="cart-detail">
        <strong>${i.name}</strong>
        <small>${i.qty} × ${rupiah(i.price)}</small>
      </div>
      <button class="remove-item" data-remove="${i.id}">Hapus</button>
    </div>`,
    )
    .join("");
}

function openCart() {
  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("show");
}
function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("overlay").classList.remove("show");
}

// ==========================================
// SLIDER PANDUAN
// ==========================================
function showSlide(i) {
  const slides = document.querySelectorAll("#guideModal .slide");
  const dots = document.querySelectorAll("#slideDots span");
  if (!slides.length) return;
  guideIndex = Math.max(0, Math.min(i, slides.length - 1));

  slides.forEach((s, idx) => {
    s.style.display = idx === guideIndex ? "block" : "none";
    s.classList.toggle("active", idx === guideIndex);
  });
  dots.forEach((d, idx) => {
    d.style.background = idx === guideIndex ? "#38bdf8" : "#334155";
  });
  if ($("slidePrev")) $("slidePrev").disabled = guideIndex === 0;
  if ($("slideNext"))
    $("slideNext").disabled = guideIndex === slides.length - 1;
}

function changeSlide(step) {
  showSlide(guideIndex + step);
}

function guideContinue() {
  if ($("guideDontShow") && $("guideDontShow").checked) {
    localStorage.setItem("fawzyy_guide_hide", "1");
  }
  closeModal("guideModal");
  if (currentCheckoutData && $("paymentModal").style.display !== "flex") {
    openPayment();
  }
}

// ==========================================
// CHECKOUT & PEMBAYARAN KE FIRESTORE
// ==========================================
function generateOrderNo() {
  return `#FAW-${Math.floor(10000 + Math.random() * 90000)}`;
}

function startCheckout() {
  if (!currentUser) {
    alert(
      "⚠️ Anda belum login! Harap login dengan Google terlebih dahulu sebelum checkout.",
    );
    openLoginModal();
    return;
  }
  if (!cart.length) return showToast("Keranjang masih kosong!");

  const username = $("robloxUsername").value.trim();
  if (!username) {
    $("robloxUsername").focus();
    return showToast("Isi username Roblox dulu ya!");
  }

  currentCheckoutData = {
    orderNo: generateOrderNo(),
    buyer: currentUser.name,
    email: currentUser.email,
    roblox: username,
    items: cart.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
    total: cart.reduce((s, i) => s + i.price * i.qty, 0),
    createdAt: Date.now(),
    date: new Date().toLocaleString("id-ID"),
    paymentMethod: "ALL QRIS",
    status: "PENDING",
    proof: null,
    adminNote: "",
  };

  closeCart();

  if (localStorage.getItem("fawzyy_guide_hide") === "1") {
    openPayment();
  } else {
    if ($("guideDontShow")) $("guideDontShow").checked = false;
    showSlide(0);
    openModal("guideModal");
  }
}

function changePaymentMethod() {
  const methodKey = $("paymentMethodSelect").value;
  const method = PAYMENT_DETAILS[methodKey] || PAYMENT_DETAILS.qris;

  if (currentCheckoutData) {
    currentCheckoutData.paymentMethod = method.label;
  }

  const qrisBox = $("qrisContainer");
  const accountBox = $("accountInfoContainer");

  if (method.isQris) {
    if (qrisBox) qrisBox.style.display = "block";
    if (accountBox) accountBox.style.display = "none";
  } else {
    if (qrisBox) qrisBox.style.display = "none";
    if (accountBox) {
      accountBox.style.display = "block";
      $("methodLabel").textContent = `NO. ${method.label.toUpperCase()}:`;
      $("methodNumber").textContent = method.number;
      $("methodName").textContent = method.name;
      $("methodGuideNote").textContent = method.note;
    }
  }
}

function openPayment() {
  const total = currentCheckoutData.total;
  const totalRounded = Math.ceil(total / 1000) * 1000;

  $("modalOrderNo").textContent = currentCheckoutData.orderNo;
  $("modalTotalPay").innerHTML = `
    <strong>${rupiah(total)}</strong>
    <small style="display:block; color:#f59e0b; font-size:0.75rem; margin-top:2px;">
      (Bayar di Indomaret/Alfamart: genapkan jadi <strong>${rupiah(totalRounded)}</strong>)
    </small>
  `;

  if ($("paymentProofInput")) $("paymentProofInput").value = "";
  if ($("paymentMethodSelect")) $("paymentMethodSelect").value = "qris";
  changePaymentMethod();
  openModal("paymentModal");
}

function closePaymentModal() {
  closeModal("paymentModal");
}

function compressImage(file, maxSize = 900, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas
          .getContext("2d")
          .drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function submitPaymentProof() {
  const fileInput = $("paymentProofInput");
  if (!fileInput || !fileInput.files[0]) {
    return alert(
      "⚠️ Harap upload screenshot bukti pembayaran terlebih dahulu!",
    );
  }
  const file = fileInput.files[0];
  if (!file.type.startsWith("image/")) {
    return alert("⚠️ File harus berupa gambar!");
  }

  const btn = $("submitProofBtn");
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Mengirim ke Server...";
  }

  try {
    currentCheckoutData.proof = await compressImage(file);
    currentCheckoutData.createdAt = Date.now();
    currentCheckoutData.date = new Date().toLocaleString("id-ID");

    // Kirim ke Firestore Database Online
    const { collection, addDoc } = window.firebaseCollections;
    await addDoc(collection(window.db, "orders"), currentCheckoutData);

    const orderNo = currentCheckoutData.orderNo;
    closePaymentModal();
    cart = [];
    currentCheckoutData = null;
    if ($("robloxUsername")) $("robloxUsername").value = "";
    renderCart();
    openQueueModal(orderNo);
    showToast("Pesanan berhasil dikirim!");
  } catch (err) {
    console.error(err);
    alert("❌ Gagal mengirim pesanan ke server. Coba lagi.");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.textContent = "Kirim Bukti & Masuk Antrean ↗";
    }
  }
}

// ==========================================
// STATUS ANTREAN
// ==========================================
function queuePosition(order) {
  if (!ACTIVE_STATUSES.includes(order.status)) return 0;
  const active = ordersData
    .filter((o) => ACTIVE_STATUSES.includes(o.status))
    .sort((a, b) => a.createdAt - b.createdAt);
  return active.findIndex((o) => o.orderNo === order.orderNo) + 1;
}

function progressHTML(status) {
  const idx = STATUSES.indexOf(status);
  return STATUSES.map(
    (s, i) =>
      `<span style="color:${i <= idx ? "#22c55e" : "#64748b"}">${s}</span>`,
  ).join(" › ");
}

function openQueueModal(orderNo) {
  queueWatchOrderNo = orderNo;
  if ($("queueOrderNo")) $("queueOrderNo").textContent = orderNo;

  openModal("queueModal");
  refreshQueueModal();
  clearInterval(queueTimer);
  queueTimer = setInterval(refreshQueueModal, 1000);
}

function refreshQueueModal() {
  const qModal = $("queueModal");
  if (!qModal || qModal.style.display !== "flex") {
    clearInterval(queueTimer);
    return;
  }
  const order = ordersData.find((o) => o.orderNo === queueWatchOrderNo);
  if (!order) return;

  const badge = $("queueStatusBadge");
  if (badge) badge.textContent = order.status;
  if ($("queueProgress"))
    $("queueProgress").innerHTML = progressHTML(order.status);

  const pos = queuePosition(order);
  if ($("queuePosition"))
    $("queuePosition").textContent = pos ? `#${pos}` : "—";

  const left =
    QUEUE_LIMIT_SECONDS - Math.floor((Date.now() - order.createdAt) / 1000);
  const timer = $("countdownTimer");
  const waBtn = $("waHelpButton");

  if (timer) {
    if (!ACTIVE_STATUSES.includes(order.status)) {
      timer.textContent = "✔ SELESAI";
      timer.style.color = "#22c55e";
      if (waBtn) waBtn.style.display = "none";
    } else if (left <= 0) {
      timer.textContent = "WAKTU HABIS";
      timer.style.color = "#ef4444";
      if (waBtn) {
        waBtn.style.display = "block";
        const waText = `Halo Admin Fawzyy Store! Pesanan saya dengan Nomor Order ${order.orderNo} sudah melewati 10 menit dan masih berstatus ${order.status}. Mohon dibantu, terima kasih.`;
        waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;
      }
    } else {
      timer.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
      timer.style.color = "#22c55e";
      if (waBtn) waBtn.style.display = "none";
    }
  }

  // MENAMPILKAN CATATAN / LINK PS DARI PANEL ADMIN
  const noteDisplay = $("modalAdminNoteDisplay");
  if (noteDisplay) {
    if (order.adminNote && order.adminNote.trim() !== "") {
      // Mengubah teks link URL otomatis menjadi link aktif yang bisa diklik
      const formattedNote = esc(order.adminNote).replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" style="color: #38bdf8; font-weight: bold; text-decoration: underline;">$1 ↗</a>',
      );
      noteDisplay.innerHTML = formattedNote;
    } else {
      noteDisplay.innerHTML =
        '<span style="color: #94a3b8; font-style: italic;">Belum ada catatan/link dari admin.</span>';
    }
  }

  const notes = {
    PENDING: "Admin sedang memeriksa bukti pembayaranmu.",
    DIPROSES: "Pembayaran terverifikasi! Admin sedang menyiapkan pesananmu.",
    "SIAP DIAMBIL":
      "🎉 Gamepass-mu SIAP DIAMBIL! Silakan cek link Private Server di atas.",
    SELESAI: "✅ Pesanan selesai. Terima kasih!",
  };
  if ($("queueNote")) $("queueNote").innerHTML = notes[order.status] || "";
}

// ==========================================
// PANEL ADMIN (ONLINE FIRESTORE)
// ==========================================
function openAdminPanel() {
  if (!isAdmin()) return showToast("Akses ditolak.");
  openModal("adminModal");
  renderAdminOrders();
}

function closeAdminPanel() {
  closeModal("adminModal");
}

function renderAdminOrders() {
  const filterEl = $("adminFilter");
  const filter = filterEl ? filterEl.value : "ALL";

  const summary = $("adminSummary");
  if (summary) {
    summary.innerHTML = STATUSES.map((s) => {
      const n = ordersData.filter((o) => o.status === s).length;
      return `<div style="background:#1e293b; padding:0.6rem; border-radius:8px; text-align:center;"><strong>${n}</strong><br><small style="font-size:0.65rem; color:#94a3b8;">${s}</small></div>`;
    }).join("");
  }

  const listContainer = $("adminOrderList");
  if (!listContainer) return;

  const list = ordersData
    .filter((o) => filter === "ALL" || o.status === filter)
    .sort((a, b) => a.createdAt - b.createdAt);

  if (!list.length) {
    listContainer.innerHTML = `<p style="color:#94a3b8; text-align:center; padding: 1.5rem;">Tidak ada pesanan.</p>`;
    return;
  }

  listContainer.innerHTML = list
    .map((o) => {
      const items = (o.items || [])
        .map((i) => `${esc(i.name)} (${i.qty}x)`)
        .join(", ");
      const pos = queuePosition(o);
      return `
      <div style="background:#0f172a; padding:1rem; border-radius:8px; margin-bottom:1rem; border:1px solid #334155;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <strong style="color:#38bdf8;">${esc(o.orderNo)} ${pos ? `<small style="color:#94a3b8;">· antrean #${pos}</small>` : ""}</strong>
          <span style="background:#38bdf820; color:#38bdf8; padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">${esc(o.status)}</span>
        </div>
        <p style="margin:4px 0; font-size:0.85rem; color:#f8fafc;">Pembeli: <strong>${esc(o.buyer)}</strong> (${esc(o.email)})</p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Username Roblox: <code style="color:#38bdf8; background:#1e293b; padding:2px 6px; border-radius:4px;">${esc(o.roblox)}</code></p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Metode Bayar: <span style="color:#f59e0b; font-weight:bold;">${esc(o.paymentMethod || "QRIS")}</span></p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Item: ${items || "-"}</p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Total: <strong>${rupiah(o.total)}</strong></p>
        <p style="margin:4px 0; font-size:0.75rem; color:#94a3b8;">Waktu: ${esc(o.date)}</p>

        <div style="margin-top: 0.75rem; background: #1e293b; padding: 0.75rem; border-radius: 6px; border: 1px solid #334155;">
          <label style="font-size: 0.75rem; color: #38bdf8; display: block; margin-bottom: 4px; font-weight: bold;">
            📝 Catatan / Link Gamepass / Info Server:
          </label>
          <div style="display: flex; gap: 6px;">
            <input type="text" id="note_${o.id}" value="${esc(o.adminNote || "")}" placeholder="Tulis link private server / catatan..." style="flex: 1; background: #0f172a; border: 1px solid #334155; color: white; padding: 0.4rem 0.6rem; border-radius: 4px; font-size: 0.8rem;" />
            <button onclick="saveAdminNote('${o.id}')" style="background: #2563eb; color: white; border: none; padding: 0.4rem 0.75rem; border-radius: 4px; font-size: 0.75rem; font-weight: bold; cursor: pointer;">Simpan</button>
          </div>
        </div>

        ${o.proof ? `<div style="margin-top:0.75rem;"><span style="font-size:0.75rem; color:#94a3b8; display:block;">Bukti Pembayaran:</span><a href="${o.proof}" target="_blank"><img src="${o.proof}" alt="Bukti Transfer" style="max-width:100px; border-radius:4px; border:1px solid #334155;" /></a></div>` : `<p style="color:#ef4444; font-size:0.75rem; margin-top:0.5rem;">⚠️ Belum upload bukti.</p>`}

        <div style="display:flex; gap:5px; margin-top:0.75rem; flex-wrap:wrap;">
          ${STATUSES.map(
            (s) =>
              `<button onclick="setOrderStatus('${o.id}', '${s}')" style="background:${o.status === s ? "#2563eb" : "#1e293b"}; color:white; border:1px solid #334155; padding:4px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;">${s}</button>`,
          ).join("")}
          <button onclick="deleteOrder('${o.id}')" style="background:#ef4444; color:white; border:none; padding:4px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;">🗑️</button>
        </div>
      </div>`;
    })
    .join("");
}

async function saveAdminNote(docId) {
  if (!isAdmin()) return;
  const inputEl = $(`note_${docId}`);
  if (inputEl && window.db) {
    const { doc, updateDoc } = window.firebaseCollections;
    await updateDoc(doc(window.db, "orders", docId), {
      adminNote: inputEl.value.trim(),
    });
    showToast("Catatan berhasil disimpan ke server!");
  }
}

async function setOrderStatus(docId, status) {
  if (!isAdmin() || !window.db) return;
  const { doc, updateDoc } = window.firebaseCollections;
  await updateDoc(doc(window.db, "orders", docId), { status });
  showToast(`Status diperbarui ke ${status}`);
}

async function deleteOrder(docId) {
  if (!isAdmin() || !window.db) return;
  if (!confirm("Hapus pesanan ini dari database?")) return;
  const { doc, deleteDoc } = window.firebaseCollections;
  await deleteDoc(doc(window.db, "orders", docId));
  showToast("Pesanan dihapus.");
}

async function clearAllOrders() {
  if (!isAdmin() || !window.db) return;
  if (confirm("⚠️ Yakin ingin menghapus SEMUA riwayat pesanan dari server?")) {
    const { doc, deleteDoc } = window.firebaseCollections;
    for (let o of ordersData) {
      await deleteDoc(doc(window.db, "orders", o.id));
    }
    showToast("Semua riwayat dibersihkan.");
  }
}

// ==========================================
// INISIALISASI
// ==========================================
window.addEventListener("load", () => {
  try {
    const savedUser = localStorage.getItem("fawzyy_current_user");
    if (savedUser) currentUser = JSON.parse(savedUser);
  } catch (e) {
    currentUser = null;
  }

  renderProducts();
  renderCart();
  renderReviews();
  updateAuthUI();
  showSlide(0);
  if ($("year")) $("year").textContent = new Date().getFullYear();

  const btnHeader = $("googleLoginBtn");
  if (btnHeader && !currentUser) {
    btnHeader.onclick = openLoginModal;
  }
});

if ($("productGrid")) {
  $("productGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b) addToCart(Number(b.dataset.add));
  });
}

if ($("cartItems")) {
  $("cartItems").addEventListener("click", (e) => {
    const b = e.target.closest("[data-remove]");
    if (b) removeFromCart(Number(b.dataset.remove));
  });
}

if ($("categoryTabs")) {
  $("categoryTabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-category]");
    if (!b) return;
    activeCategory = b.dataset.category;
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.toggle("active", t === b));
    renderProducts();
  });
}

if ($("adminFilter"))
  $("adminFilter").addEventListener("change", renderAdminOrders);
if ($("searchInput"))
  $("searchInput").addEventListener("input", renderProducts);
if ($("sortSelect")) $("sortSelect").addEventListener("change", renderProducts);
if ($("openCart")) $("openCart").addEventListener("click", openCart);
if ($("closeCart")) $("closeCart").addEventListener("click", closeCart);
if ($("overlay")) $("overlay").addEventListener("click", closeCart);

if ($("menuToggle")) {
  $("menuToggle").addEventListener("click", () =>
    $("navLinks").classList.toggle("open"),
  );
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if ($("navLinks")) $("navLinks").classList.remove("open");
  });
});
