import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';

class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Detalhes do Produto',
    // headerStyle: { justifyContent: 'center', borderWidth: 1, borderColor: '#1d2088' },
    // headerTitleStyle: { textAlign: 'center', borderWidth: 1, borderColor: '#ff0000' }
  });

  componentDidMount() {
    this.props.getCartRequest();
  }

  addToCart = (product) => {
    const { cartItems } = this.props.cart;
    cartItems.push(product);
    this.props.setCartRequest(cartItems);
  }

  render() {
    const { product } = this.props.navigation.state.params;
    return (
      <View style={styles.productContainer} key={product.id}>
        <Image resizeMode="contain" style={styles.avatar} source={{ uri: product.image }} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productBrand}>{product.brand}</Text>
        <Text style={styles.productPrice}>R$ {product.price}</Text>
        <Button style={styles.addToCart} title="Adicionar ao carrinho" onPress={() => this.addToCart(product)} />
      </View>
    )
  }
};

const mapStateToProps = state => ({
  cart: state.Cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
