import { HttpClient } from "./HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("http://localhost:3000");
  }

  getProducts() {
    return this.get("products");
  }
}

export const productService = new ProductService();
