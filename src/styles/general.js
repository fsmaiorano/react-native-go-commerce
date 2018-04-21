import colors from './colors';
import metrics from './metrics';

export default {
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  productBrand: {
  },
  productPrice: {
  },
  avatar: {
    width: 120,
    height: 180,

  },
  productContainer: {
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: 'red',
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

};
