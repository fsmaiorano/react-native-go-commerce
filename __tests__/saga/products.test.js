import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import rootSaga from '../../src/store/sagas';
import { Creators as actions } from '../../src/store/ducks/products';

const productsFixture = require('./fixtures/products.json');

describe('Testing products saga', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);
    sagaTester.start(rootSaga);
  });

  it('can list products', async () => {
    apiMock.onGet('/category_products').reply(200, productsFixture['/category_products']);
    sagaTester.dispatch(actions.getProductsByCategoryRequest(1));
    await sagaTester.waitFor(actions.getProductsByCategorySuccess().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getProductsByCategorySuccess(productsFixture['/category_products']));
  });

  it('throw error when list products', async () => {
    apiMock.onGet('/category_products').reply(400);
    sagaTester.dispatch(actions.getProductsByCategoryRequest());
    await sagaTester.waitFor(actions.getProductsByCategoryFailure().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getProductsByCategoryFailure('Erro ao recuperar produtos'));
  });
});
