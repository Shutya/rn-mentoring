import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NetInfo } from 'react-native';
import NetworkNotification from 'src/components/NetworkNotification';

import Login from 'src/screens/Login';
import ProductsList from 'src/screens/ProductsList';
import Product from 'src/screens/Product';
import Map from 'src/screens/Map';

const RootStack = createStackNavigator(
  {
    Login,
    ProductsList,
    Product,
    Map
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  state = {isModalVisible: false}

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.onChangeModalVisible);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.onChangeModalVisible);
  }

  onChangeModalVisible = isConnected => this.setState({ isModalVisible: !isConnected });

  onCloseModal = () => this.setState({ isModalVisible: false });

  render() {
    return <React.Fragment>
      <NetworkNotification isModalVisible={this.state.isModalVisible} onCloseModal={this.onCloseModal} />
      <AppContainer />
    </React.Fragment>;
  }
}
