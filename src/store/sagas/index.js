import { all, takeLatest } from 'redux-saga/effects';

import { getCategories, setSelectedCategory } from './categories';

import { Types as CategoriesTypes } from 'store/ducks/categories';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoriesTypes.SET_SELECTED_CATEGORY_REQUEST, setSelectedCategory),
  ]);
}
