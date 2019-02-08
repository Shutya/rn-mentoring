import { StyleSheet } from 'react-native';
import { header, simpleText, borderBottom } from 'src/style/commonStyles';

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center'
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
  },
  button: {
    width: 160,
    marginLeft: 20,
    marginTop: 20
  }
});

export default styles;
