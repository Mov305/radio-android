import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Player from '../Screens/Player';
import Library from '../Screens/Library';
import { Colors, Images } from '../Constants';
import { Mview, Mtext } from '../util';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Categories from '../Screens/Categories';
import SearchResults from '../Screens/Search';

const { mainDarkLight, mainDark, textDark } = Colors;

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Library"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          display: 'none',
        },
        // hide the tab bar
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          header: () => <Header1 navigation={navigation} />,
        }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchResults}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Header1 = ({ navigation }) => {
  return (
    <Mview class="flex flex-row justify-between py-1 px-3 items-center" dark={mainDark}>
      <TouchableOpacity>
        <Ionicons
          name="ios-menu"
          size={24}
          color={'white'}
          onPress={() => navigation.openDrawer()}
        />
      </TouchableOpacity>
      <Mview class="flex flex-row items-center">
        <Mtext class="text-2xl mt-1 font-semibold" dark={textDark}>
          {' '}
          راديو سكووب
        </Mtext>
        <Image source={Images.radioLogo} style={{ width: 60, height: 50 }} />
      </Mview>
    </Mview>
  );
};
