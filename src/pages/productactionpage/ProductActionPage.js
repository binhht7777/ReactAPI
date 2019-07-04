import React, { Component } from 'react';
import callApi from './../../utils/apicaller';
import { Link } from 'react-router-dom';

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
      var { txtName, txtPrice, chkStatus } = this.state;
      var { history } = this.props;
      callApi('products', 'POST', {
         name: txtName,
         price: txtPrice,
         status: chkStatus
      }).then(response => {
         //console.log(response);
         history.goBack();
      });
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

export default ProductActionPage;