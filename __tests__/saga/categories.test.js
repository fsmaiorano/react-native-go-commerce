import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import rootSaga from '../../src/store/sagas';
import { Creators as actions } from '../../src/store/ducks/categories';

const categoriesFixture = require('./fixtures/categories.json');

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
    sagaTester.dispatch(actions.getCategoriesRequest());
    await sagaTester.waitFor(actions.getCategoriesSuccess().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCategoriesSuccess(categoriesFixture['/categories']));
  });

  it('throw error when list categories', async () => {
    apiMock.onGet('/categories').reply(400, '');
    sagaTester.dispatch(actions.getCategoriesFailure('Erro ao recuperar categorias'));
    await sagaTester.waitFor(actions.getCategoriesFailure().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCategoriesFailure('Erro ao recuperar categorias'));
  });
});

describe('Testing select of an category', () => {
  let sagaTester = null;

  beforeEach(() => {
    sagaTester = new SagaTester({});
    sagaTester.start(rootSaga);
  });

  it('can set category', () => {
    sagaTester.dispatch(actions.setSelectedCategory({id: 1, title: 'teste'}));
    sagaTester.waitFor(actions.setSelectedCategorySuccess().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.setSelectedCategorySuccess({id: 1, title: 'teste'}));
  });

  it('throw error when set category', () => {
    sagaTester.dispatch(actions.setSelectedCategoryFailure({id: 1}));
    sagaTester.waitFor(actions.setSelectedCategoryFailure().type);
    expect(sagaTester.getLatestCalledAction()).not.toEqual(actions.setSelectedCategoryFailure({id: 1, title: 'teste'}));
  });
});


