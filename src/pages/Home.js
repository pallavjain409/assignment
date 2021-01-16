import React from "react"
import { apiService } from '../api';
import {Products, Loading} from '../components';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            page : 1,
            loading : false,
            products : null
        }
        this.apiService = apiService;
    }
    componentDidMount(){
        this.setState({
            loading: true
        });
        apiService.Product.getAllProducts()
        .then(response => {
           this.setState({
               loading: false,
               products : response
           })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                loading : false
            })
        })
    }
    render(){
        const { loading, products } = this.state;
        return(
          <div className ="container">
          {loading ? <Loading /> : <Products products = {products}/>}

          </div>
        )
    }
}

export default Home;