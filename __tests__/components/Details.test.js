import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import { Creators as actions } from '../../src/store/ducks/cart';
import Details from './../../src/pages/details';

// import SagaTester from 'redux-saga-tester';
// import rootSaga from '../../src/store/sagas';

const mockStore = configureStore([]);

const initialState = {
  product: [{
    "id": 1,
    "name": "Camiseta Hyperas Preta",
    "brand": "Quiksilver",
    "image": "https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg",
    "price": 49.99
  }]
};

const cart = [
  {
    "id": 1,
    "name": "Camiseta Hyperas Preta",
    "brand": "Quiksilver",
    "image": "https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg",
    "price": 49.99,
    "amount": 1
  }
];

// describe('Request cart items', () => {
//   let sagaTester = null;

//   beforeEach(() => {
//     sagaTester = new SagaTester({});
//     sagaTester.start(rootSaga);
//   });

//   it('get cart', () => {
//     sagaTester.dispatch(actions.getCartRequest());
//     sagaTester.waitFor(actions.getCartSuccess().type);
//     expect(sagaTester.getLatestCalledAction()).toEqual(actions.getCartSuccess([]));
//   });

// });

describe('Can render product detail', () => {
  const store = mockStore(initialState.product);

  function createWrapper() {
    return shallow(
      <Details />,
      { context: { store } },
    );
  }

  it('ComponentDidMount Load', async () => {
    const wrapper = createWrapper();
    await wrapper.instance().componentDidMount();
  })


  it('component details exists', () => {
    const wrapper = createWrapper(); // Carrega o componente para dentro do teste
    expect(wrapper.exists()).toBe(true);
  })

  it('component details contain a product', () => {
    const wrapper = createWrapper(); // Carrega o componente para dentro do teste
    expect(wrapper.find(TouchableOpacity).exists());
  })

});
