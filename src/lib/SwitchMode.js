import React from 'react';
import { Animated } from 'react-native';
import { ThemeContext } from './stateContext';

const SwitchMode = () => {
  const { dark, toggleTheme } = React.useContext(ThemeContext);
  const progress = React.useRef(new Animated.Value(0)).current;

  const moveRight = (dark) => {
    toggleTheme();
    Animated.spring(progress, {
      toValue: dark ? 0 : 15,
      useNativeDriver: false,
      duration: 200,
    }).start();
  };
  return (
    <Animated.View className="flex items-center w-12 h-8 bg-slate-400 rounded-full relative ">
      <Animated.Text
        style={{ right: progress }}
        onPress={() => moveRight(dark)}
        className={`m-1 rounded-full h-6 w-6 absolute transition-all ease-in-out duration-300  ${
          dark ? ' bg-gray-300' : ' bg-yellow-100'
        }`}
      ></Animated.Text>
    </Animated.View>
  );
};

export default SwitchMode;
