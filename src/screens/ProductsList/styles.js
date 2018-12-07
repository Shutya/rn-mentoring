import { StyleSheet } from 'react-native';
import { backgroundColor, borderColor } from 'src/style/variables';
import { header, simpleText, borderBottom } from 'src/style/commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor
  },
  headerTitleStyle: {
    textAlign: 'center',
    width: '100%',
    marginLeft: 0
  },
  headerStyle: {
    paddingHorizontal: 30
  },
  header: {
    ...header,
    ...borderBottom,
    textAlign: 'center',
    padding: 30
  },
  product: {
    ...borderBottom,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  productTitleContainer: {
    flexDirection: 'column',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    ...simpleText,
    marginLeft: 15
  }
});

export default styles;
