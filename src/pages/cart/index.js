import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import Icon from 'react-native-vector-icons/FontAwesome';
import CartItem from './Components/CartItem';

import styles from './styles';
import { colors } from 'styles';
class Cart extends Component {

  state = {
    valueTotal: 0
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Carrinho',
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="shopping-cart" size={20} />,
  });

  componentDidMount() {
    const { cartItems } = this.props.cart;
    const { valueTotal } = this.state;

    let sumItems = cartItems.reduce(function (prevVal, item) {
      return prevVal + item.price;
    }, 0);

    this.setState({ valueTotal: sumItems });
  }

  render() {
    const { cartItems } = this.props.cart;
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {
            cartItems.length > 0 ?
              <FlatList
                data={cartItems}
                keyExtractor={cartItem => String(cartItem.id)}
                renderItem={({ item }) => <CartItem cartItem={item} />}
              /> : (<Text>O carrinho está vazio!</Text>)
          }
        </View>
        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalTitle}>Subtotal</Text>
          <Text style={styles.subtotalValue}>  <Text>{this.state.valueTotal}</Text></Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
