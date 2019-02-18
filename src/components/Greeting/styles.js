import { StyleSheet } from 'react-native';
import { notificationBG } from 'src/style/variables';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 30,
    backgroundColor: notificationBG
  }
});

export default styles;