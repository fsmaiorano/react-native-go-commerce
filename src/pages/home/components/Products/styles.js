import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'green',
    justifyContent: 'space-between',

  },

  debugBorder: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'red',
  },
});

export default styles;
