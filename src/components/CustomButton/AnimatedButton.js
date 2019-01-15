import React from 'react';
import { ActivityIndicator, TouchableWithoutFeedback, Animated, View, LayoutAnimation } from 'react-native';
import styles from './styles';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 150
    }
    this.borderRadius = new Animated.Value(5);
    this.opacity = new Animated.Value(1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.animate(this.props.loading);
    }
  }

  animate(loading) {
    const borderRadius = loading ? 25 : 5;
    const opacity = loading ? 0 : 1;
    Animated.parallel([
      Animated.spring(this.borderRadius, {
        toValue: borderRadius,
        useNativeDriver: true
      }),
      Animated.spring(this.opacity, {
        toValue: opacity,
        useNativeDriver: true
      })
    ]).start();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ width: loading ? 50 : 150 });
  }

  render() {
    const {
      mod = 'primary',
      children,
      style = {},
      ...rest
    } = this.props;
    return (
      <View style={[style, {
        width: this.state.width,
      }]}>
        <TouchableWithoutFeedback {...rest}>
          <Animated.View
            style={[
              styles[mod],
              { borderRadius: this.borderRadius }
            ]}
          >
            {this.props.loading
              ? <ActivityIndicator />
              : <Animated.Text
                style={[
                  styles[`${mod}Text`],
                  { opacity: this.opacity }
                ]}
              >
                {children}
              </Animated.Text>
            }
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default CustomButton;
