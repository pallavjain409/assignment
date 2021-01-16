import React from 'react'
import { Product } from '../components'
export default class Products extends React.Component{
  

    render(){
        const productsMap = this.props.products ? this.props.products.map((product, index) => <Product key = {product.id} product = {product} />) : "No products"
        return (
            <div>
                {productsMap}
            </div>
        )
    }
}