import { all, takeLatest } from 'redux-saga/effects';

import { getCategories, setSelectedCategory  } from './categories';
import { getProducts } from './products';

import { Types as CategoriesTypes } from 'store/ducks/categories';
import { Types as ProductsTypes } from 'store/ducks/products';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoriesTypes.SET_SELECTED_CATEGORY_REQUEST, setSelectedCategory),
    takeLatest(ProductsTypes.GET_PRODUCTS_BY_CATEGORY_REQUEST, getProducts),
  ]);
}
