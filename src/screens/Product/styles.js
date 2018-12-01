import { StyleSheet } from 'react-native';
import { header, simpleText } from 'src/style/commonStyles';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    ...header,
    marginLeft: 30
  },
  textContainer: {
    width: '70%',
    paddingLeft: 40,
    paddingTop: 30,
    paddingBottom: 40
  },
  bodyText: simpleText,
  button: {
    paddingLeft: 40
  }
});

export default styles;
