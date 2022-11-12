import React, { useContext, useEffect } from 'react';
import { Mview, Mtext } from '../../util';
import { Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from '../../lib/stateContext';
import { useIsFocused } from '@react-navigation/native';
import { Colors, Images } from '../../Constants';
import { Fadeinout } from '../../util/animation';

export default function Home({ navigation }) {
  const IsFocused = useIsFocused();
  const { isPlaying, playSound, stopSound, pauseSound, resumeSound } = useContext(ThemeContext);

  useEffect(() => {
    const startup = async () => {
      await stopSound();
      await playSound();
    };
    if (IsFocused) {
      startup();
    }
  }, [IsFocused]);

  // clean up sound
  useEffect(() => {
    return async () => {
      await stopSound();
    };
  }, [IsFocused]);

  const { mainDark, mainDarkLight, mainLight, textDark } = Colors;

  return (
    <Mview class="flex flex-1 w-full" dark={mainDark}>
      <Mview class=" w-full h-12 flex flex-row items-center px-2 " dark={mainDarkLight}>
        {/* menu */}
        <TouchableOpacity>
          <Ionicons
            name="md-menu-outline"
            size={30}
            color={'white'}
            onPress={() => navigation.openDrawer()}
          />
        </TouchableOpacity>

        <Mtext class="text-xl font-bold ml-8" dark={textDark}>
          Radio Scoop FM
        </Mtext>
      </Mview>
      <Mview class=" items-center justify-center mt-10">
        <Mview class="rounded-full overflow-hidden">
          <Image source={Images.radioLogo} style={{ width: 150, height: 140 }} />
        </Mview>

        <Mtext class="text-3xl mt-5 font-semibold uppercase" dark={textDark}>
          Radio Scoop
        </Mtext>
        <Mtext class="text-slate-400 text-lg px-4  font-semibold text-center mt-8">
          راديو سكووب : اول راديو اون لاين في مصر بينقل المميزين من متدربيه الى الاذاعات ال FM
          الكبرى
        </Mtext>
      </Mview>
      {/* badges */}
      <Mview class="flex flex-row justify-center items-center mt-10">
        <Mview class="flex flex-row items-center justify-center bg-slate-400/25 rounded-full px-2 py-1 mr-2">
          <Mtext class="text-white text-sm font-semibold">راديو سكووب</Mtext>
        </Mview>
        <Mview class="flex flex-row items-center justify-center bg-slate-400/25 rounded-full px-2 py-1 mr-2">
          <Mtext class="text-white text-sm font-semibold">الاذاعة المباشرة</Mtext>
        </Mview>
      </Mview>

      {/* play button */}
      <Mview class="mt-5 h-5">
        {isPlaying ? (
          <Fadeinout>
            <Mtext class="text-white text-center">Playing...</Mtext>
          </Fadeinout>
        ) : null}
      </Mview>

      <Mview class="flex flex-1 justify-start mt-5 items-center">
        <TouchableOpacity
          onPress={() => {
            if (isPlaying) {
              pauseSound();
            } else {
              resumeSound();
            }
          }}
          className="scale-[1.4]"
        >
          <Mview class="items-center w-12  relative mr-4  ">
            <LinearGradient
              colors={LgStyle.colors}
              start={LgStyle.start}
              end={LgStyle.end}
              style={LgStyle.style}
              className=" opacity-50 absolute translate-x-1 "
            />
            <LinearGradient
              colors={LgStyle.colors}
              start={LgStyle.start}
              end={LgStyle.end}
              style={LgStyle.style}
              className="opacity-50 absolute translate-y-1 translate-x-0.5  "
            />
            <LinearGradient
              colors={LgStyle.colors}
              start={LgStyle.start}
              end={LgStyle.end}
              style={LgStyle.style}
              className=" opacity-50 "
            />
            <Mview class=" -translate-y-[36px] translate-x-0.5 scale-75">
              {isPlaying ? (
                <AntDesign name="pausecircle" size={24} color="#D91193" />
              ) : (
                <AntDesign name="playcircleo" size={24} color="white" />
              )}
            </Mview>
          </Mview>
        </TouchableOpacity>
      </Mview>
    </Mview>
  );
}

const LgStyle = {
  colors: ['#22DDF2', '#D91193'],
  start: { x: 0, y: 0 },
  end: { x: 0.9, y: 0.7 },
  style: { width: 50, height: 50, borderRadius: 50, marginTop: 20 },
};
