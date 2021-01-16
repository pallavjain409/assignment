import axios from "axios";

class Product {
  constructor(API_URL) {
    this.BASE_URL = `${API_URL}/products`;
  }
  getAllProducts = ({pageNo , limit, search}) => {
    let data;
    const params  = {_page : pageNo || 1, _limit : limit}
    if(search.length){
      params["id"] = search
    }
    return axios
      .get(this.BASE_URL, {
          params 
      })
      .then((response) => {
        data = response.data;
        return this.getAllProductsDataLength(search);
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

  getAllProductsDataLength = (search) => {
    const params = {};
    if(search.length){
      params["id"] = search
    }
    return axios
      .get(this.BASE_URL, {params})
      .then((response) => {
        return response.data.length;
      })
      .catch((err) => console.log(err));
  };
}

export default Product;
