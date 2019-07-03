import React, { Component } from 'react';

class ProductActionPage extends Component {
   render() {
      return (
         <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <form>
                  <div className="form-group">
                     <label>Product Name</label>
                     <input type="text" className="form-control" id="" placeholder="Product Name" />
                  </div>
                  <div className="form-group">
                     <label>Product Price</label>
                     <input type="number" className="form-control" id="" placeholder="Product Price" />
                  </div>
                  <div className="form-group">
                     <label>Product Status</label>
                  </div>
                  <div className="checkbox">
                     <label>
                        <input type="checkbox" value="" />
                        In Of Stock
                     </label>
                  </div>
                  <button type="submit" className="btn btn-primary">Save</button>
               </form>
            </div>
         </div>
      );
   }
}

export default ProductActionPage;