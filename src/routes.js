import { StackNavigator, TabNavigator } from 'react-navigation';

import { metrics, colors } from 'styles';

import Home from 'pages/home';
import Cart from 'pages/cart';
import Details from 'pages/details';

const Tabs = TabNavigator({
  Home: { screen: Home },
  Cart: { screen: Cart },
},
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: colors.white,
      inactiveTintColor: colors.whiteTransparent,
      navigationOptions: () => ({
        headerStyle: {
          paddingHorizontal: metrics.basePadding,
        },
      }),
      style: {
        backgroundColor: colors.secundary,
      },
    },
  })

const Routes = StackNavigator({
  Main: Tabs,
  Details: { screen: Details },
},
  {
    navigationOptions: () => ({
      headerStyle: {
        paddingHorizontal: metrics.basePadding,
      },
    }),
  },
);

export default Routes;
