// export { default } from 'src/screens/Login'

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from 'src/screens/Login';
import ProductsList from 'src/screens/ProductsList';
import Product from 'src/screens/Product'

const RootStack = createStackNavigator(
  {
    Login,
    ProductsList,
    Product
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(RootStack);
