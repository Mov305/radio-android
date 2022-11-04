import { View, Text, Animated } from 'react-native';
import React from 'react';
import { ThemeContext } from '../lib/stateContext';

export function Mtext(props) {
  const { dark } = React.useContext(ThemeContext);
  return (
    <Text {...props.main} className={`${props.class} ${dark ? props.dark : props.light}`}>
      {props.children}
    </Text>
  );
}

export function Mview(props) {
  const { dark } = React.useContext(ThemeContext);
  return (
    <View {...props.main} className={`${props.class} ${dark ? props.dark : props.light}`}>
      {props.children}
    </View>
  );
}

export function Mvanimated(props) {
  const { dark } = React.useContext(ThemeContext);
  return (
    <Animated.View {...props.main} className={`${props.class} ${dark ? props.dark : props.light}`}>
      {props.children}
    </Animated.View>
  );
}

export function Mtanimated(props) {
  const { dark } = React.useContext(ThemeContext);
  return (
    <Animated.Text {...props.main} className={`${props.class} ${dark ? props.dark : props.light}`}>
      {props.children}
    </Animated.Text>
  );
}
