import React, { Component } from 'react';
import ProductList from './../../components/productlist/productlist';
import ProductItem from './../../components/productitem/productitem';
import { connect } from 'react-redux';
import callApi from './../../utils/apicaller';


class ProductListPage extends Component {

   showProducts = (products) => {
      var result = null;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return (
               <ProductItem
                  key={index}
                  product={product}
                  index={index}
               />
            )
         })
      }
      return result;
   }

   constructor(props) {
      super(props);
      this.state = {
         products: []
      }
   }

   componentDidMount() {
      callApi('products', 'GET', null).then(response => {
         this.setState({
            products: response.data
         });
      });
   }


   render() {
      var { products } = this.state;
      return (
         < div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <button type="button" className="btn btn-info mb-10">Add Product</button>
            <ProductList>
               {this.showProducts(products)}
            </ProductList>
         </div >
      );
   }
}

const mapStateToProps = state => {
   return {
      products: state.products
   }
}

export default connect(mapStateToProps, null)(ProductListPage);