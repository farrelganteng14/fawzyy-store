require("dotenv").config();

const express = require("express");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const DATA_DIR = path.join(__dirname, "data");
const ORDER_FILE = path.join(DATA_DIR, "orders.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

if (!fs.existsSync(ORDER_FILE)) {
  fs.writeFileSync(ORDER_FILE, "[]");
}

function getOrders() {
  return JSON.parse(fs.readFileSync(ORDER_FILE, "utf8"));
}

function saveOrders(orders) {
  fs.writeFileSync(ORDER_FILE, JSON.stringify(orders, null, 2));
}

function adminAuth(req, res, next) {
  const password = req.headers["x-admin-password"];

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      message: "Akses admin ditolak.",
    });
  }

  next();
}

// Buat pesanan
app.post("/api/orders", (req, res) => {
  const { username, items, total } = req.body;

  if (
    typeof username !== "string" ||
    !username.trim() ||
    !Array.isArray(items) ||
    items.length === 0 ||
    !Number.isInteger(total) ||
    total <= 0
  ) {
    return res.status(400).json({
      message: "Data pesanan tidak valid.",
    });
  }

  // Catatan:
  // Pada tahap integrasi frontend, total dan harga
  // harus dihitung ulang dari katalog server,
  // bukan dipercaya dari browser.

  const orders = getOrders();

  const order = {
    id: "FWZ-" + crypto.randomBytes(4).toString("hex").toUpperCase(),
    username: username.trim(),
    items,
    total,
    status: "pending_payment",
    createdAt: new Date().toISOString(),
    paidAt: null,
    completedAt: null,
  };

  orders.push(order);
  saveOrders(orders);

  res.json({
    message: "Pesanan berhasil dibuat.",
    order,
  });
});

// Cek status pesanan
app.get("/api/orders/:id", (req, res) => {
  const orders = getOrders();

  const order = orders.find((item) => item.id === req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Pesanan tidak ditemukan.",
    });
  }

  res.json({
    id: order.id,
    username: order.username,
    total: order.total,
    status: order.status,
    createdAt: order.createdAt,
    paidAt: order.paidAt,
    completedAt: order.completedAt,
    serverLink:
      order.status === "paid" ||
      order.status === "processing" ||
      order.status === "completed"
        ? process.env.PRIVATE_SERVER_LINK || ""
        : "",
    serverPassword:
      order.status === "paid" ||
      order.status === "processing" ||
      order.status === "completed"
        ? process.env.PRIVATE_SERVER_PASSWORD || ""
        : "",
  });
});

// Admin: lihat semua pesanan
app.get("/api/admin/orders", adminAuth, (req, res) => {
  res.json(getOrders());
});

// Admin: konfirmasi pembayaran
app.post("/api/admin/orders/:id/confirm", adminAuth, (req, res) => {
  const orders = getOrders();

  const order = orders.find((item) => item.id === req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Pesanan tidak ditemukan.",
    });
  }

  if (order.status !== "pending_payment") {
    return res.status(400).json({
      message: "Pesanan tidak sedang menunggu pembayaran.",
    });
  }

  // Admin wajib memeriksa transaksi DANA terlebih dahulu.
  order.status = "paid";
  order.paidAt = new Date().toISOString();

  saveOrders(orders);

  res.json({
    message: "Pembayaran berhasil dikonfirmasi.",
    order,
  });
});

// Admin: mulai proses pengiriman
app.post("/api/admin/orders/:id/process", adminAuth, (req, res) => {
  const orders = getOrders();

  const order = orders.find((item) => item.id === req.params.id);

  if (!order || order.status !== "paid") {
    return res.status(400).json({
      message: "Pesanan belum siap diproses.",
    });
  }

  order.status = "processing";
  saveOrders(orders);

  res.json({
    message: "Pesanan sedang diproses.",
  });
});

// Admin: selesaikan pesanan
app.post("/api/admin/orders/:id/complete", adminAuth, (req, res) => {
  const orders = getOrders();

  const order = orders.find((item) => item.id === req.params.id);

  if (!order || order.status !== "processing") {
    return res.status(400).json({
      message: "Pesanan belum dalam proses.",
    });
  }

  order.status = "completed";
  order.completedAt = new Date().toISOString();

  saveOrders(orders);

  res.json({
    message: "Pesanan selesai.",
  });
});

app.listen(PORT, () => {
  console.log(`Fawzyy Store berjalan di http://localhost:${PORT}`);
});
