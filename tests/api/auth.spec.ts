import { test, expect } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

test.describe("API - Auth", () => {
  test.beforeEach(async ({ request }) => {
    const res = await request.post(`${BASE_URL}/test/reset`);
    expect(res.ok()).toBeTruthy();
  });

  test("POST /auth/register -> 201", async ({ request }) => {
    const res = await request.post(`${BASE_URL}/auth/register`, {
      data: { email: "test@email.com", password: "123456" },
    });

    expect(res.status()).toBe(201);
  });

  test("POST /auth/register duplicate -> 400", async ({ request }) => {
    await request.post(`${BASE_URL}/auth/register`, {
      data: { email: "dup@email.com", password: "123456" },
    });

    const res = await request.post(`${BASE_URL}/auth/register`, {
      data: { email: "dup@email.com", password: "123456" },
    });

    expect(res.status()).toBe(400);
  });
});