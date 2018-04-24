import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';
import { colors } from 'styles';

class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Detalhes do Produto',
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
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
        <View style={styles.info}>
          <View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productBrand}>{product.brand}</Text>
          </View>
          <Text style={styles.productPrice}>R$ {product.price}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.addToCart} onPress={() => this.addToCart(product)}>
            <Text style={styles.addToCartLabel}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  cart: state.Cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);
