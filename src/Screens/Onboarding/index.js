import React from 'react';
import { Images } from '../../Constants';
import { Mview, Mtext } from '../../util';
import { StatusBar, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function Onboarding({ navigation }) {
  return (
    <Mview class="bg-[#1A0938] flex-1 items-center justify-around">
      <StatusBar barStyle={'light-content'} />
      <Mview class=" items-center justify-center">
        <Image source={Images.Logo} style={{ width: 150, height: 140 }} />

        <Mtext class="text-3xl text-[#ED1BA3]  mt-5 font-semibold">Radio Scoop</Mtext>
        <Mtext class="text-[#d3d3db] text-lg px-4 mt-3 font-semibold text-center">
          راديو سكووب : اول راديو اون لاين في مصر بينقل المميزين من متدربيه الى الاذاعات ال FM
          الكبرى
        </Mtext>
      </Mview>
      <TouchableOpacity
        onPress={() => navigation.navigate('Library')}
      >
        <Mview class="items-center justify-center relative scale-125">
          <LinearGradient
            colors={LgStyle.colors}
            start={LgStyle.start}
            end={LgStyle.end}
            style={LgStyle.style}
            className="items-center justify-center opacity-50 absolute -top-10 "
          />
          <LinearGradient
            colors={LgStyle.colors}
            start={LgStyle.start}
            end={LgStyle.end}
            style={LgStyle.style}
            className="items-center justify-center opacity-50 absolute -left-3 "
          />
          <LinearGradient
            colors={LgStyle.colors}
            start={LgStyle.start}
            end={LgStyle.end}
            style={LgStyle.style}
            className="items-center justify-center opacity-50 absolute -right-3"
          />
          <AntDesign name="arrowright" size={20} color="#d3d3dbff" />
        </Mview>
      </TouchableOpacity>
    </Mview>
  );
}

const LgStyle = {
  colors: ['#22DDF2', '#D91193'],
  start: { x: 0, y: 0 },
  end: { x: 0.9, y: 0.7 },
  style: { width: 50, height: 50, borderRadius: 50, marginTop: 20 },
};
