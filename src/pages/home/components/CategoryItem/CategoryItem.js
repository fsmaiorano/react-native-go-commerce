import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class CategoryItem extends Component {

  static propTypes = {
    category: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    getCategory: PropTypes.func.isRequired,
  }

  render() {
    const { category, getCategory, selectedCategory } = this.props;

    const containerStyle = selectedCategory === category
      ? [styles.titleContainer, styles.titleContainerSelected]
      : styles.titleContainer;
    const titleStyle = selectedCategory === category ? [styles.title, styles.titleSelected] : styles.title;

    return (
      <TouchableOpacity style={containerStyle} onPress={() => getCategory(category)}>
        <Text style={titleStyle}>{category.title}</Text>
      </TouchableOpacity>
    )
  }
}


export default CategoryItem;
