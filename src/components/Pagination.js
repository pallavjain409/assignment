import './Pagination.css';
import React from "react";

export default class Pagination extends React.Component {
  pageClicked = (pageNo) => {
    this.props.onPageClick(pageNo);
  };

  render() {
    const { dataSize, limit, currentPage } = this.props;
    const noOfPages = Math.ceil(dataSize / limit);
    const pagesMap = new Array(noOfPages).fill(1).map((_, index) => (
      <li className="page-item" key={index}>
        <a className={currentPage ? "active-page page-link" : "page-link"} onClick={() => this.pageClicked(index + 1)}>
          {index + 1}
        </a>
      </li>
    ));
    return (
      <nav aria-label="...">
        <ul className="pagination pagination-lg">{pagesMap}</ul>
      </nav>
    );
  }
}
