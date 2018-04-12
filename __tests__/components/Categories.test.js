import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';

import Categories from './../../src/pages/home/components/Categories/Categories';
import { wrap } from 'module';


describe('Testing Categories', () => {

  it('component categories exists', () => {
    const wrapper = shallow(<Categories />);
    expect(wrapper.exists()).toBe(true);
  })

});
