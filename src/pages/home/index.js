import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Creators as ProductsActions } from 'store/ducks/products';

import styles from './styles';
import { colors } from 'styles';

import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'GoCommerce',
    headerTintColor: colors.primary,
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    tabBarIcon: ({ tintColor }) => <Icon color={tintColor} name="home" size={20} />,
  });

  componentDidUpdate = () => {
    console.tron.log(this.props.selectedCategory);
    this.props.getProductsByCategoryRequest(this.props.selectedCategory);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Categories />
        <View style={styles.productContainer}>
          <Products goProductDetails={this.props.navigation} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedCategory: state.Categories.selectedCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, CategoriesActions, ProductsActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
