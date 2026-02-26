const express = require("express");

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT || 4000);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/products", (_req, res) => {
  res.json([{ id: 1, name: "Mystery Box", price: 150, currency: "EUR" }]);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "missing credentials" });
  return res.status(200).json({ token: "fake-jwt-token" });
});

app.post("/checkout", (req, res) => {
  const auth = req.headers.authorization || "";
  if (!auth.startsWith("Bearer ")) return res.status(401).json({ error: "unauthorized" });

  const { productId, email } = req.body || {};
  if (!productId || !email) return res.status(400).json({ error: "productId and email are required" });

  return res.status(201).json({ orderId: `ORD-${Date.now()}`, status: "created" });
});

app.listen(PORT, () => {
  console.log(`API on http://localhost:${PORT}`);
});