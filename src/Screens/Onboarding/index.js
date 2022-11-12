import React from 'react';
import { Colors, Images } from '../../Constants';
import { Mview, Mtext } from '../../util';
import { StatusBar, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { LittersFadeIn } from '../../util/animation';
import { useIsFocused } from '@react-navigation/native';

export default function Onboarding({ navigation }) {
  const IsFocused = useIsFocused();
  const { mainDark, mainLight, textDark, textLight } = Colors;

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [IsFocused]);

  return (
    <Mview class={'flex-1 items-center justify-around '} dark={mainDark}>
      <StatusBar barStyle={'light-content'} />
      <Mview class=" items-center justify-center">
        <Image
          source={Images.radioScoop}
          style={{ width: 150, height: 140 }}
          className="rounded-full"
        />

        <Mview class="text-3xl mt-5 flex flex-row font-semibold ">
          {'Radio Scoop'.split('').map((letter, index) => (
            <LittersFadeIn key={index} order={index}>
              <Mtext class="text-3xl font-semibold " dark={textDark}>
                {letter}
              </Mtext>
            </LittersFadeIn>
          ))}
        </Mview>
        <Mtext class="text-slate-400 text-lg px-4  font-semibold text-center mt-8">
          راديو سكووب : اول راديو اون لاين في مصر بينقل المميزين من متدربيه الى الاذاعات ال FM
          الكبرى
        </Mtext>
      </Mview>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
