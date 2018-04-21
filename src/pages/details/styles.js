import { StyleSheet } from 'react-native';

import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({

  productName: {
    ...general.productName,
    alignSelf: 'flex-start',
  },
  productBrand: {
    ...general.productBrand,
    alignSelf: 'flex-start',
  },
  productPrice: {
    ...general.productPrice,
    alignSelf: 'flex-end',
  },
  avatar: {
    ...general.avatar,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  productContainer: {
    minWidth: metrics.screenWidth - 25,
    justifyContent: 'center',
    alignItems: 'center',

    ...general.productContainer,
  },

});

export default styles;
