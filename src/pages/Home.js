import React, { Fragment } from "react";
import { apiService } from "../api";
import { Products, Loading, Pagination } from "../components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
      products: null,
      count: null,
      limit: 5,
    };
    this.apiService = apiService;
  }
  handlePageClick = (pageNo) => {
    this.setState({
        page : pageNo
    }, () => {
        this.getProductsData();
    })
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.getProductsData();
    
  }

  getProductsData(){
    apiService.Product.getAllProducts({
        pageNo : this.state.page,
        limit : this.state.limit
    })
      .then((response) => {
        this.setState({
          loading: false,
          products: response.data,
          count: response.count,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  }
  render() {
    const { loading, products } = this.state;
    return (
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <Products products={products} />
            <Pagination dataSize={this.state.count} limit={this.state.limit} onPageClick = {this.handlePageClick} currentPage = {this.state.page} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
