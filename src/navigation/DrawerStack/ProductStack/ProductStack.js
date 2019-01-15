import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { headerWrapper, headerText, headerTitleStyle } from 'src/style/commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'react-native';

import ProductsList from 'src/screens/ProductsList';
import Product from 'src/screens/Product';

const ProductStack = createStackNavigator(
  {
    ProductsList: {
      screen: ProductsList,
      navigationOptions: {
        header: () => (
          <View style={headerWrapper}>
            <Text style={headerText}>All products</Text>
          </View>
        ),
        headerLeft: null,
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
  },
  {
    initialRouteName: 'ProductsList',
  }
);

export default ProductStack;
