import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TextInput} from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';

class Login extends Component {
  state = { username: '', password: '' };

  static navigationOptions = { header: null };

  onSubmit = () => {
    const {username, password} = this.state;
    (!username || !password)
      ? alert('You should enter username and password')
      : fetch('http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password})
      })
        .then(data => data.status === 200 ? data.json() : data.json().then(err => Promise.reject(err)))
        .then(data => typeof data === 'string' ? this.props.navigation.navigate('ProductsList') : Promise.reject())
        .catch(data => alert((data && data.message) || 'Something went wrong'));
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
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
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