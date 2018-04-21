import { combineReducers } from 'redux';

import Categories from './categories';
import Products from './products';
import Cart from './cart';

export default combineReducers({
  Categories,
  Products,
  Cart,
});
