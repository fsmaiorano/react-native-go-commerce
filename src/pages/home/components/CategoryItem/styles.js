import { StyleSheet } from 'react-native';

import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.transparentWhite,
  },
  titleSelected: {
    color: colors.white,
  },
  container: {
    height: 44,
    backgroundColor: colors.primary,
    paddingHorizontal: metrics.basePadding,
    width: '100%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: metrics.basePadding,
  },
  titleContainerSelected: {
    borderBottomWidth: 5,
    borderBottomColor: colors.white,
  },
});

export default styles;
