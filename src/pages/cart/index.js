import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import Icon from 'react-native-vector-icons/FontAwesome';
import CartItem from './Components/CartItem';

import styles from './styles';
class Cart extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Carrinho',
    tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={20} color="black" />,
    // headerStyle: { justifyContent: 'center', borderWidth: 1, borderColor: '#1d2088' },
    // headerTitleStyle: { textAlign: 'center', borderWidth: 1, borderColor: '#ff0000' }
  });

  render() {
    const { cartItems } = this.props.cart;
    return (
      <View>
        {
          cartItems.length > 0 ?
            <FlatList
              data={cartItems}
              keyExtractor={cartItem => String(cartItem.id)}
              renderItem={({ item }) => <CartItem cartItem={item} />}
            /> : (<Text>O carrinho está vazio!</Text>)
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
