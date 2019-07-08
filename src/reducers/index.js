import { combineReducers } from 'redux';
import products from './products';
import itemEditting from './itemEditing';

const appReducers = combineReducers({
   products: products,
   itemEditting: itemEditting
});
export default appReducers;