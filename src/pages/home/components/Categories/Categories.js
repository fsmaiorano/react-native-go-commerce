import React from 'react';
import { View, Text, FlatList } from 'react-native';

import CategoryItem from 'pages/home/components/CategoryItem/CategoryItem';

const Categories = ({ categories }) => (
  <FlatList
    data={categories}
    keyExtractor={category => String(category.id)}
    renderItem={({ item }) => <CategoryItem category={item} />}
  />
);

export default Categories;
