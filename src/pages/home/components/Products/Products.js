import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <View>
        {
          products && products.map(prod => {
            <Text>{prod.name}</Text>
          })
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
