import React, { useEffect, useState } from 'react';
import { Mtext, Mview } from '../../util';
import { Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { useIsFocused } from '@react-navigation/native';
import { ThemeContext } from '../../lib/stateContext';

export default function Main({ data, navigation }) {
  const { title, img, author, category, link } = data;
  // const [sound, setSound] = useState(new Audio.Sound());
  // const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [duration, setDuration] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const Focused = useIsFocused();

  const { isPlaying, playSound, stopSound, pauseSound, resumeSound, sound, setPlayedEp } =
    React.useContext(ThemeContext);

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
      try {
        await stopSound();
        await playSound(link);
        setLoaded(false);
      } catch (e) {
        console.log(e);
      }
      // when sound is loaded set duration
    };
    if (Focused) {
      startup();
    }
  }, [Focused]);

  const handleSliderChange = async (value) => {
    if (sound._loaded) {
      await sound.setPositionAsync(value);
    }
  };

  const getData = async () => {
    if (!loaded) {
      await sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
          setDuration(status.durationMillis);
          setCurrentPosition(status.positionMillis);
        }
      });

      setLoaded(true);
    }
  };

  return (
    <Mview class=" ">
      <Mview class="flex justify-around items-center">
        <Mtext class="text-xl  text-slate-300  mt-8 mb-3 font-semibold">
          الحلقة {title} من {category}
        </Mtext>
        <Mview class=" flex flex-row items-center relative">
          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={['#22DDF2', '#D91193']}
            style={{ width: 220, height: 270 }}
            className="rounded-3xl absolute top-0 left-0 translate-x-2"
          />
          <Image
            source={{ uri: img }}
            style={{ width: 220, height: 270 }}
            className="rounded-3xl translate-y-2 border-4 border-[#1A0938]"
          />
        </Mview>
        {author && (
          <Mtext class="text-base  text-slate-300  mt-4 font-semibold">تقديم {author}</Mtext>
        )}
        <TouchableOpacity
          onPress={
            isPlaying
              ? () => {
                  pauseSound();
                }
              : () => {
                  sound._loaded ? resumeSound() : Alert.alert(' الرجاء الانتظار لحين تحميل الصوت');
                  getData();
                }
          }
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
        {loaded && (
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={duration ? currentPosition / duration : 0}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onSlidingComplete={
              sound._loaded &&
              ((value) => {
                handleSliderChange(value * duration);
              })
            }
          />
        )}
        {loaded && (
          <Mview class="">
            {duration > 0 && (
              <Mtext class="text-base  text-slate-300  mt-4 font-semibold">
                {Math.floor(currentPosition / 60000)}:{Math.floor((currentPosition / 1000) % 60)} /{' '}
                {Math.floor(duration / 60000)}:{Math.floor((duration / 1000) % 60)}
              </Mtext>
            )}
          </Mview>
        )}
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
