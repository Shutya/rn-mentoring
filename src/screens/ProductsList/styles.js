import { StyleSheet } from 'react-native';
import { header, simpleText, borderBottom } from 'src/style/commonStyles';

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center'
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
  },
  listLoader: {
    paddingVertical: 20
  }
});

export default styles;
