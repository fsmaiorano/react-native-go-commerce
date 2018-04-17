import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  productName: {
    flexDirection: 'row',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productBrand: {
    flexDirection: 'row',
  },
  productPrice: {
    flexDirection: 'row',
  },
  avatar: {
    width: 120,
    height: 180,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  productContainer: {
    width: 150,
    height: 280,
    maxWidth: metrics.screenWidth,
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },
  productInfo: {
  },

  debugBorder: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
  },
});

export default styles;
