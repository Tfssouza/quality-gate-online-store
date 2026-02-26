import { test, expect } from "@playwright/test";
import { API_URL } from "../utils/env";

test("Login + Checkout flow", async ({ request }) => {
  const login = await request.post(`${API_URL}/login`, {
    data: { email: "test@mail.com", password: "123456" }
  });
  expect(login.status()).toBe(200);

  const { token } = await login.json();
  expect(token).toBeTruthy();

  const checkout = await request.post(`${API_URL}/checkout`, {
    headers: { Authorization: `Bearer ${token}` },
    data: { productId: 1, email: "test@mail.com" }
  });

  expect(checkout.status()).toBe(201);

  const body = await checkout.json();
  expect(body).toHaveProperty("orderId");
  expect(body.status).toBe("created");
});