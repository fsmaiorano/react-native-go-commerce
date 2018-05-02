import React from 'react';
import { FlatList } from 'react-native';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

import Categories from './../../src/pages/home/components/Categories/Categories';

const mockStore = configureStore([]);

const initialState = {
  products: [
    {
      "id": 1,
      "products": [
        {
          "id": 1,
          "name": "Camiseta Hyperas Preta",
          "brand": "Quiksilver",
          "image": "https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg",
          "price": 49.99
        },
      ]
    },
  ],
};

describe('Testing Products', () => {
  const store = mockStore(initialState);

  function createWrapper() {
    return shallow(
      <FlatList data={initialState.products} />
    );
  }

  it('component categories exists', () => {
    const wrapper = createWrapper();
    expect(wrapper.exists()).toBe(true);
  })

  it('render categories item', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop('data')).toEqual(initialState.products);
  })


});
