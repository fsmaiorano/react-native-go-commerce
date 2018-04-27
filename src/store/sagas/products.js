import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as ProductsActions } from 'store/ducks/products';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, '/category_products');
    let products = response.data.filter(p => p.id === action.payload.category.id);
    yield put(ProductsActions.getProductsByCategorySuccess(products[0]));

  } catch (err) {
    yield put(ProductsActions.getProductsByCategoryFailure('Erro ao recuperar produtos'));
  }
}
