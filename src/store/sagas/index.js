import { all, takeLatest } from 'redux-saga/effects';

import { getCategories } from './categories';

import { Types as CategoriesTypes } from 'store/ducks/categories';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
  ]);
}
