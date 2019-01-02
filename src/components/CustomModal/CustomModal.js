import React from 'react';

import { View, Text } from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';
import { simpleText } from 'src/style/commonStyles';

const CustomModal = ({
  onResetError,
  error
}) => (
    <React.Fragment>
      <View style={styles.errorBackground}></View>
      <View style={styles.error}>
        <Text style={[simpleText, styles.errorText]}>{error}</Text>
        <CustomButton
          style={styles.button}
          mod={'primary'}
          onPress={onResetError}
        >
          Close
        </CustomButton>
      </View>
    </React.Fragment>
  );

export default CustomModal;