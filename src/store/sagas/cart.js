import api from 'services/api';
import { call, put, select } from 'redux-saga/effects';
import { Creators as CartActions } from 'store/ducks/cart';

export function* getCart(state) {
  try {
    const cart = yield select(state => state.Cart);
    if (cart) {
      yield put(CartActions.getCartSuccess(cart.cartItems));
    }
    else {
      yield put(CartActions.getCartSuccess([]));
    }
  } catch (err) {
    yield put(CartActions.getCartFailure('Erro ao recuperar o carrinho'));
  }
}

export function* setCart(action) {
  try {
    // const { cartItems } = yield select(state => state.Cart);
    // console.log(cartItems);
    let sumItems = action.payload.cart.reduce(function (prevVal, item) {
      return prevVal + (item.price * item.amount);
    }, 0);

    yield put(CartActions.setCartSuccess(action.payload.cart, sumItems));
  } catch (err) {
    yield put(CartActions.setCartFailure('Erro ao colocar o produto no carrinho'));
  }
}

