import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { bindActionCreators } from 'redux';
// import { Creators as CategoriesActions } from 'store/ducks/categories';

import styles from './styles';

class Products extends Component {

  static propTypes = {
    selectedCategoryProduct: PropTypes.shape({
      id: PropTypes.number,
      products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          price: PropTypes.number,
          name: PropTypes.string,
          brand: PropTypes.string,
          image: PropTypes.string,
        }),
      ),
    }),
  }

  render() {
    const { selectedCategoryProduct } = this.props;
    return (
      <View style={styles.container}>
        {
          selectedCategoryProduct.products ? (selectedCategoryProduct.products.map(prod => (
            <View key={prod.id} style={styles.productContainer}>
              <Image resizeMode="contain" style={styles.avatar} source={{ uri: prod.image }} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{prod.name}</Text>
                <Text style={styles.productBrand}>{prod.brand}</Text>
                <Text style={styles.productPrice}>R$ {prod.price}</Text>
              </View>
            </View>
          ))
          ) : (
              <View>
                <Text>Bem vindo ao GoCommerce!</Text>
                <Text>Selecione uma categoria para começar.</Text>
              </View>
            )
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedCategoryProduct: state.Products.selectedCategoryProduct,
});

// const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps)(Products);
