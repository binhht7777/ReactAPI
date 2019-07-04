import React, { Component } from 'react';
import ProductList from './../../components/productlist/productlist';
import ProductItem from './../../components/productitem/productitem';
import { connect } from 'react-redux';
import callApi from './../../utils/apicaller';
import { Link } from 'react-router-dom';

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
                  onDelete={this.onDelete}
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

   findIndex = (products, id) => {
      var result = -1;
      products.forEach((product, index) => {
         if (product.id === id) {
            result = index;
         }
      });
      return result;
   }

   onDelete = (id) => {
      var { products } = this.state;
      callApi(`products/${id}`, 'DELETE', null).then(response => {
         console.log(response);
         if (response.status === 200) {
            var index = this.findIndex(products, id);
            if (index !== -1) {
               products.splice(index, 1);
               this.setState({
                  products: products
               });
            }
         }
      });
   }


   render() {
      var { products } = this.state;
      return (
         < div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
            <Link to="/product/add" type="button" className="btn btn-info mb-10">Add Product</Link>
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