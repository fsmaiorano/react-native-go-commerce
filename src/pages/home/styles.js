import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    maxHeight: metrics.screenHeight - 182,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: metrics.baseMargin,
  },
});

export default styles;
