import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import rootSaga from '../../src/store/sagas';
import { Creators as actions } from '../../src/store/ducks/cart';

const cartFixture = require('./fixtures/cart.json');

describe('Get cart items', () => {

  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(rootSaga);
  });

  it('get cart success', () => {
    sagaTester.dispatch(actions.getCartRequest());
    sagaTester.waitFor(actions.getCartSuccess().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCartSuccess([]));
  });

  it('get cart error', () => {
    sagaTester.dispatch(actions.getCartFailure("Erro ao recuperar o carrinho"));
    sagaTester.waitFor(actions.getCartFailure().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCartFailure("Erro ao recuperar o carrinho"));
  });
});

describe('Set cart items', () => {
  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(rootSaga);
  });

  it('set cart success', () => {
    sagaTester.dispatch(actions.setCartRequest(cartFixture['/cart']));
    sagaTester.waitFor(actions.setCartSuccess().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.setCartSuccess(cartFixture['/cart'], 49.99));
  });

  it('set cart error', () => {
    sagaTester.dispatch(actions.setCartFailure("Erro ao recuperar o carrinho"));
    sagaTester.waitFor(actions.setCartFailure().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.setCartFailure("Erro ao recuperar o carrinho"));
  });

});
