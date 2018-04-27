import React from 'react';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import sinon from 'sinon';

import Categories from './../../src/pages/home/components/Categories/Categories';
import { wrap } from 'module';


describe('Testing Categories', () => {

  it('component TouchableOpacity exists', () => {
    const wrapper = shallow(<TouchableOpacity />);
    expect(wrapper.exists()).toBe(true);
  })
});
