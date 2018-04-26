import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import styles from './styles';

class CartItem extends Component {

  changeAmount(cartItem, amount) {
    const { cartItems, totalAmount } = this.props.cart;

    let index = cartItems.findIndex(item => item === cartItem);
    cartItems[index].amount = amount;

    this.props.setCartRequest(cartItems);
  }

  render() {
    const { cartItem } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: cartItem.image }}
          resizeMode="contain"
        />
        <View style={styles.info}>
          <Text style={styles.name}>{cartItem.name}</Text>
          <Text style={styles.brand}>{cartItem.brand}</Text>
          <Text style={styles.price}>{cartItem.price}</Text>
        </View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          style={styles.amount}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={cartItem.amount}
          onChangeText={amount => this.changeAmount(cartItem, amount)}
        // onChangeText={amount => this.props.changeAmount(cartItem.id, amount)}
        // onBlur={() => !cartItem.amount && this.props.changeAmount(cartItem.id, '1')}
        />
        <TouchableOpacity onPress={() => this.props.removeProduct(cartItem.id)}>
          <Icon name="close" size={20} color={colors.darkGray} />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.Cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);


