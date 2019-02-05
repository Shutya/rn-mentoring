import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TextInput, LayoutAnimation, Vibration} from 'react-native';
import CustomModal from 'src/components/CustomModal';
import {AnimatedButton} from 'src/components/CustomButton';
import Greeting from 'src/components/Greeting';
import styles from './styles';
import {authenticate} from 'src/api/auth';
import {flow} from 'src/helpers/lodash';
import {putIntoStorage, getFromStorage} from 'src/helpers/asyncStorage';

class Login extends Component {
  state = { username: '', password: '', loading: false, isStorageChecked: false, isGreetingOpened: true };

  componentDidMount() {
    getFromStorage('isLogined')
      .then((isLogined) => isLogined === 'true' ? this.props.navigation.navigate('Drawer') : Promise.reject())
      .catch(() => this.setState({isStorageChecked: true}));
  }

  onChangeUsername = username => this.setState({ username });

  onChangePassword = password => this.setState({ password });

  onToggleLoading = () => this.setState({ loading: !this.state.loading });

  onStoreLogin = () => putIntoStorage('isLogined', 'true');

  changeError(error) {
    error && Vibration.vibrate(500);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ error });
  }

  onResetError = () => {
    this.changeError(null);
  }

  onSubmit = () => {
    const {username, password} = this.state;
    if (!username || !password) {
      this.changeError('You should enter username and password');
    } else if (!this.state.loading) {
      this.onToggleLoading();
      authenticate({ username, password })
        .then(flow([() => this.props.navigation.navigate('Drawer'), this.onStoreLogin, this.onToggleLoading]))
        .catch(flow([data => this.changeError((data && data.message) || 'Something went wrong'), this.onToggleLoading]));
    }
  }

  onCloseGreeting = () => {
    this.setState({ isGreetingOpened: false });
  }

  render() {
    return (this.state.isStorageChecked &&
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.isGreetingOpened && <Greeting onCloseGreeting={this.onCloseGreeting} />}
          <Image
            resizeMode={'contain'}
            style={styles.logo}
            source={require('assets/img/logo.png')}
          />
          <Text style={styles.loginText}>Please log in!</Text>
          <View style={styles.form}>
            <TextInput
              placeholder='Login'
              style={styles.textInput}
              onChangeText={this.onChangeUsername}
              value={this.state.username}
            />
            <TextInput
              placeholder='Password'
              textContentType='password'
              style={styles.textInput}
              onChangeText={this.onChangePassword}
              value={this.state.password}
            />
            <AnimatedButton
              style={styles.button}
              mod={'secondary'}
              onPress={this.onSubmit}
              loading={this.state.loading}
            >
              Login
            </AnimatedButton>
          </View>
        </ScrollView>
        {this.state.error && <CustomModal
          error={this.state.error}
          onResetError={this.onResetError}
        />}
      </View>
    );
  }
}

export default Login;