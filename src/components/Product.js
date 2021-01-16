import React from "react";
import * as fmt from "indian-number-format";

export default class Product extends React.Component {
  getPriceRange = () => {
    const prices = this.props.product.variants.map((variant) => variant.price);
    const min = Math.round(Math.min(...prices));
    const max = Math.round(Math.max(...prices));
    return { max, min };
  };

  render() {
    const { product } = this.props;
    const { max, min } = this.getPriceRange();
    return (
      <div className="card flex-row flex-wrap p-3 mt-4">
        <div className="border-0">
          <img src={product.image_url} alt="" />
        </div>
        <div className="card-block px-2">
          <p className="text-muted">{product.id.toUpperCase()}</p>
          <h4 className="card-title">{product.product_name}</h4>
          <p className="text-muted">{product.variants.length} Variants</p>
          <p className="text-muted">
            RS {fmt.format(min)} - RS {fmt.format(max)}
          </p>
        </div>
      </div>
    );
  }
}
