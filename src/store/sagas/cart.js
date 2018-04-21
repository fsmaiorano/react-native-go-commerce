import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Creators as CartActions } from 'store/ducks/cart';

export function* getCart() {
  try {
    yield put(CartActions.getCartSuccess(response.data));

  } catch (err) {
    yield put(CartActions.getCartFailure('Erro ao recuperar o carrinho'));
  }
}

export function* setCart(action) {
  try {
    yield put(CartActions.setCartSuccess(action.payload.category));
  } catch (err) {
    yield put(CartActions.setCartFailure('Erro ao colocar o produto no carrinho'));
  }
}

