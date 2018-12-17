import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from 'src/components/CustomButton';
import styles from './styles';
import {getProducts} from 'src/api/product';
import { headerTitleStyle } from 'src/style/commonStyles';

class ProductsList extends Component {
  static navigationOptions = {
    title: 'Products',
    headerLeft: null,
    headerTitleStyle
  };

  state = {items: [], isRefreshing: false, page: 1, loaded: false, isAllLoaded: false}

  componentDidMount() {
    this.loadUsers();
  };

  renderItem = ({ item }) => <View style={styles.product}>
    <View style={styles.productTitleContainer}>
      <Icon size={17} name={'map'} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
    <CustomButton
      mod='arrowRight'
      onPress={() => this.props.navigation.navigate('Product', item)}
    >
      <Icon size={25} name={'angle-right'} />
    </CustomButton>
  </View>

  loadUsers = () => {
    getProducts(this.state.page)
      .then(data => {
        const { isAllLoaded, page, items } = this.state;
        const newItems = page === 1 ? data.items : items.concat(data.items);
        !isAllLoaded && this.setState({
          items: newItems,
          page: page + 1,
          isRefreshing: false,
          loaded: true,
          isAllLoaded: newItems.length >= data.total_count
        })
      })
  };

  onRefresh = () => {
    this.setState({
      page: 1,
      isRefreshing: true,
      isAllLoaded: false
    }, () => {
      this.loadUsers();
    });
  };

  onEndReached = () => {
    !this.state.isAllLoaded && this.loadUsers();
  };

  render () {
    const {items, isRefreshing, loaded} = this.state;
    return (
      loaded
        ? <FlatList
          data={items}
          renderItem={this.renderItem}
          keyExtractor={item => `productId-${item.id}`}
          refreshing={isRefreshing}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
        />
        : <View style={styles.loaderContainer}><ActivityIndicator size="large"/></View>
    );
  }
}

export default ProductsList;