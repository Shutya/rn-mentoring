import React, {Component} from 'react';
import {View, Linking} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { headerTitleStyle } from 'src/style/commonStyles';

class Map extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.getParam('name')} Map`,
    headerLeft: null,
    headerTitleStyle
  });

  onTapMarker = () => Linking.openURL('tel://+123456789');

  render () {
    return <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
          }}
          title={this.props.navigation.getParam('name')}
          description={'Call us please'}
          onPress={this.onTapMarker}
        />
      </MapView>
    </View>;
  }
}

export default Map;