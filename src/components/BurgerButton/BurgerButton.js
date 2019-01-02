import React, { Component } from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.containerAnim = new Animated.Value(0);
    this.topBar = new Animated.Value(0);
    this.bottomBar = new Animated.Value(0);
    this.middleBarOpacity = new Animated.Value(1);
    this.bottomBarMargin = new Animated.Value(4);
  }

  componentDidUpdate() {
    if (this.props.drawerMovementDirection === 'opening') {
      this.animateOpen();
    } else if (this.props.drawerMovementDirection === 'closing') {
      this.animateClose();
    }
  }

  animateOpen() {
    Animated.parallel([
      Animated.spring(this.containerAnim, {
        toValue: 1
      }),
      Animated.spring(this.topBar, {
        toValue: .9
      }),
      Animated.spring(this.bottomBar, {
        toValue: .9
      }),
      Animated.spring(this.bottomBarMargin, {
        toValue: -10
      }),
      Animated.spring(this.middleBarOpacity, {
        toValue: 0,
        duration: 30
      })
    ]).start();
  }

  animateClose() {
    Animated.parallel([
      Animated.spring(this.containerAnim, {
        toValue: 0
      }),
      Animated.spring(this.topBar, {
        toValue: 0
      }),
      Animated.spring(this.bottomBar, {
        toValue: 0
      }),
      Animated.spring(this.bottomBarMargin, {
        toValue: 4
      }),
      Animated.spring(this.middleBarOpacity, {
        toValue: 1,
        duration: 600
      })
    ]).start();
  }

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.toggleDrawer}
      >
        <Animated.View style={[styles.wrapper, {
          transform: [
            {rotate: this.containerAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [
                '0deg', '360deg'
              ],
            })}
          ]}]}
        >
          <Animated.View style={[styles.arrow, {
            transform: [
              {rotate: this.topBar.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  '0deg', '-50deg'
                ],
              })}
            ]}]}
          />
          <Animated.View style={[styles.arrow, {
            opacity:this.middleBarOpacity,
            marginTop: 4}]}
          />
          <Animated.View style={[styles.arrow, {
            marginTop: this.bottomBarMargin,
            transform: [
              {rotate: this.bottomBar.interpolate({
                inputRange: [0, 1],
                outputRange: [
                  '0deg', '50deg'
                ],
              })}
            ]}]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}