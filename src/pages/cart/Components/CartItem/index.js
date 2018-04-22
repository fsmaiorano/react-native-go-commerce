import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from 'styles';
import styles from './styles';

const CartItem = ({ cartItem }) => (
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
        // onChangeText={amount => this.props.changeAmount(cartItem.id, amount)}
        // onBlur={() => !cartItem.amount && this.props.changeAmount(cartItem.id, '1')}
      />
      <TouchableOpacity onPress={() => this.props.removeProduct(cartItem.id)}>
        <Icon name="close" size={20} color={colors.darkGray} />
      </TouchableOpacity>
    </View>
);

export default CartItem;


