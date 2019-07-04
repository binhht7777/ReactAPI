import React, { Component } from 'react';


class productitem extends Component {
   onDelete = (id) => {
      var msg = window.confirm("Are you sure delete item");
      if (msg === true) {
         this.props.onDelete(id);
      }
   }
   render() {
      var { product, index } = this.props;
      var status = product.status === true ? 'In Off Stock' : 'Out OF Stock';
      var statusClass = product.status === true ? 'default' : 'warning';
      return (
         <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
               <span className={`label label-${statusClass}`}>
                  {status}
               </span>
            </td>
            <td>
               <button type="button" className="btn btn-success mr-10">Update</button>
               <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.onDelete(product.id)}
               >
                  Delete</button>
            </td>
         </tr>
      );
   }
}

export default productitem;