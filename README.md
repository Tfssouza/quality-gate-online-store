# 🛒 Quality Gate – Online Store

A professional QA automation project demonstrating a real-world **Quality Gate implementation** using Playwright, API testing, and CI/CD with GitHub Actions.

---

## 📌 Project Overview

This project simulates an online store backend and validates its stability through automated tests before release.

It demonstrates:

- API Testing
- Contract validation
- Health check validation
- End-to-end testing
- Automated Quality Gate execution
- CI/CD integration

---

## 🛠 Tech Stack

- **Playwright (TypeScript)** – UI & API automation
- **Node.js + Express** – Mock backend API
- **GitHub Actions** – CI/CD pipeline
- **TypeScript** – Strong typing & structure

---

## 🧪 Test Coverage

### ✅ API Tests
- `/health` endpoint validation
- `/products` contract validation

### ✅ E2E Test
- Smoke test validation

---

## 🚦 Quality Gate

The project includes a custom Quality Gate script:

```bash
npm run gate
