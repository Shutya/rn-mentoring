import { StyleSheet, Dimensions } from 'react-native';
import { borderColor } from 'src/style/variables';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    marginTop: 15
  },
  errorBackground: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    opacity: 0.5,
    backgroundColor: 'black'
  },
  error: {
    position: 'absolute',
    alignItems: 'center',
    width: width / 2,
    left: width / 4,
    top: '40%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    borderColor,
    padding: 10
  },
  errorText: {
    textAlign: 'center'
  }
});

export default styles;