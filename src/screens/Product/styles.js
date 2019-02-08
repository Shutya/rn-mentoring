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
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  button: {
    marginBottom: 10,
    width: 160
  },
  lottieBlock: {
    width: '100%',
    alignItems: 'center'
  },
  lottie: {
    width: 400,
    height: 200
  }
});

export default styles;
