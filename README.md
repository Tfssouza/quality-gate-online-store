# 🛒 Quality Gate – Online Store

A professional QA Automation project demonstrating a **real-world Quality Gate implementation** using Playwright, API testing, and CI/CD with GitHub Actions.

---

## 📌 Project Overview

This project simulates an online store backend and validates its stability through automated tests executed in a CI pipeline before release approval.

The goal is to demonstrate how a QA engineer can implement a **Quality Gate** that prevents unstable builds from being deployed.

---

## 🚦 Quality Gate Concept

A Quality Gate ensures that software meets predefined quality standards before merging or releasing.

In this project, the pipeline automatically blocks the build if:

- API endpoints fail
- Contract validation breaks
- Tests fail in any browser
- The application becomes unavailable

---

## 🛠 Tech Stack

- **Playwright (TypeScript)** — UI & API automation
- **Node.js + Express** — Mock backend API
- **GitHub Actions** — CI/CD pipeline
- **TypeScript** — Strong typing & scalable structure

---

## 🧪 Test Coverage

### ✅ API Testing
- `/health` endpoint validation
- `/products` contract validation using JSON Schema

### ✅ End-to-End Testing
- Smoke test executed across multiple browsers

### ✅ Cross-Browser Execution
Tests run automatically on:

- Chromium
- Firefox
- WebKit

---

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. Installs dependencies
2. Starts the mock API server
3. Executes Playwright tests
4. Validates Quality Gate rules
5. Uploads test reports as artifacts

If any step fails → ❌ pipeline fails.

---

## ▶️ Running Locally

Install dependencies:

```bash
npm install
