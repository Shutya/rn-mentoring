import { createStackNavigator, createAppContainer } from 'react-navigation';

import Drawer from './DrawerStack';
import Login from 'src/screens/Login';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    Drawer
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(RootStack);