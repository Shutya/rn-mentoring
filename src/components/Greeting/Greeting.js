import React from 'react';
import { Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import styles from './styles';

const brand = DeviceInfo.getBrand();

const Greeting = ({
  onCloseGreeting
}) => (
  <View style={styles.wrapper}>
    <Text>Hello on your device "{brand}"</Text>
    <Text onPress={onCloseGreeting}>Close</Text>
  </View>
);

export default Greeting;