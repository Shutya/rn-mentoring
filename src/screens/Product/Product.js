import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';

class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    header: () => (<View style={styles.headerWrapper}>
      <Icon size={50} name={navigation.getParam('iconName')} />
      <Text style={styles.headerText}>{navigation.getParam('title')}</Text>
    </View>)
  });

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    Alert.alert(
      'Please confirm',
      'Do you want to go to the previous screen?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => this.props.navigation.goBack() },
      ]
    )
    return true;
  }

  render () {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <View>
          <ScrollView>
            <View style={styles.textContainer}>
              <Text style={styles.bodyText}>{'\t\t\t'}{navigation.getParam('text')} </Text>
            </View>
            <CustomButton
              style={styles.button}
              mod='secondary'
              onPress={() => this.props.navigation.navigate('ProductsList')}
            >
              All products
            </CustomButton>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Product;
