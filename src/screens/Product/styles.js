import { StyleSheet } from 'react-native';
import { header, simpleText } from 'src/style/commonStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerWrapper: {
    padding: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    ...header,
    marginLeft: 30
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
