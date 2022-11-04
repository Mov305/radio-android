import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Mview, Mtext } from '../../util';
import { ThemeContext } from '../../lib/stateContext';
const Home = ({ navigation }) => {
  const { dark, toggleTheme } = React.useContext(ThemeContext);

  return (
    <View>
      <Text
        className={`dark:text-white mt-5 ${dark ? 'text-white' : 'text-black'}`}
        onPress={() => toggleTheme()}
      >
        Home
      </Text>
      <Button
        onPress={() => {
          navigation.navigate('Profile');
        }}
        title="Go to Profile"
      ></Button>
      <Mtext
        common="text-2xl rounded-xl p-2 bg-gray-200"
        dark="text-white"
        light="text-black"
        main={{ onPress: () => toggleTheme(), style: { marginTop: 20 } }}
      >
        test
      </Mtext>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
