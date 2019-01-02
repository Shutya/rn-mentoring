import React from 'react';
import { ActivityIndicator, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from './styles';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    const { style = {} } = props;
    this.width = new Animated.Value(style.width || 150);
    this.borderRadius = new Animated.Value(5);
    this.opacity = new Animated.Value(1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.animate(this.props.loading);
    }
  }

  animate(loading) {
    const width = loading ? 50 : 150;
    const borderRadius = loading ? 25 : 5;
    const opacity = loading ? 0 : 1;
    Animated.parallel([
      Animated.spring(this.width, {
        toValue: width
      }),
      Animated.spring(this.borderRadius, {
        toValue: borderRadius
      }),
      Animated.spring(this.opacity, {
        toValue: opacity
      })
    ]).start();
  }

  render() {
    const {
      mod = 'primary',
      children,
      style = {},
      ...rest
    } = this.props;
    return (
      <Animated.View style={[style, {
        width: this.width
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
      </Animated.View>
    );
  }
}

export default CustomButton;
