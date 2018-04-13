import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import styles from './styles';

import Categories from './components/Categories/Categories';

class Home extends Component {

  render(){
    return(
      <View>
      <Text>Home</Text>
        <Categories/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Home);
