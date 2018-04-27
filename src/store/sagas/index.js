import { all, takeLatest } from 'redux-saga/effects';

import { getCategories, setSelectedCategory  } from './categories';
import { getProducts } from './products';
import { getCart, setCart } from './cart';

import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as ProductsTypes } from 'store/ducks/products';
import { Types as CartActions } from 'store/ducks/cart';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoriesTypes.SET_SELECTED_CATEGORY_REQUEST, setSelectedCategory),

    takeLatest(ProductsTypes.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProducts),

    takeLatest(CartActions.GET_CART_REQUEST, getCart),
    takeLatest(CartActions.SET_CART_REQUEST, setCart),
  ]);
}
