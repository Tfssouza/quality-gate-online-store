import { test, expect } from "@playwright/test";
import Ajv from "ajv";
import { API_URL } from "../utils/env";
import { productSchema } from "./schemas/product.schema";

test("Products contract validation with JSON schema", async ({ request }) => {
  const res = await request.get(`${API_URL}/products`);
  expect(res.status()).toBe(200);

  const products = await res.json();

  const ajv = new Ajv();
  const validate = ajv.compile(productSchema);

  products.forEach((product: any) => {
    const valid = validate(product);
    expect(valid).toBeTruthy();
  });
});