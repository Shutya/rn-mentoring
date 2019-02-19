import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import CustomButton from 'src/components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { getFromCart } from 'src/api/product';
import { getFromStorage } from 'src/helpers/asyncStorage';

class Cart extends Component {
  state = { items: [], loaded: false };

  navigateToList = () => this.props.navigation.navigate('ProductsList');

  componentDidMount() {
    this.loadCart();
  };

  loadCart = async () => {
    try {
      const token = await getFromStorage('token');
      const items = await getFromCart(token);
      this.setState({ loaded: true, items });
    } catch (e) {
      console.log(e);
    }
  };

  renderItem = (item) => (
    <View key={item.item_id} style={styles.product}>
      <View style={styles.productTitleContainer}>
        <Icon size={17} name={'map'} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </View>
  );

  render() {
    const { loaded, items } = this.state;
    return (
      loaded
        ? <ScrollView>
          <React.Fragment>
            {items.map(item => this.renderItem(item))}
            <CustomButton
              style={styles.button}
              mod='secondary'
              onPress={this.navigateToList}
            >
              All products
            </CustomButton>
          </React.Fragment>
        </ScrollView>
        : <View style={styles.loaderContainer}><ActivityIndicator size="large" /></View>
    );
  }
}

export default Cart;