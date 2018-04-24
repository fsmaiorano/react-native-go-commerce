import { StyleSheet } from 'react-native';

import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  info: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
  },
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding,
  },

  addToCart: {
    height: 45,
    width: metrics.screenWidth - 80,
    paddingTop: 15,
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
