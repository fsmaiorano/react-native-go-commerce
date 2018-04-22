import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CartItem = ({ cartItem }) => (
  <View><Text>{cartItem.name}</Text></View>
);

export default CartItem;
