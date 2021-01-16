import axios from "axios";

class Product {
  constructor(API_URL) {
    this.BASE_URL = `${API_URL}/products`;
  }
  getAllProducts = () => {
    return axios
      .get(this.BASE_URL)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default Product;
