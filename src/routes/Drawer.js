import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Onboarding from '../Screens/Onboarding';
import Tabs from './Tabs';
import { Mtext, Mview } from '../util';
import { Colors, Images } from '../Constants';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Linking } from 'react-native';

const Nav = createDrawerNavigator(); // Drawer Navigator

export default function Navs() {
  return (
    <Nav.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        // drawer menu style
        drawerStyle: {
          backgroundColor: '#1F2937',
        },
        drawerLabelStyle: {
          color: '#E7E7E7',
        },
      }}
      drawerContent={(props) => {
        // get the current route
        const currentRoute = props.state.routes[props.state.index].name;
        return (
          <DrawerContentScrollView {...props}>
            <Mview class="justify-center items-center flex">
              <Image source={Images.radioLogo} style={{ width: 100, height: 100 }} />
            </Mview>

            <Mview class="">
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              >
                <Mtext
                  class={`text-xl p-1 my-1 font-semibold ${
                    currentRoute == 'Home' ? 'bg-slate-400/25' : ''
                  } `}
                  dark={Colors.textDark}
                >
                  {' '}
                  Home
                </Mtext>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Lib');
                }}
              >
                <Mtext
                  class={`text-xl p-1 my-1 font-semibold ${
                    currentRoute == 'Lib' ? 'bg-slate-400/25' : ''
                  } `}
                  dark={Colors.textDark}
                >
                  {' '}
                  Library
                </Mtext>
              </TouchableOpacity>
            </Mview>
            {/* reach through whatsup and the website*/}
            <Mview class="mt-4 border-t border-t-slate-400">
              <Mtext class="text-xl p-1 my-1 font-semibold" dark={Colors.textDark}>
                {' '}
                Reach through
              </Mtext>
              <Mview class="flex gap-4 p-1">
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://wa.me/201114510001');
                  }}
                  className="flex flex-row justify-between pr-16 items-center"
                >
                  <Mtext class="text-base p-1 my-1 font-semibold" dark={Colors.textDark}>
                    {' '}
                    Whatsapp number
                  </Mtext>
                  <Ionicons name="logo-whatsapp" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL('https://radio-scoop.com');
                  }}
                  className="flex flex-row justify-between pr-16 items-center"
                >
                  <Mtext class="text-base p-1 my-1 font-semibold" dark={Colors.textDark}>
                    {' '}
                    Website
                  </Mtext>

                  <AntDesign name="chrome" size={20} color="white" />
                </TouchableOpacity>
              </Mview>
            </Mview>
          </DrawerContentScrollView>
        );
      }}
    >
      <Nav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Nav.Screen
        name="Lib"
        component={Tabs}
        options={{
          headerShown: false,
          gestureEnabled: true,
          drawerLabel: 'Library',
        }}
      />

      <Nav.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          gestureEnabled: true,

          // hide from the drawer

          drawerLabel: () => null,
        }}
      />
    </Nav.Navigator>
  );
}
