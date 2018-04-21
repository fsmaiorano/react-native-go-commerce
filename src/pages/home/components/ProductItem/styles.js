import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({

  productName: {
    // flexDirection: 'row',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productBrand: {
    // flexDirection: 'row',
  },
  productPrice: {
    // flexDirection: 'row',
  },
  avatar: {
    width: 120,
    height: 180,

  },
  productContainer: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
    width: 150,
    height: 280,
    maxWidth: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    // justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },

});

export default styles;
