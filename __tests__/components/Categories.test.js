import React from 'react';
import { FlatList } from 'react-native';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

import Categories from './../../src/pages/home/components/Categories/Categories';

const mockStore = configureStore([]);

const initialState = {
  categories: [
    {
      "id": 1,
      "title": "Camisetas"
    },
    {
      "id": 2,
      "title": "Camisas"
    },
    {
      "id": 3,
      "title": "Calças"
    },
    {
      "id": 4,
      "title": "Blusas"
    },
    {
      "id": 5,
      "title": "Bonés"
    },
    {
      "id": 6,
      "title": "Casacos"
    }
  ],
};

describe('Testing Categories', () => {
  const store = mockStore(initialState);

  function createWrapper() {
    return shallow(
      <FlatList data={initialState.categories} />
    );
  }

  it('component categories exists', () => {
    const wrapper = createWrapper();
    expect(wrapper.exists()).toBe(true);
  })

  it('render categories item', () => {
    const wrapper = createWrapper();
    expect(wrapper.prop('data')).toEqual(initialState.categories);
  })


});
