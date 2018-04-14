import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');
    console.tron.log(response)
    yield put(CategoriesActions.getCategoriesSuccess(response.data));

  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro ao recuperar categorias'));
  }
}

export function* setSelectedCategory(action) {
  try {
    yield put(CategoriesActions.setSelectedCategorySuccess(action.payload.category));
  } catch (err) {
    yield put(CategoriesActions.setSelectedCategoryFailure('Erro ao selecionar uma categoria'));
  }
}
