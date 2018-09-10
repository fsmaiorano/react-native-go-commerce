import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartActions } from "store/ducks/cart";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "styles";
import styles from "./styles";

class CartItem extends Component {
  changeAmount(cartItem, amount) {
    const { cartItems } = this.props.cart;
    let index = cartItems.findIndex(item => item === cartItem);
    cartItems[index].amount = amount;
    this.props.setCartRequest(cartItems);
  }

  removeItem(cartItem) {
    const { cartItems } = this.props.cart;
    let updatedCart = cartItems.filter(item => item !== cartItem);
    this.props.setCartRequest(updatedCart);
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
          value={cartItem.amount.toString()}
          onChangeText={amount => this.changeAmount(cartItem, amount)}
        />
        <TouchableOpacity onPress={() => this.removeItem(cartItem)}>
          <Icon name="close" size={20} color={colors.darkGray} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.Cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
