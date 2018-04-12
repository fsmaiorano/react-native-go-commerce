import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import Categories from './components/Categories/Categories';

const Home = () => (
  <View>
    <Categories />
    <Text>Home View</Text>
  </View>
);

export default Home;
