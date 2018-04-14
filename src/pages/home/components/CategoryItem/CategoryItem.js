import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const CategoryItem = ({ category }) => (
  <TouchableOpacity style={styles.category} onPress={() => { }}>
    <Text style={styles.category}>{category.title}</Text>
  </TouchableOpacity>
);

export default CategoryItem;
