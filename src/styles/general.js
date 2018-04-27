import colors from './colors';
import metrics from './metrics';

export default {
  productName: {
    fontSize: 14,
    color: colors.black,
  },
  productBrand: {
    fontSize: 11,
    color: colors.darkGray,
  },
  productPrice: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  avatar: {
    height: 180,

  },
  productContainer: {
    // // borderRadius: 4,
    // // borderWidth: 0.5,
    // // borderColor: 'red',
    // width: 150,
    // height: 280,
    // maxWidth: metrics.screenWidth,
    // marginTop: metrics.baseMargin,
    // marginLeft: metrics.baseMargin,
    // marginRight: metrics.baseMargin,
    // // justifyContent: 'space-between',
    // backgroundColor: colors.white,
    // borderRadius: metrics.baseRadius,
    // padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },

};
