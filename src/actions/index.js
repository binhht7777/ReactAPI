import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apicaller';

export const actFetchProductsRequest = () => {
   return (dispatch) => {
      return callApi('products', 'GET', null).then(res => {
         dispatch(actFetchProducts(res.data));
      });
   }
}

export const actFetchProducts = (products) => {

   return {
      type: Types.FETCH_PRODUCTS,
      products: products
   }
}

export const actDeleteProductsRequest = (id) => {
   return (dispatch) => {
      return callApi(`products/${id}`, 'DELETE', null).then(res => {
         dispatch(actDeleteProduct(id));
      });
   }
}

export const actDeleteProduct = (id) => {
   return {
      type: Types.DELETE_PRODUCT,
      id: id
   }
}

// add product
export const actAddProductsRequest = (product) => {
   return (dispatch) => {
      return callApi('products', 'POST', product).then(res => {
         dispatch(actAddProduct(product));
      });
   }
}

export const actAddProduct = (product) => {
   return {
      type: Types.ADD_PRODUCT,
      product: product
   }
}

// get product

export const actGetProductRequest = (id) => {
   return (dispatch) => {
      return callApi(`products/${id}`, 'GET', null).then(res => {
         dispatch(actGetproduct(res.data));
      });
   }
}

export const actGetproduct = (product) => {
   return {
      type: Types.EDIT_PRODUCT,
      product: product
   }

}

// update product
export const actUpdateProductRequest = (product) => {
   return dispatch => {
      return callApi(`products/${product.id}`, 'PUT', product).then(res => {
         dispatch(actUpdateProduct(res.data));
      });
   }
}

export const actUpdateProduct = (product) => {
   return {
      type: Types.UPDATE_PRODUCT,
      product: product
   }
}