import React, { Component } from 'react';
import { NetInfo } from 'react-native';
import NetworkNotification from 'src/components/NetworkNotification';
import AppContainer from './AppContainer';

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
