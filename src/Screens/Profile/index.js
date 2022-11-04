import React from 'react';
import { View, Text } from 'react-native';
import SwitchMode from '../../lib/SwitchMode';

const Profile = ({ navigation }) => {
  return (
    <View className=" h-full flex justify-center">
      <View className="flex items-center">
        <SwitchMode />
        <Text>Profile Screen</Text>
        <Text
          onPress={() => {
            navigation.navigate('Main');
          }}
          className="bg-blue-500 p-2 text-white rounded-3xl "
        >
          Back
        </Text>
      </View>
    </View>
  );
};

export default Profile;
