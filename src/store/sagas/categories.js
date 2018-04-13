import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as CategoriesActions } from 'store/ducks/categories';

export function* getCategories(action) {
  try {
    const response = yield call(api.get, '/categories');
    console.tron.log(response)
    yield put(CategoriesActions.getCategoriesSuccess(response.data));

  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro ao recuperar categorias'));
  }
}
