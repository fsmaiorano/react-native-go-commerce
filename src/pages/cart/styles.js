import { StyleSheet } from 'react-native';

import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  listContainer: {
    paddingHorizontal: metrics.basePadding * 2,
    paddingTop: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  subtotalContainer: {
    height: 100,
    width: '100%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  subtotalTitle: {
    fontSize: 14,
    color: colors.darkGray
  },
  subtotalValue: {
    fontSize: 24,
    color: colors.secondary,
  }

});

export default styles;
