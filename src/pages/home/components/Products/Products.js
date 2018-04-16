import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
// import { Creators as CategoriesActions } from 'store/ducks/categories';

class Products extends Component {
  render() {
    const { selectedCategoryProduct } = this.props;
    return (
      <View>
        {
          selectedCategoryProduct.products ? (selectedCategoryProduct.products.map(prod => (
            <Text>{prod.name}</Text>
          ))
          ) : (<Text>xi</Text>)
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
