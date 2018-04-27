import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';
import api from '../../src/services/api';

import rootSaga from '../../src/store/sagas';
import * as actions from '../../src/store/ducks/categories';

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
    console.log(actions);
    sagaTester.dispatch(actions.getCategoriesRequest());
    await sagaTester.waitFor(actions.getCategoriesSuccess().type);
    expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCategoriesSuccess(categoriesFixture['categories']));
  });
});


