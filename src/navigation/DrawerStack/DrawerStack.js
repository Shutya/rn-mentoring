import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import ProductStack from './ProductStack';
import MapScreen from 'src/screens/MapScreen';
import BurgerButton from 'src/components/BurgerButton';

const DrawerStack = createDrawerNavigator({
  ProductStack: {
    screen: ProductStack,
    navigationOptions: {
      title: 'Products'
    }
  },
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Our location',
    }
  }
}, {
  initialRouteName: 'ProductStack',
  navigationOptions: ({ navigation }) => ({
    title: 'Awesome App',
    headerLeft: <BurgerButton
      toggleDrawer={navigation.toggleDrawer}
      drawerMovementDirection={navigation.state.drawerMovementDirection}
    />
  })
});

export default DrawerStack;
