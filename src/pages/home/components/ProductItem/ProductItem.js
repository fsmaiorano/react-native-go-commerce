import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ProductItem = ({ product }) => (
  <TouchableOpacity onPress={() => { }}>
    <View key={product.id} style={styles.productContainer}>
      <Image resizeMode="contain" style={styles.avatar} source={{ uri: product.image }} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
      <Text style={styles.productPrice}>R$ {product.price}</Text>
    </View>
  </TouchableOpacity>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    name: PropTypes.string,
    brand: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}


export default ProductItem;
