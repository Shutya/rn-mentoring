import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TextInput, Alert} from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';
import {authenticate} from 'src/api/auth';

class Login extends Component {
  state = { username: '', password: '' };

  onChangeUsername = username => this.setState({ username  })

  onChangePassword = password => this.setState({ password })

  onSubmit = () => {
    const {username, password} = this.state;
    (!username || !password)
      ? Alert.alert('You should enter username and password')
      : authenticate({username, password})
        .then(data => this.props.navigation.navigate('ProductsList'))
        .catch(data => Alert.alert((data && data.message) || 'Something went wrong'));
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