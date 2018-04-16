import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
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
      <View>
        {
          selectedCategoryProduct.products ? (selectedCategoryProduct.products.map(prod => (
            <View key={prod.id} style={styles.productContainer}>
              <Text>{prod.name}</Text>
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
