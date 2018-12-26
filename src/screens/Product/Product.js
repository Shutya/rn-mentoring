import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';

class Product extends Component {
  render () {
    const { navigation } = this.props;
    const textObj = navigation.getParam('custom_attributes').find(item => item.attribute_code === 'description');
    return (
      <View style={styles.wrapper}>
        <View>
          <ScrollView>
            {textObj && <View style={styles.textContainer}>
              <Text style={styles.bodyText}>{'\t\t\t'}{textObj.value}</Text>
            </View>}
            <View style={styles.buttonsBlock}>
              <CustomButton
                style={styles.button}
                mod='secondary'
                onPress={() => this.props.navigation.navigate('ProductsList')}
              >
                All products
              </CustomButton>
              <CustomButton
                style={styles.button}
                mod='secondary'
                onPress={() => this.props.navigation.navigate('MapScreen', {name: navigation.getParam('name')})}
              >
                Map
              </CustomButton>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Product;
