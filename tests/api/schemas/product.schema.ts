export const productSchema = {
  type: "object",
  required: ["id", "name", "price", "currency"],
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    price: { type: "number" },
    currency: { type: "string" }
  },
  additionalProperties: false
};