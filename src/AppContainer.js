import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { headerWrapper, headerText, headerTitleStyle } from 'src/style/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'react-native';

import Login from 'src/screens/Login';
import ProductsList from 'src/screens/ProductsList';
import Product from 'src/screens/Product';
import MapScreen from 'src/screens/MapScreen';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: { header: null }
    },
    ProductsList: {
      screen: ProductsList,
      navigationOptions: {
        title: 'Products',
        headerLeft: null,
        headerTitleStyle
      }
    },
    Product: {
      screen: Product,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        header: () => (
          <View style={headerWrapper}>
            <Icon size={50} name={'map'} />
            <Text style={headerText}>{navigation.getParam('name')}</Text>
          </View>
        )
      })
    },
    MapScreen: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.getParam('name')} Map`,
        headerLeft: null,
        headerTitleStyle
      })
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(RootStack);