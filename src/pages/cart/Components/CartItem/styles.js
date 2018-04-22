import { StyleSheet } from 'react-native';

import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({

  price: {
    alignSelf: 'center',
    color: colors.midGray,
  },

  containerImage: {
  },
  containerText: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
  subTitle: {
    flex: 1,
    fontSize: 12,
    color: colors.midGray,
  },

});

export default styles;


