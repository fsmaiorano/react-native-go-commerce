import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import rootSaga from '../../src/store/sagas';
import { Creators as actions } from '../../src/store/ducks/categories';

const categoriesFixture = require('./fixtures/categories.json');
console.log(categoriesFixture);

describe('Testing categories saga', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    apiMock = new MockAdapter(api.axiosInstance);
    sagaTester.start(rootSaga);
  });

  it('can list categories', async () => {
    apiMock.onGet('/categories').reply(200, categoriesFixture['/categories']);
    console.log(actions);
    sagaTester.dispatch(actions.getCategoriesRequest());
    await sagaTester.waitFor(actions.getCategoriesSuccess(categoriesFixture['/categories']).type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCategoriesSuccess(categoriesFixture['/categories']));
  });

  it('throw error when list categories', async () => {
    apiMock.onGet('/categories').reply(400);
    console.log(actions);
    sagaTester.dispatch(actions.getCategoriesRequest());
    await sagaTester.waitFor(actions.getCategoriesFailure('Erro ao recuperar categorias').type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCategoriesFailure('Erro ao recuperar categorias'));
  });
});


