import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, FlatList } from 'react-native';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import CategoryItem from 'pages/home/components/CategoryItem/CategoryItem';

import styles from './styles';
class Categories extends Component {

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <View style={styles.listContainer}>
      <FlatList
        style={styles.listCategories}
        data={this.props.categories}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{width:15,  margin: 25}} />}
        keyExtractor={category => String(category.id)}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.Categories.activeCategories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
