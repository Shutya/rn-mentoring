import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';

class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    header: () => (<View style={styles.headerWrapper}>
      <Icon size={50} name={'map'} />
      <Text style={styles.headerText}>{navigation.getParam('name')}</Text>
    </View>)
  });

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
                onPress={() => this.props.navigation.navigate('Map', {name: navigation.getParam('name')})}
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
