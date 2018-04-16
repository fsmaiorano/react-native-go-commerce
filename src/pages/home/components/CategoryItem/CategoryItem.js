import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CategoryItem = ({ category, getCategory }) => (
  <TouchableOpacity style={styles.category} onPress={() => getCategory(category)}>
    <Text style={styles.category}>{category.title}</Text>
  </TouchableOpacity>
);

CategoryItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  getCategory: PropTypes.func.isRequired,
}


export default CategoryItem;
