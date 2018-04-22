import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import { Creators as CartActions } from 'store/ducks/cart';

export function* getCart() {
  try {
    const { cartItems } = yield select(state => state.Cart);
    yield put(CartActions.getCartSuccess(cartItems));

  } catch (err) {
    yield put(CartActions.getCartFailure('Erro ao recuperar o carrinho'));
  }
}

export function* setCart(action) {
  try {
    yield put(CartActions.setCartSuccess(action.payload.cart));
  } catch (err) {
    yield put(CartActions.setCartFailure('Erro ao colocar o produto no carrinho'));
  }
}

