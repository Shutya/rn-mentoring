import {StyleSheet} from 'react-native';
import { primaryButtonColor, secondaryButtonColor, simpleTextColor, buttonFont } from 'src/style/variables';

const commonModStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 50,
  width: '100%',
  borderRadius: 5
}

const commonModTextStyles = {
  fontFamily: buttonFont,
  fontSize: 20,
  color: simpleTextColor,
  letterSpacing: 2
}

const styles = StyleSheet.create({
  primaryWrapper: {
    width: '50%'
  },
  secondaryWrapper: {
    width: '50%'
  },
  primary: {
    ...commonModStyles,
    backgroundColor: primaryButtonColor,
  },
  primaryText: {
    ...commonModTextStyles
  },
  secondary: {
    ...commonModStyles,
    backgroundColor: secondaryButtonColor,
  },
  secondaryText: {
    ...commonModTextStyles,
  },
  arrowRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15
  }
});

export default styles;