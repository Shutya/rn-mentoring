import React, { Component } from 'react';
import { Text, View, ScrollView, LayoutAnimation } from 'react-native';
import PushNotification from 'react-native-push-notification';
import CustomModal from 'src/components/CustomModal';
import LottieView from 'lottie-react-native';
import { default as CustomButton, AnimatedButton } from 'src/components/CustomButton';
import styles from './styles';
import { getFromStorage } from 'src/helpers/asyncStorage';
import { addToCart, getFromCart } from 'src/api/product';

class Product extends Component {
  state = {error: null, loading: false};

  componentDidMount () {
    PushNotification.configure({
      onNotification: () => this.props.navigation.navigate('Cart'),
    });
  }

  navigateToList = () => this.props.navigation.navigate('ProductsList');

  navigateToCart = () => this.props.navigation.navigate('Cart');

  changeError(error) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ error });
  }

  onResetError = () => this.changeError(null);

  addToCart = async () => {
    this.setState({ loading: true });
    try {
      const token = await getFromStorage('token');
      const item = await addToCart(token, this.props.navigation.getParam('sku'));
      const items = await getFromCart(token);
      this.setState({ loading: false });
      PushNotification.localNotification({
        title: `Product ${item.name} added to cart`,
        message: `New product in cart. Total amount: ${items.length}`,
        smallIcon: 'misha',
        largeIcon: 'misha'
      });
    } catch (e) {
      this.setState({ loading: false });
      this.changeError(e.message);
    }
  }

  render () {
    const { navigation } = this.props;
    const textObj = (navigation.getParam('custom_attributes') || []).find(item => item.attribute_code === 'description');
    return (
      <View style={styles.wrapper}>
        <View>
          <ScrollView>
            <View style={styles.lottieBlock}>
              <LottieView
                style={styles.lottie}
                source={require('./animation.json')}
                autoPlay
                loop
              />
            </View>
            {textObj && <View style={styles.textContainer}>
              <Text style={styles.bodyText}>{'\t\t\t'}{textObj.value}</Text>
            </View>}
            <View style={styles.buttonsBlock}>
              <AnimatedButton
                style={styles.button}
                mod='primary'
                onPress={this.addToCart}
                loading={this.state.loading}
              >
                Add to cart
              </AnimatedButton>
              <CustomButton
                style={styles.button}
                mod='secondary'
                onPress={this.navigateToList}
              >
                All products
              </CustomButton>
              <CustomButton
                style={styles.button}
                mod='secondary'
                onPress={this.navigateToCart}
              >
                Go to cart
              </CustomButton>
            </View>
          </ScrollView>
        </View>
        {this.state.error && <CustomModal
          error={this.state.error}
          onResetError={this.onResetError}
        />}
      </View>
    );
  }
}

export default Product;
