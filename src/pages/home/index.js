import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import styles from './styles';

import Categories from './components/Categories/Categories';

class Home extends Component {

  componentDidMount(){
    debugger;
    this.props.getCategoriesRequest();
  }

  render(){
    return(
      <View>
      {
        this.props.categories && this.props.categories.isLoading ?
        (<Text>Carregando...</Text>) :
        (<Categories categories={this.props.categories} />)

      }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
