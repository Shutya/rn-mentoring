import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

const CustomButton = ({
  mod = 'primary',
  children,
  style = {},
  ...rest
}) => (
  <View style={[styles[`${mod}Wrapper`], style]}>
    <TouchableWithoutFeedback {...rest}>
      <View style={styles[mod]}>
        <Text style={styles[`${mod}Text`]}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default CustomButton;
