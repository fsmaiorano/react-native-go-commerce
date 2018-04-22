import { StyleSheet } from 'react-native';

import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({

  productName: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
  },
  productBrand: {
    fontSize: 12,
    color: colors.darkGray,
  },
  productPrice: {
    fontSize: 24,
    color: colors.secondary,
  },
  avatar: {
    height: 285,
    width: '100%',
  },
  productContainer: {
    ...general.productContainer,
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    height: '80%',
  },

  addToCart: {
    height: 45,
    width: '100%',
    paddingTop: 12,
    backgroundColor: colors.secondary,
  },

  addToCartLabel: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },



});

export default styles;
