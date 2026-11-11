// ==========================================
// PENGATURAN TOKO & ADMIN & MULTI-BAHASA
// ==========================================
const WHATSAPP_NUMBER = "6282120455523";
const ADMIN_EMAIL = "fawzybangkit@gmail.com";
const GOOGLE_CLIENT_ID =
  "571088132754-78seinpkcbv05l1ndtgml26e9u4657la.apps.googleusercontent.com";

const QUEUE_LIMIT_SECONDS = 600; // 10 menit
const STATUSES = ["PENDING", "DIPROSES", "SIAP DIAMBIL", "SELESAI"];
const ACTIVE_STATUSES = ["PENDING", "DIPROSES"];

// Kamus Multi-Bahasa (ID & EN)
let currentLang = localStorage.getItem("fawzyy_lang") || "id";

const translations = {
  id: {
    pageTitle: "FAWZYY STORE - Top Up Game & Digital Goods",
    navHome: "Beranda",
    navCheck: "Cek Pesanan (FS)",
    navOrder: "Cara Order",
    navReviews: "Ulasan & Rating",
    btnLogin: "Masuk",
    btnRegister: "Daftar",
    myOrders: "📦 Pesanan Saya",
    btnLogout: "Logout",
    cartTitle: "Keranjang",
    heroEyebrow: "TOKO TOP UP & GAMEPASS TERPERCAYA",
    heroTitle: "Fawzyy Store <br /><span>Gamepass & Robux</span>",
    heroDesc:
      "Platform top up game dan gamepass Drag Drive Simulator termurah, aman, legal 100%, dan buka 24 jam dengan sistem antrean transparan.",
    heroBtnExplore: "Jelajahi Produk ↗",
    stat1Title: "FAST",
    stat1Desc: "Respon order",
    stat2Title: "AMAN",
    stat2Desc: "Sistem Antrean",
    stat3Desc: "QRIS & E-Wallet",
    featuredGame: "FEATURED GAME",
    nowAvailable: "NOW AVAILABLE",
    chipOpen: "⚡ OPEN ORDER!",
    trust1: "✦ Pilih produk dengan mudah",
    trust2: "✦ Banyak Pilihan Pembayaran & QRIS",
    trust3: "✦ Antrean pesanan transparan dengan ID FS",
    catalogEyebrow: "KATALOG TOKO",
    catalogTitle: "Temukan item <span>favoritmu.</span>",
    catalogDesc: "Pilih Gamepass atau Cash sesuai kebutuhanmu.",
    tabAll: "Semua",
    tabGamepass: "Gamepass",
    tabCash: "Cash DDS",
    tabRobux: "Robux",
    searchPlaceholder: "Cari produk...",
    sortPopular: "Paling populer",
    sortLow: "Harga termurah",
    sortHigh: "Harga termahal",
    sortAz: "Nama A–Z",
    emptyProduct: "Produk tidak ditemukan.",
    orderEyebrow: "GAMPANG BANGET",
    orderTitle: "Cara order di<br /><span>Fawzyy Store.</span>",
    orderDesc: "Belanja tanpa ribet dengan sistem manual terpercaya.",
    step1Title: "Pilih produk & Masuk Akun",
    step1Desc: "Login akun Google, lalu masukkan item pilihan ke keranjang.",
    step2Title: "Pilih Pembayaran & Upload Bukti",
    step2Desc:
      "Pilih pembayaran (QRIS, DANA, GoPay, BCA, dll.), lalu upload screenshot buktinya.",
    step3Title: "Cek Pesanan Menggunakan ID FS",
    step3Desc:
      "Pantau pesananmu menggunakan nomor unik berformat FS (Tahun/Bulan) yang otomatis dibuatkan sistem.",
    reviewsEyebrow: "ULASAN PEMBELI",
    reviewsTitle: "Rating & Pengalaman <span>Gamers ⭐</span>",
    reviewsDesc: "Wajib login akun terlebih dahulu sebelum menuliskan ulasan.",
    writeReviewTitle: "Tulis Ulasan Kamu",
    reviewNamePlaceholder: "Nama Kamu (Harus Login Dulu)",
    reviewTextPlaceholder: "Tuliskan pengalaman belanja kamu...",
    btnSendReview: "Kirim Ulasan ↗",
    footerDesc:
      "Fawzyystore adalah platform top up game terpercaya di Indonesia dengan harga murah, proses aman, legal 100%, dan buka 24 jam. Tersedia berbagai kebutuhan gaming termasuk Gamepass Roblox via sistem antrean cepat.",
    securePayment: "Pembayaran Aman",
    helpTitle: "Butuh Bantuan?",
    chatWa: "Chat WhatsApp",
    onlineSupport: "Respon Cepat 24/7",
    operasional: "Jam Operasional: 08:00 - 23:00 WIB",
    menuTitle: "Menu",
    menuCheck: "Cek Pesanan",
    menuCatalog: "Katalog Produk",
    menuReviews: "Ulasan & Rating",
    secureTitle: "Jaminan Transaksi",
    guaranteeDesc:
      "Garansi uang kembali 100% apabila layanan gagal terkirim karena kesalahan sistem.",
    legalSafe: "100% Legal & Aman",
    socialTitle: "Sosial Media",
    terms: "Syarat & Ketentuan",
    privacy: "Kebijakan Privasi",
    cartHeading: "Keranjang Belanja",
    estTotal: "Estimasi total",
    robloxLabel: "Username Roblox",
    checkoutBtn: "Lanjut ke Pembayaran ↗",
    secureNote: "Harus login akun terlebih dahulu. Aman & Terpercaya.",
    alertTitle: "Perhatian",
    alertBtnOk: "OK",
    alertRegTitle: "Informasi Pendaftaran",
    alertRegMsg:
      "Fitur pendaftaran manual sedang disiapkan dengan verifikasi email. Silakan gunakan Google untuk login instan!",
    checkOrderTitle: "Cek Pesanan",
    checkOrderDesc:
      "Masukkan nomor pesanan berformat <code style='color: var(--accent-red);'>FS2611XXXXX</code> untuk melihat detail pembelian Anda.",
    checkOrderPlaceholder: "Contoh: FS26114892",
    checkOrderBtn: "Cek Pesanan ↗",
    paymentModalTitle: "Metode Pembayaran",
    selectPaymentLabel: "Pilih Metode Pembayaran:",
    totalPayText: "Total Bayar:",
    paymentInstructionsDesc:
      "Lakukan pembayaran sesuai metode di atas, lalu upload bukti transfer screenshot di bawah.",
    uploadProofLabel: "Upload Bukti Screenshot Pembayaran:",
    submitProofBtn: "Kirim Bukti & Masuk Antrean ↗",
    cancelBtn: "Batal / Tutup",
    queueTitle: "Pesanan Masuk Antrean",
    queueTimerLabel: "Sisa Waktu Antrean / Posisi Antrean:",
    adminNoteLabel: "📌 Catatan / Link Private Server (PS) Admin:",
    noAdminNote: "Belum ada catatan dari admin.",
    waHelpBtn: "💬 Hubungi Admin via WhatsApp",
    closeQueueBtn: "Tutup & Pantau Nanti",
    slidePrev: "Sebelumnya",
    slideNext: "Selanjutnya",
    dontShowAgain: "Jangan tampilkan panduan ini lagi saat checkout",
    slideContinue: "Lanjutkan",
    myOrdersModalTitle: "📦 Riwayat Pesanan Saya",
    welcomeBack: "WELCOME <br />BACK,",
    storeSubtitle: "FAWZYYSTORE - Top Up Game Murah, Aman & Terpercaya 2026",
    tabLogin: "Masuk",
    tabRegister: "Daftar",
    welcomeTitle: "Selamat Datang",
    welcomeDesc: "Silakan masuk untuk melanjutkan transaksi.",
    googleLoginBtnText: "Lanjutkan dengan Google",
    registerTitle: "Buat Akun",
    registerDesc: "Silakan lengkapi data diri Anda untuk bergabung.",
    regName: "Nama Lengkap",
    regEmail: "Alamat Email (Simulasi Verifikasi)",
    regPhone: "Nomor WhatsApp",
    regPass: "Kata Sandi",
    regSubmitBtn: "Daftar Sekarang ↗",
    orLoginWith: "ATAU MASUK DENGAN",
    termsNotice: "Dengan masuk kamu setuju",
    termsNoticeLink: "Syarat dan Ketentuan",
  },
  en: {
    pageTitle: "FAWZYY STORE - Game Top Up & Digital Goods",
    navHome: "Home",
    navCheck: "Check Order (FS)",
    navOrder: "How to Order",
    navReviews: "Reviews & Rating",
    btnLogin: "Login",
    btnRegister: "Register",
    myOrders: "📦 My Orders",
    btnLogout: "Logout",
    cartTitle: "Cart",
    heroEyebrow: "TRUSTED TOP UP & GAMEPASS STORE",
    heroTitle: "Fawzyy Store <br /><span>Gamepass & Robux</span>",
    heroDesc:
      "The cheapest, safest, 100% legal Drag Drive Simulator top up and gamepass platform, open 24/7 with a transparent queue system.",
    heroBtnExplore: "Explore Products ↗",
    stat1Title: "FAST",
    stat1Desc: "Order response",
    stat2Title: "SAFE",
    stat2Desc: "Queue System",
    stat3Desc: "QRIS & E-Wallet",
    featuredGame: "FEATURED GAME",
    nowAvailable: "NOW AVAILABLE",
    chipOpen: "⚡ OPEN ORDER!",
    trust1: "✦ Choose products easily",
    trust2: "✦ Many Payment Options & QRIS",
    trust3: "✦ Transparent queue with FS ID",
    catalogEyebrow: "STORE CATALOG",
    catalogTitle: "Find your favorite <span>items.</span>",
    catalogDesc: "Choose Gamepass or Cash according to your needs.",
    tabAll: "All",
    tabGamepass: "Gamepass",
    tabCash: "Cash DDS",
    tabRobux: "Robux",
    searchPlaceholder: "Search products...",
    sortPopular: "Most popular",
    sortLow: "Lowest price",
    sortHigh: "Highest price",
    sortAz: "Name A–Z",
    emptyProduct: "Product not found.",
    orderEyebrow: "SUPER EASY",
    orderTitle: "How to order at<br /><span>Fawzyy Store.</span>",
    orderDesc: "Shop without hassle using a trusted manual system.",
    step1Title: "Select products & Login",
    step1Desc: "Log in with your Google account, then add items to your cart.",
    step2Title: "Select Payment & Upload Proof",
    step2Desc:
      "Choose payment (QRIS, DANA, GoPay, BCA, etc.), then upload your transfer screenshot.",
    step3Title: "Check Order Using FS ID",
    step3Desc:
      "Track your order using the unique FS format containing year/month generated by the system.",
    reviewsEyebrow: "CUSTOMER REVIEWS",
    reviewsTitle: "Ratings & Gamer <span>Experiences ⭐</span>",
    reviewsDesc: "You must log in to your account before writing a review.",
    writeReviewTitle: "Write Your Review",
    reviewNamePlaceholder: "Your Name (Must Login First)",
    reviewTextPlaceholder: "Write about your shopping experience...",
    btnSendReview: "Submit Review ↗",
    footerDesc:
      "Fawzyystore is a trusted game top up platform in Indonesia with low prices, safe processes, 100% legal, and open 24 hours. Various gaming needs available including Roblox Gamepass via fast queue system.",
    securePayment: "Secure Payment",
    helpTitle: "Need Help?",
    chatWa: "WhatsApp Chat",
    onlineSupport: "Fast Response 24/7",
    operasional: "Operating Hours: 08:00 - 23:00 WIB",
    menuTitle: "Menu",
    menuCheck: "Check Order",
    menuCatalog: "Product Catalog",
    menuReviews: "Reviews & Rating",
    secureTitle: "Transaction Guarantee",
    guaranteeDesc:
      "100% money back guarantee if service fails to deliver due to system error.",
    legalSafe: "100% Legal & Safe",
    socialTitle: "Social Media",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    cartHeading: "Shopping Cart",
    estTotal: "Estimated total",
    robloxLabel: "Roblox Username",
    checkoutBtn: "Proceed to Payment ↗",
    secureNote: "Must login first. Safe & Trusted.",
    alertTitle: "Attention",
    alertBtnOk: "OK",
    alertRegTitle: "Registration Notice",
    alertRegMsg:
      "Manual registration feature is being prepared with email verification. Please use Google for instant login!",
    checkOrderTitle: "Check Order",
    checkOrderDesc:
      "Enter order number in <code style='color: var(--accent-red);'>FS2611XXXXX</code> format to view purchase details.",
    checkOrderPlaceholder: "Example: FS26114892",
    checkOrderBtn: "Check Order ↗",
    paymentModalTitle: "Payment Method",
    selectPaymentLabel: "Select Payment Method:",
    totalPayText: "Total Pay:",
    paymentInstructionsDesc:
      "Make payment according to the method above, then upload screenshot proof below.",
    uploadProofLabel: "Upload Payment Screenshot Proof:",
    submitProofBtn: "Send Proof & Join Queue ↗",
    cancelBtn: "Cancel / Close",
    queueTitle: "Order in Queue",
    queueTimerLabel: "Queue Time Remaining / Position:",
    adminNoteLabel: "📌 Admin Notes / Private Server (PS) Link:",
    noAdminNote: "No notes from admin yet.",
    waHelpBtn: "💬 Contact Admin via WhatsApp",
    closeQueueBtn: "Close & Monitor Later",
    slidePrev: "Previous",
    slideNext: "Next",
    dontShowAgain: "Don't show this guide again during checkout",
    slideContinue: "Continue",
    myOrdersModalTitle: "📦 My Order History",
    welcomeBack: "WELCOME <br />BACK,",
    storeSubtitle: "FAWZYYSTORE - Cheap, Safe & Trusted Game Top Up 2026",
    tabLogin: "Login",
    tabRegister: "Register",
    welcomeTitle: "Welcome",
    welcomeDesc: "Please login to continue transactions.",
    googleLoginBtnText: "Continue with Google",
    registerTitle: "Create Account",
    registerDesc: "Please fill in your details to join.",
    regName: "Full Name",
    regEmail: "Email Address (Verification Sim)",
    regPhone: "WhatsApp Number",
    regPass: "Password",
    regSubmitBtn: "Register Now ↗",
    orLoginWith: "OR LOGIN WITH",
    termsNotice: "By logging in you agree to",
    termsNoticeLink: "Terms & Conditions",
  },
};

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("fawzyy_lang", lang);

  const flagImg = $("langFlagImg");
  const textCode = $("langTextCode");
  if (flagImg && textCode) {
    if (lang === "id") {
      flagImg.src = "images/ind.jpg"; // <-- Tambahkan folder images/
      textCode.textContent = "ID";
    } else {
      flagImg.src = "images/eng.jpg"; // <-- Tambahkan folder images/
      textCode.textContent = "EN";
    }
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const searchInput = $("searchInvoiceInput");
  if (searchInput && translations[lang]["checkOrderPlaceholder"]) {
    searchInput.placeholder = translations[lang]["checkOrderPlaceholder"];
  }
}
function toggleLanguage() {
  const nextLang = currentLang === "id" ? "en" : "id";
  applyLanguage(nextLang);
}

