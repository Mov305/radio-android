import React from 'react';
import { Animated, View, Text } from 'react-native';

function Fadeinout(props) {
  const [fadeAnim] = React.useState(new Animated.Value(0.2)); // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

function LittersFadeIn(props) {
  const [fadeAnim] = React.useState(new Animated.Value(0)); // Initial value for opacity: 0
  const { children, style, order } = props;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: order * 100,
    }).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {children}
    </Animated.View>
  );
}

export { Fadeinout, LittersFadeIn };
