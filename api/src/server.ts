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

app.listen(PORT, () => {
  console.log(`API on http://localhost:${PORT}`);
});