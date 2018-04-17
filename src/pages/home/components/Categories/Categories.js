import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, FlatList } from 'react-native';
import { Creators as CategoriesActions } from 'store/ducks/categories';

import CategoryItem from 'pages/home/components/CategoryItem/CategoryItem';

import styles from './styles';
class Categories extends Component {

  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  selectCategory = (category) => {
    this.props.setSelectedCategory(category);
  }

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.props.categories}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ margin: 25 }} />}
          keyExtractor={category => String(category.id)}
          renderItem={({ item }) => <CategoryItem getCategory={(item) => this.selectCategory(item)} category={item} />}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.Categories.getCategories,
  selectedCategory: state.Categories.selectedCategory,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
