import React, { useContext, useEffect } from 'react';
import { Mview, Mtext } from '../../util';
import { Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Svg, Circle } from 'react-native-svg';
import { Images } from '../../Constants';
import { Audio } from 'expo-av';
import { ThemeContext } from '../../lib/stateContext';
import { useIsFocused } from '@react-navigation/native';
import { Colors } from '../../Constants';

export default function Player({ navigation }) {
  const IsFocused = useIsFocused();
  const { isPlaying, playSound, stopSound, pauseSound, resumeSound } =
    useContext(ThemeContext);

  useEffect(() => {
    const startup = async () => {
      Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
        staysActiveInBackground: true,
        interruptionModeAndroid: 1,
        interruptionModeIOS: 1,
      });
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

  const { mainDark, mainDarkLight, mainLight } = Colors;

  return (
    <Mview
      class="absolute bottom-0 p-1 pt-2 flex  w-full items-center justify-center"
      dark={mainDark}
    >
      <Mview class="flex flex-row justify-start items-start w-11/12 h-[90px] translate-x-2  relative">
        <Mview class="h-20 w-10/12 justify-between items-end">
          <LinearGradient
            colors={['#22DDF2', '#D91193', '#D91193']}
            start={[0, 0]}
            end={[1, 1]}
            className=" w-10/12  h-1 rounded-l-full "
          />
          <LinearGradient
            colors={['#22DDF2', '#D91193', '#D91193']}
            start={[0, 0]}
            end={[1, 1]}
            className=" w-4/12 h-1 rounded-full"
          />
        </Mview>
        <Svg width="80" height="80">
          <Circle cx="0" cy="40" fill="transparent" r="38" strokeWidth="4" stroke="#D91193" />
        </Svg>
        <Mview
          class=" h-[74px] m-[3px] translate-x-[3px] w-11/12 absolute left-0 top-0 rounded-full flex flex-row justify-end items-center"
          dark={mainDarkLight}
        >
          <Mplayer navigation={navigation} />
          <TouchableOpacity
            onPress={() => {
              if (isPlaying) {
                pauseSound();
              } else {
                resumeSound();
              }
            }}
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
              <Mview class=" -translate-y-[36px] translate-x-0.5">
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
    </Mview>
  );
}

export const Mplayer = ({ navigation, data }) => {
  const img = data ? { uri: data.img } : Images.radioScoop;
  const title = data ? ` الحلقة ${data.title} من ${data.category}` : 'الاذاعة المباشرة راديو سكوب';
  return (
    <Mview class="flex flex-row justify-between items-center  flex-1 ">
      <Mview>
        <Image
          source={img}
          style={{ width: 50, height: 50 }}
          className="bg-indigo-200 rounded-full ml-3 opacity-80"
        />
      </Mview>
      <Mview class="flex flex-col justify-center items-center flex-1">
        <Mtext class="text-[#E7E7E7] text-sm  w-36 text-ellipsis text-center overflow-hidden font-bold ">
          {title}
        </Mtext>
      </Mview>
    </Mview>
  );
};

const LgStyle = {
  colors: ['#22DDF2', '#D91193'],
  start: { x: 0, y: 0 },
  end: { x: 0.9, y: 0.7 },
  style: { width: 50, height: 50, borderRadius: 50, marginTop: 20 },
};
