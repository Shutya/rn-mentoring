import React from 'react';
import { View, Text, Modal } from 'react-native';
import Button from '../CustomButton';
import { header, simpleText } from 'src/style/commonStyles';
import styles from './styles';

const NetworkNotification = ({ isModalVisible, onCloseModal}) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={isModalVisible}
    onRequestClose={onCloseModal}
  >
    <View style={styles.wrapper}>
      <Text style={[styles.header, header]}>Internet connection</Text>
      <Text style={[styles.text, simpleText]}>Your connection has been lost. Please check your settings.</Text>

      <Button
        mod='primary'
        onPress={onCloseModal}>
        Close
      </Button>
    </View>
  </Modal>
);

export default NetworkNotification;