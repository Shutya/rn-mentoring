import {StyleSheet} from 'react-native';
import {backgroundColor, borderColor } from 'src/style/variables';
import {header, simpleText} from 'src/style/commonStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor,
    position: 'relative'
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40
  },
  logo: {
    width: '50%',
    marginBottom: 30,
    marginTop: '10%'
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  loginText: {
    ...header,
    textAlign: 'center',
    marginBottom: 35
  },
  textInput: {
    ...simpleText,
    width: '100%',
    textAlign: 'center',
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    borderColor,
    borderRadius: 3
  }
});

export default styles;