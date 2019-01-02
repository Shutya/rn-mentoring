import React, { Component } from 'react';
import { NetInfo, UIManager } from 'react-native';
import NetworkNotification from 'src/components/NetworkNotification';
import AppContainer from 'src/navigation/AppContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false }
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

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
