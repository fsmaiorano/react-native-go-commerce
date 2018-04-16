import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import styles from './styles';

import Categories from './components/Categories/Categories';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'GoCommerce',
    // headerStyle: { justifyContent: 'center', borderWidth: 1, borderColor: '#1d2088' },
    // headerTitleStyle: { textAlign: 'center', borderWidth: 1, borderColor: '#ff0000' }
  });

  componentDidUpdate = () => {
    console.tron.log(this.props.selectedCategory);
    this.props.getProductsByCategoryRequest(this.props.selectedCategory);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>{
          this.props.selectedCategory.title ?
          this.props.selectedCategory.title : null
        }</Text>
        <Categories />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  selectedCategory: state.Categories.selectedCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
