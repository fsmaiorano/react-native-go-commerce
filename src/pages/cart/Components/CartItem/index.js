import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const CartItem = ({ cartItem }) => (
  <View style={styles.container} key={cartItem.id}>
    <View style={styles.containerImage}>
      <Image resizeMode="contain" style={styles.avatar} source={{ uri: cartItem.image }} />
    </View>
    <View style={styles.containerText}>
    <Text style={styles.title}>{cartItem.name}</Text>
    <Text style={styles.subTitle}>{cartItem.brand}</Text>
    </View>
    <Text style={styles.price} >R$ {cartItem.price}</Text>
  </View>
);

export default CartItem;


