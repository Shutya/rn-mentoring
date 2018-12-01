import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TextInput} from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';

class Login extends Component {
  state = { login: '', password: '' };

  static navigationOptions = { header: null };

  onSubmit = () => {
    const {login, password} = this.state;
    !!login || !!password ? this.props.navigation.navigate('ProductsList') : alert('You shoul enter login and password');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              onChangeText={login => this.setState({ login })}
              value={this.state.login}
            />
            <TextInput
              placeholder='Password'
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <CustomButton
              style={styles.button}
              mod={'secondary'}
              onPress={this.onSubmit}
            >
              Login
            </CustomButton>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Login;