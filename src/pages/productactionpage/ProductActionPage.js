import React, { Component } from 'react';
import callApi from './../../utils/apicaller';
import { Link } from 'react-router-dom';
import { actAddProductsRequest, actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';
//import products from '../../reducers/products';

class ProductActionPage extends Component {

   constructor(props) {
      super(props);
      this.state = {
         id: '',
         txtName: '',
         txtPrice: '',
         chkStatus: ''
      };
   }



   componentDidMount = () => {
      console.log("componentDidMount");
      var { match } = this.props;
      if (match) {
         var id = match.params.id;
         return callApi(`products/${id}`, 'GET', null).then(res => {
            var data = res.data;
            this.setState({
               id: data.id,
               txtName: data.name,
               txtPrice: data.price,
               chkStatus: data.status
            });
         });
      }
   }

   // componentWillReceiveProps(nextProps) {
   //    console.log(nextProps);
   //    // if (nextProps !== null && nextProps.itemEditing !== null) {
   //    //    var { itemEditing } = nextProps;
   //    //    this.setState({
   //    //       id: itemEditing.id,
   //    //       txtName: itemEditing.name,
   //    //       txtPrice: itemEditing.price,
   //    //       chkStatus: itemEditing.status
   //    //    })
   //    // }
   // }

   onChange = (e) => {
      var target = e.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
         [name]: value
      })
   }

   onSave = (e) => {
      e.preventDefault();
      var { txtName, txtPrice, chkStatus, id } = this.state;
      var { history } = this.props;
      var product = {
         id: id,
         name: txtName,
         price: txtPrice,
         status: chkStatus
      }
      if (id) {
         console.log(product);
         this.props.onUpdateProduct(product);

      } else {
         this.props.onAddProduct(product);

      }
      history.goBack();
   }


   render() {
      var { txtName, txtPrice, chkStatus } = this.state;
      return (
         <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <form onSubmit={this.onSave}>
                  <div className="form-group">
                     <label>Product Name</label>
                     <input
                        name="txtName" type="text"
                        className="form-control"
                        placeholder="Product Name"
                        value={txtName}
                        onChange={this.onChange}
                     />
                  </div>
                  <div className="form-group">
                     <label>Product Price</label>
                     <input
                        name="txtPrice" type="number"
                        className="form-control"
                        placeholder="Product Price"
                        value={txtPrice}
                        onChange={this.onChange}
                     />
                  </div>
                  <div className="form-group">
                     <label>Product Status</label>
                  </div>
                  <div className="checkbox">
                     <label>
                        <input
                           type="checkbox"
                           name="chkStatus"
                           value={chkStatus}
                           onChange={this.onChange}
                           checked={chkStatus}
                        />
                        In Of Stock
                     </label>
                  </div>
                  <Link to="/product-list" className="btn btn-danger mr-10">Back</Link>
                  <button type="submit" className="btn btn-primary">Save</button>

               </form>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      itemEditing: state.itemEditing

   }
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      onAddProduct: (product) => {
         dispatch(actAddProductsRequest(product))
      },
      onEditProduct: (id) => {
         dispatch(actGetProductRequest(id))
      },
      onUpdateProduct: (product) => {
         dispatch(actUpdateProductRequest(product))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);