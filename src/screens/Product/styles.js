import { StyleSheet } from 'react-native';
import { simpleText } from 'src/style/commonStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  textContainer: {
    width: '70%',
    padding: 40
  },
  bodyText: simpleText,
  buttonsBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: 160
  }
});

export default styles;
