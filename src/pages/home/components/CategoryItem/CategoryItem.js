import React from 'react';
import { View, Text, FlatList } from 'react-native';

const CategoryItem = ({category}) => (
  <Text>{category.title}</Text>
);

export default CategoryItem;
