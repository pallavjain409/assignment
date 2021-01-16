import axios from "axios";

class Product {
  constructor(API_URL) {
    this.BASE_URL = `${API_URL}/products`;
  }
  getAllProducts = ({pageNo , limit}) => {
    let data;
    console.log("s",pageNo)
    return axios
      .get(this.BASE_URL, {
          params : {
              _page :pageNo || 1,
              _limit :  5
          }
      })
      .then((response) => {
        data = response.data;
        return this.getAllProductsDataLength();
      })
      .then((response) => {
        return {
          data,
          count: response,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getAllProductsDataLength = () => {
    return axios
      .get(this.BASE_URL)
      .then((response) => {
        return response.data.length;
      })
      .catch((err) => console.log(err));
  };
}

export default Product;
