import Product from "./product";

class ApiService {
  constructor() {
    this.API_URL = "http://localhost:3000";
    this.Product = new Product(this.API_URL);
  }
}
const apiService = new ApiService();

export { apiService };
