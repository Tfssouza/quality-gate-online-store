import { test, expect } from "@playwright/test";
import { API_URL } from "../utils/env";

test("API health retorna ok", async ({ request }) => {
  const res = await request.get(`${API_URL}/health`);
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.status).toBe("ok");
});