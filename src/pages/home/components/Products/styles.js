import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',

  },

  columnContainer: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
    paddingTop: metrics.basePadding,
  },

  debugBorder: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
  },
});

export default styles;
