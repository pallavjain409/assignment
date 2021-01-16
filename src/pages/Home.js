import React, { Fragment } from "react";
import { apiService } from "../api";
import { Products, Loading, Pagination, SearchBar } from "../components";
import { debounce } from "lodash";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      loading: false,
      products: null,
      count: 0,
      limit: 5,
      search: "",
    };
    this.apiService = apiService;
  }
  handlePageClick = (pageNo) => {
    this.setState(
      {
        page: pageNo,
      },
      () => {
        this.getProductsData();
      }
    );
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.getProductsData();
  }

  getProductsData() {
    apiService.Product.getAllProducts({
      pageNo: this.state.page,
      limit: this.state.limit,
      search: this.state.search,
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

  handleSearchChange = (value) => {
    this.setState(
      {
        search: value,
        page: 1,
      },
      () => {
        this.getProductsData();
      }
    );
  };
  render() {
    const { loading, products } = this.state;
    return (
      <div className="container">
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <SearchBar handleChange={this.handleSearchChange} />
            {this.state.count ? (
              <Fragment>
                <Products products={products} />
                <Pagination
                  dataSize={this.state.count}
                  limit={this.state.limit}
                  onPageClick={this.handlePageClick}
                  currentPage={this.state.page}
                />
              </Fragment>
            ) : (
              <p>No Result found</p>
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

export default Home;
