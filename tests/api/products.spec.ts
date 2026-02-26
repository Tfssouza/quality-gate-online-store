import { test, expect } from "@playwright/test";
import { API_URL } from "../utils/env";

test("Products retorna estrutura correta", async ({ request }) => {
  const res = await request.get(`${API_URL}/products`);
  expect(res.status()).toBe(200);

  const products = await res.json();
  expect(Array.isArray(products)).toBeTruthy();
  expect(products.length).toBeGreaterThan(0);

  const product = products[0];
  expect(product).toHaveProperty("id");
  expect(product).toHaveProperty("name");
  expect(product).toHaveProperty("price");
});