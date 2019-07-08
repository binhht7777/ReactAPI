import React, { Component } from 'react';
import ProductList from './../../components/productlist/productlist';
import ProductItem from './../../components/productitem/productitem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductsRequest } from './../../actions/index';

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

   componentDidMount() {
      this.props.fetchAllProducts()
   }

   onDelete = (id) => {
      this.props.onDeleteProduct(id);
   };



   render() {
      var { products } = this.props;
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

const mapDispatchToProps = (dispatch, props) => {
   return {
      fetchAllProducts: () => {
         dispatch(actFetchProductsRequest());
      },
      onDeleteProduct: (id) => {
         dispatch(actDeleteProductsRequest(id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);