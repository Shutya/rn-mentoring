import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const CustomButton = ({
  mod = 'primary',
  children,
  style = {},
  ...rest
}) => (
  <View style={{...styles[`${mod}Wrapper`], ...style }}>
    <TouchableHighlight {...rest}>
      <View style={styles[mod]}>
        <Text style={styles[`${mod}Text`]}>{children}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default CustomButton;
