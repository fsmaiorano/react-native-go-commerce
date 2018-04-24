import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
// import { Creators as CategoriesActions } from 'store/ducks/categories';

import styles from './styles';
import ProductItem from 'pages/home/components/ProductItem/ProductItem';

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

  selectProduct = (product) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Details',
      params: { product: product },
      action: NavigationActions.navigate({ routeName: 'Details' }),
    });
    this.props.goProductDetails.dispatch(navigateAction);
  }


  render() {
    const { selectedCategoryProduct } = this.props;
    return (
      <View style={styles.container}>
        {
          selectedCategoryProduct.products ?
            (
              <FlatList
                numColumns={2}
                style={{ borderWidth: 1, borderColor: 'green' }}
                columnWrapperStyle={styles.columnContainer}
                data={selectedCategoryProduct.products}
                keyExtractor={product => String(product.id)}
                renderItem={({ item }) => <ProductItem product={item} getProduct={(item) => this.selectProduct(item)} />}
              />
            ) : (
              <View>
                <Text style={{alignSelf: 'center', justifyContent: 'center'}}>Bem vindo ao GoCommerce!</Text>
                <Text style={{alignSelf: 'center', justifyContent: 'center'}}>Selecione uma categoria para começar.</Text>
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