function showCustomAlert(title, message) {
  $("customAlertTitle").textContent = title;
  $("customAlertMessage").textContent = message;
  openModal("customAlertModal");
}
function closeCustomAlert() {
  closeModal("customAlertModal");
}

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
    price: 10000,
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
    price: 5500,
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
    price: 11000,
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
    price: 7000,
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
    price: 7000,
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
    price: 3000,
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
    price: 5500,
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
    price: 3000,
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
    price: 13500,
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
    price: 8000,
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
    price: 45000,
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
    price: 800,
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
    price: 1500,
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
    price: 3000,
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
    price: 5500,
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
    price: 9000,
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
    price: 36000,
    desc: "Uang dalam game",
    icon: "💎",
    image: "uang.jpg",
    badge: "",
    popular: 17,
  },
  {
    id: 18,
    name: "100 Robux",
    category: "robux",
    price: 15500,
    desc: "Robux legal via Gamepass / T-Shirt",
    icon: "R$",
    image: "robux.jpg",
    badge: "PROMO",
    popular: 18,
  },
  {
    id: 19,
    name: "500 Robux",
    category: "robux",
    price: 77500,
    desc: "Robux legal via Username Roblox",
    icon: "R$",
    image: "500.jpg",
    badge: "PROMO",
    popular: 19,
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

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  toast.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 15px; cursor: pointer;" onclick="openCart()">
      <div>
        <strong>🛒 ${message}</strong>
        <div style="font-size: 0.75rem; color: var(--accent-red); margin-top: 2px;">
          Total di keranjang: ${totalItems} item (${rupiah(totalPrice)}) — <strong>Klik untuk lihat</strong>
        </div>
      </div>
      <span style="font-size: 1.2rem;">➔</span>
    </div>
  `;

  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

function openModal(id) {
  const el = $(id);
  if (el) el.style.display = "flex";
}
function closeModal(id) {
  const el = $(id);
  if (el) el.style.display = "none";
}

function openAuthModal(mode = "login") {
  openModal("authModal");
  switchAuthTab(mode);
}
function closeAuthModal() {
  closeModal("authModal");
}

function switchAuthTab(tab) {
  const loginTab = $("tabLoginBtn");
  const regTab = $("tabRegisterBtn");
  const loginBox = $("formLoginContainer");
  const regBox = $("formRegisterContainer");

  if (tab === "login") {
    loginTab.style.color = "white";
    loginTab.style.borderBottom = "2px solid var(--accent-red)";
    regTab.style.color = "var(--text-muted)";
    regTab.style.borderBottom = "none";
    loginBox.style.display = "block";
    regBox.style.display = "none";
  } else {
    regTab.style.color = "white";
    regTab.style.borderBottom = "2px solid var(--accent-red)";
    loginTab.style.color = "var(--text-muted)";
    loginTab.style.borderBottom = "none";
    regBox.style.display = "block";
    loginBox.style.display = "none";
  }
}

function openSearchModal() {
  openModal("searchInvoiceModal");
}

// ==========================================
// CEK PESANAN MENGGUNAKAN ID FS (TANPA SPASI)
// ==========================================
function searchInvoiceAction() {
  const code = $("searchInvoiceInput").value.trim().toUpperCase();
  const resContainer = $("searchInvoiceResult");
  if (!code) {
    resContainer.innerHTML = `<p style="color:#ef4444; font-size:0.8rem;">Masukkan nomor pesanan FS terlebih dahulu.</p>`;
    return;
  }

  const found = ordersData.find((o) => o.orderNo.toUpperCase() === code);
  if (!found) {
    resContainer.innerHTML = `<p style="color:#ef4444; font-size:0.8rem; text-align:center; padding:10px;">Nomor order <strong>${esc(code)}</strong> tidak ditemukan.</p>`;
    return;
  }

  let completionNote = "";
  if (found.status === "SELESAI") {
    completionNote = `
      <div style="margin-top:10px; background:rgba(34,197,94,0.1); border:1px solid #22c55e; padding:10px; border-radius:6px; color:#22c55e; font-size:0.75rem; text-align:center;">
        <strong>🎉 Terima kasih telah berbelanja di Fawzyy Store!</strong><br>
        Jangan lupa join Saluran WhatsApp kami & berikan rating/ulasan terbaik di web ini ya! ⭐
      </div>
    `;
  }

  resContainer.innerHTML = `
    <div style="background:var(--bg-main); padding:12px; border-radius:8px; border:1px solid var(--border-color); font-size:0.8rem;">
      <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
        <strong style="color:var(--accent-red);">${esc(found.orderNo)}</strong>
        <span style="background:rgba(239,68,68,0.2); color:var(--accent-red); padding:2px 6px; border-radius:4px; font-weight:bold;">${esc(found.status)}</span>
      </div>
      <p style="margin:2px 0;">Roblox: <code style="color:var(--accent-red);">${esc(found.roblox)}</code></p>
      <p style="margin:2px 0;">Total: <strong>${rupiah(found.total)}</strong></p>
      ${found.adminNote ? `<div style="margin-top:6px; color:#38bdf8;"><strong>Catatan Admin:</strong> ${esc(found.adminNote)}</div>` : ""}
      ${completionNote}
      <button onclick="openQueueModal('${esc(found.orderNo)}'); closeModal('searchInvoiceModal');" style="margin-top:8px; width:100%; background:var(--accent-red); color:white; border:none; padding:6px; border-radius:4px; cursor:pointer; font-weight:bold;">Pantau Antrean Live ↗</button>
    </div>
  `;
}

// ==========================================
// FIRESTORE SYNC
// ==========================================
function initRealtimeOrders() {
  if (!window.db) return;
  const { collection, onSnapshot } = window.firebaseCollections;

  onSnapshot(collection(window.db, "orders"), (snapshot) => {
    ordersData = [];
    snapshot.forEach((docSnap) => {
      ordersData.push({ id: docSnap.id, ...docSnap.data() });
    });
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
                  closeAuthModal();
                  updateAuthUI();
                  showToast(`Berhasil masuk sebagai ${currentUser.name}`);
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
  showToast("Berhasil keluar.");
}

function isAdmin() {
  return !!currentUser && currentUser.email === ADMIN_EMAIL.toLowerCase();
}

function updateAuthUI() {
  const loginBtn = $("googleLoginBtn");
  const regBtn = $("registerBtn");
  const userProfile = $("userProfile");
  const userNameEl = $("userName");
  const reviewNameEl = $("reviewName");
  const adminMenuBtn = $("adminMenuBtn");
  const myOrdersBtn = $("myOrdersBtn");

  if (currentUser && currentUser.name) {
    if (loginBtn) loginBtn.style.setProperty("display", "none", "important");
    if (regBtn) regBtn.style.setProperty("display", "none", "important");
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
    if (regBtn)
      regBtn.style.setProperty("display", "inline-block", "important");
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
      .map((o) => {
        let finishBox = "";
        if (o.status === "SELESAI") {
          finishBox = `
              <div style="margin-top:8px; background:rgba(34,197,94,0.1); border:1px solid #22c55e; padding:8px; border-radius:6px; color:#22c55e; font-size:0.75rem; text-align:center;">
                <strong>🎉 Terima kasih telah berbelanja!</strong><br>Jangan lupa join Saluran WA & beri rating web ini ya! ⭐
              </div>
            `;
        }
        return `
          <div style="background:var(--bg-main); padding:1rem; border-radius:8px; border:1px solid var(--border-color); margin-bottom: 0.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
              <strong style="color:var(--accent-red);">${esc(o.orderNo)}</strong>
              <span style="background:rgba(239,68,68,0.2); color:var(--accent-red); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">${esc(o.status)}</span>
            </div>
            <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Roblox: <code style="color:var(--accent-red);">${esc(o.roblox)}</code></p>
            <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Total: <strong>${rupiah(o.total)}</strong></p>
            
            ${
              o.adminNote
                ? `<div style="margin-top: 8px; background: rgba(239, 68, 68, 0.1); border: 1px dashed var(--accent-red); padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; color: var(--accent-red);">
                     <strong>💬 Catatan dari Admin:</strong><br>${esc(o.adminNote)}
                   </div>`
                : ``
            }

            ${finishBox}

            <button onclick="openQueueModal('${esc(o.orderNo)}'); closeModal('myOrdersModal');" style="margin-top:8px; background:var(--accent-red); color:white; border:none; padding:6px 10px; border-radius:4px; font-size:0.75rem; cursor:pointer; width:100%; font-weight:bold;">
              🔍 Lihat Live Antrean / Waktu
            </button>
          </div>
        `;
      })
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
    <div style="background:var(--bg-card); padding:1.25rem; border-radius:8px; border:1px solid var(--border-color);">
      <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
        <strong>${esc(rev.name)}</strong>
        <span>${"⭐".repeat(rev.rating)}</span>
      </div>
      <p style="color:var(--text-muted);">${esc(rev.text)}</p>
    </div>`,
    )
    .join("");
}

