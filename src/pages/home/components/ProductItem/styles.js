import { StyleSheet } from 'react-native';

import { general, metrics } from 'styles';

const styles = StyleSheet.create({

  productName: {
    ...general.productName,
  },
  productBrand: {
    ...general.productBrand,
  },
  productPrice: {
    ...general.productPrice,
  },
  avatar: {
    ...general.avatar,

  },
  productContainer: {
    ...general.productContainer,
    flex: 1,
    maxWidth: (metrics.screenWidth - 50) / 2,
  },

});

export default styles;
