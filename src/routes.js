import { StackNavigator } from 'react-navigation';

import { metrics } from 'styles';

import Home from 'pages/home';
import Cart from 'pages/cart';
import Details from 'pages/details';

const Routes = StackNavigator({
  Home: { screen: Home },
  Cart: { screen: Cart },
  Details: { screen: Details },
},
 {
   initialRouteName: 'Home',
   navigationOptions: () => ({
      headerStyle: {
        paddingHorizontal: metrics.basePadding,
      },
   }),
 },
);

export default Routes;
