const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = []; // memória (pra demo)

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Register (email único)
app.post("/auth/register", (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const pwd = String(password);

  // validação simples (pode melhorar depois)
  if (!normalizedEmail.includes("@")) {
    return res.status(400).json({ error: "invalid email" });
  }
  if (pwd.length < 6) {
    return res.status(400).json({ error: "password must be at least 6 chars" });
  }

  const exists = users.find((u) => u.email === normalizedEmail);
  if (exists) {
    return res.status(400).json({ error: "Email already exists" });
  }

  users.push({ email: normalizedEmail, password: pwd });
  return res.status(201).json({ message: "User created" });
});

// Login (demo)
app.post("/auth/login", (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const pwd = String(password);

  const user = users.find((u) => u.email === normalizedEmail && u.password === pwd);
  if (!user) {
    return res.status(401).json({ error: "invalid credentials" });
  }

  // token fake só pra demo
  return res.status(200).json({ message: "Login ok", token: "fake-jwt-token" });
});

// List users (demo)
app.get("/users", (req, res) => {
  // não devolver senha
  const safe = users.map(({ email }) => ({ email }));
  res.json({ users: safe, count: safe.length });
});

// Reset (ajuda nos testes)
app.post("/test/reset", (req, res) => {
  users = [];
  res.json({ message: "reset ok" });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});