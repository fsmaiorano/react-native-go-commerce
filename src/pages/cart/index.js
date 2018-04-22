import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
class Cart extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Carrinho',
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color="black" />,
    // headerStyle: { justifyContent: 'center', borderWidth: 1, borderColor: '#1d2088' },
    // headerTitleStyle: { textAlign: 'center', borderWidth: 1, borderColor: '#ff0000' }
  });

  render() {
    return (
      <View><Text>Cart</Text></View>
    )
  }
}

export default Cart;
