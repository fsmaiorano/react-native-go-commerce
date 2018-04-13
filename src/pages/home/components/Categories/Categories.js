import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, FlatList } from 'react-native';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import CategoryItem from 'pages/home/components/CategoryItem/CategoryItem';

class Categories extends Component {

 componentDidMount(){
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <FlatList
        data={this.props.categories}
        keyExtractor={category => String(category.id)}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
