import {headerFont, darkHeaderColor, simpleTextFont, simpleTextColor, borderColor} from './variables';

export const header = {
  fontFamily: headerFont,
  color: darkHeaderColor,
  fontSize: 40,
  letterSpacing: 2
};

export const simpleText = {
  fontFamily: simpleTextFont,
  color: simpleTextColor
};

export const borderBottom = {
  borderBottomWidth: 1,
  borderBottomColor: borderColor
}

export const headerTitleStyle = {
  textAlign: 'center',
  width: '100%',
  marginLeft: 0
}

export const headerWrapper = {
  padding: 30,
  flexDirection: 'row',
  alignItems: 'center'
};

export const headerText = {
  ...header,
  marginLeft: 30
};
