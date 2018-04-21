import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

import styles from './styles';

class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Detalhes do Produto',
    // headerStyle: { justifyContent: 'center', borderWidth: 1, borderColor: '#1d2088' },
    // headerTitleStyle: { textAlign: 'center', borderWidth: 1, borderColor: '#ff0000' }
  });

  render() {
    const { product } = this.props.navigation.state.params;
    return (
      <View style={styles.productContainer} key={product.id}>
        <Image resizeMode="contain" style={styles.avatar} source={{ uri: product.image }} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productBrand}>{product.brand}</Text>
        <Text style={styles.productPrice}>R$ {product.price}</Text>
        <Button title="Adicionar ao carrinho" />
      </View>
    )
  }
};


// const Details = ({ product }) => {
//   <View>
//     <Text>{product.name} </Text>
//   </View>
// };

export default Details;