function submitReview() {
  if (!currentUser) {
    showCustomAlert(
      "Perhatian",
      "Anda belum login! Silakan login akun Google terlebih dahulu untuk menulis ulasan.",
    );
    openAuthModal("login");
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
        <span class="product-category">${p.category === "cash" ? "CASH DDS" : p.category === "robux" ? "ROBUX" : "GAMEPASS"}</span>
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

function playNotificationSound(type = "success") {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === "success") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
      osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.3,
      );
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } else if (type === "delete") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      osc.frequency.setValueAtTime(150, audioCtx.currentTime + 0.15);
      gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioCtx.currentTime + 0.2,
      );
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    }
  } catch (e) {
    console.log("Audio diblokir browser.");
  }
}

function addToCart(id) {
  const product = products.find((i) => i.id === id);
  const existing = cart.find((i) => i.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  playNotificationSound("success");
  renderCart();
  showToast(`${product.name} ditambahkan ke keranjang`);
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  playNotificationSound("delete");
  renderCart();
}

function updateCartQty(id, change) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
    showToast(`${item.name} dihapus dari keranjang`);
  } else {
    showToast(`Jumlah ${item.name} diubah menjadi ${item.qty}`);
  }
  renderCart();
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Apakah kamu yakin ingin mengosongkan semua isi keranjang?")) {
    cart = [];
    playNotificationSound("delete");
    renderCart();
    showToast("Keranjang berhasil dikosongkan");
  }
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

  let html = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding: 0 4px;">
      <span style="font-size: 0.8rem; color: var(--text-muted);">Daftar Produk (${totalItems})</span>
      <button onclick="clearCart()" style="background: none; border: none; color: #ef4444; font-size: 0.75rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 4px;">
        🗑️ Hapus Semua
      </button>
    </div>
  `;

  html += cart
    .map(
      (i) => `
    <div class="cart-row" style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px; background: var(--bg-main); padding: 10px; border-radius: 8px; border: 1px solid var(--border-color);">
      <div class="cart-thumb" style="width: 45px; height: 45px; flex-shrink: 0; overflow:hidden; display:flex; align-items:center; justify-content:center; border-radius: 6px; background: var(--bg-card);">
        ${i.image ? `<img src="${i.image}" alt="${i.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'" />` : i.icon}
      </div>
      <div class="cart-detail" style="flex: 1;">
        <strong style="font-size: 0.9rem; color: #f8fafc; display: block; margin-bottom: 2px;">${esc(i.name)}</strong>
        <small style="color: var(--accent-red); font-size: 0.8rem;">${rupiah(i.price)}</small>
        
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
          <button onclick="updateCartQty(${i.id}, -1)" style="background: var(--bg-card); color: white; border: 1px solid var(--border-color); width: 22px; height: 22px; border-radius: 4px; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center;">-</button>
          <span style="font-size: 0.85rem; font-weight: bold; color: #f8fafc; min-width: 15px; text-align: center;">${i.qty}</span>
          <button onclick="updateCartQty(${i.id}, 1)" style="background: var(--bg-card); color: white; border: 1px solid var(--border-color); width: 22px; height: 22px; border-radius: 4px; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center;">+</button>
        </div>
      </div>
      
      <button onclick="removeFromCart(${i.id})" style="background: none; border: none; color: #ef4444; font-size: 1.1rem; cursor: pointer; padding: 4px;" title="Hapus item">🗑️</button>
    </div>`,
    )
    .join("");

  $("cartItems").innerHTML = html;
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
// CHECKOUT & PEMBAYARAN KE FIRESTORE (FORMAT FS2611XXXX)
// ==========================================
function generateOrderNo() {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `FS${yy}${mm}${rand}`;
}

function startCheckout() {
  if (!currentUser) {
    showCustomAlert(
      "Perhatian",
      "Anda belum login! Harap login dengan Google terlebih dahulu sebelum checkout.",
    );
    openAuthModal("login");
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
  openPayment();
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
    return showCustomAlert(
      "Peringatan",
      "Harap upload screenshot bukti pembayaran terlebih dahulu!",
    );
  }
  const file = fileInput.files[0];
  if (!file.type.startsWith("image/")) {
    return showCustomAlert("Peringatan", "File harus berupa gambar!");
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

    const { collection, addDoc } = window.firebaseCollections;
    await addDoc(collection(window.db, "orders"), currentCheckoutData);

    const orderNo = currentCheckoutData.orderNo;
    closePaymentModal();
    cart = [];
    currentCheckoutData = null;
    if ($("robloxUsername")) $("robloxUsername").value = "";
    renderCart();
    openQueueModal(orderNo);
    showCustomAlert(
      "Berhasil!",
      `Pesanan berhasil dikirim!\n\n📌 Catat / Hafalkan Nomor Pesanan Anda:\n${orderNo}\n\nNomor ini diperlukan untuk mengecek status pesanan.`,
    );
  } catch (err) {
    console.error(err);
    showCustomAlert(
      "Kesalahan",
      "Gagal mengirim pesanan ke server. Coba lagi.",
    );
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

  const pos = queuePosition(order);
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

  const noteDisplay = $("modalAdminNoteDisplay");
  if (noteDisplay) {
    if (order.adminNote && order.adminNote.trim() !== "") {
      const formattedNote = esc(order.adminNote).replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" style="color: var(--accent-red); font-weight: bold; text-decoration: underline;">$1 ↗</a>',
      );
      noteDisplay.innerHTML = formattedNote;
    } else {
      noteDisplay.innerHTML =
        '<span style="color: var(--text-muted); font-style: italic;">Belum ada catatan dari admin.</span>';
    }
  }

  const notes = {
    PENDING:
      "Admin sedang memeriksa bukti pembayaranmu. <br><strong style='color:#f59e0b;'>💡 Harap ingat / catat nomor pesanan Anda!</strong>",
    DIPROSES: "Pembayaran terverifikasi! Admin sedang menyiapkan pesananmu.",
    "SIAP DIAMBIL":
      "🎉 Gamepass-mu SIAP DIAMBIL! Silakan cek link Private Server di atas.",
    SELESAI:
      "✅ Pesanan selesai!<br><strong style='color:#22c55e;'>Terima kasih telah berbelanja di Fawzyy Store! Jangan lupa join Saluran WhatsApp & beri rating/ulasan terbaikmu ya! ⭐</strong>",
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
      return `<div style="background:var(--bg-main); padding:0.6rem; border-radius:8px; text-align:center;"><strong>${n}</strong><br><small style="font-size:0.65rem; color:var(--text-muted);">${s}</small></div>`;
    }).join("");
  }

  const listContainer = $("adminOrderList");
  if (!listContainer) return;

  const list = ordersData
    .filter((o) => filter === "ALL" || o.status === filter)
    .sort((a, b) => a.createdAt - b.createdAt);

  if (!list.length) {
    listContainer.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding: 1.5rem;">Tidak ada pesanan.</p>`;
    return;
  }

  listContainer.innerHTML = list
    .map((o) => {
      const items = (o.items || [])
        .map((i) => `${esc(i.name)} (${i.qty}x)`)
        .join(", ");
      const pos = queuePosition(o);
      return `
      <div style="background:var(--bg-main); padding:1rem; border-radius:8px; margin-bottom:1rem; border:1px solid var(--border-color);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
          <strong style="color:var(--accent-red);">${esc(o.orderNo)} ${pos ? `<small style="color:var(--text-muted);">· antrean #${pos}</small>` : ""}</strong>
          <span style="background:rgba(239,68,68,0.2); color:var(--accent-red); padding:2px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">${esc(o.status)}</span>
        </div>
        <p style="margin:4px 0; font-size:0.85rem; color:#f8fafc;">Pembeli: <strong>${esc(o.buyer)}</strong> (${esc(o.email)})</p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Username Roblox: <code style="color:var(--accent-red); background:var(--bg-card); padding:2px 6px; border-radius:4px;">${esc(o.roblox)}</code></p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Metode Bayar: <span style="color:#f59e0b; font-weight:bold;">${esc(o.paymentMethod || "QRIS")}</span></p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Item: ${items || "-"}</p>
        <p style="margin:4px 0; font-size:0.85rem; color:#cbd5e1;">Total: <strong>${rupiah(o.total)}</strong></p>
        <p style="margin:4px 0; font-size:0.75rem; color:var(--text-muted);">Waktu: ${esc(o.date)}</p>

        <div style="margin-top: 0.75rem; background: var(--bg-card); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color);">
          <label style="font-size: 0.75rem; color: var(--accent-red); display: block; margin-bottom: 4px; font-weight: bold;">
            📝 Catatan / Link Gamepass / Info Server:
          </label>
          <div style="display: flex; gap: 6px;">
            <input type="text" id="note_${o.id}" value="${esc(o.adminNote || "")}" placeholder="Tulis link private server / catatan..." style="flex: 1; background: var(--bg-main); border: 1px solid var(--border-color); color: white; padding: 0.4rem 0.6rem; border-radius: 4px; font-size: 0.8rem;" />
            <button onclick="saveAdminNote('${o.id}')" style="background: var(--accent-red); color: white; border: none; padding: 0.4rem 0.75rem; border-radius: 4px; font-size: 0.75rem; font-weight: bold; cursor: pointer;">Simpan</button>
          </div>
        </div>

        ${o.proof ? `<div style="margin-top:0.75rem;"><span style="font-size:0.75rem; color:var(--text-muted); display:block;">Bukti Pembayaran:</span><a href="${o.proof}" target="_blank"><img src="${o.proof}" alt="Bukti Transfer" style="max-width:100px; border-radius:4px; border:1px solid var(--border-color);" /></a></div>` : `<p style="color:#ef4444; font-size:0.75rem; margin-top:0.5rem;">⚠️ Belum upload bukti.</p>`}

        <div style="display:flex; gap:5px; margin-top:0.75rem; flex-wrap:wrap;">
          ${STATUSES.map(
            (s) =>
              `<button onclick="setOrderStatus('${o.id}', '${s}')" style="background:${o.status === s ? "var(--accent-red)" : "var(--bg-main)"}; color:white; border:1px solid var(--border-color); padding:4px 8px; border-radius:4px; font-size:0.75rem; cursor:pointer;">${s}</button>`,
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

  if (status === "SELESAI") {
    showToast(
      "Status diubah ke SELESAI (Pesan terima kasih & ajakan rating aktif)",
    );
  } else {
    showToast(`Status diperbarui ke ${status}`);
  }
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

  applyLanguage(currentLang);
  renderProducts();
  renderCart();
  renderReviews();
  updateAuthUI();
  if ($("year")) $("year").textContent = new Date().getFullYear();
});

if ($("productGrid")) {
  $("productGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (b) addToCart(Number(b.dataset.add));
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
