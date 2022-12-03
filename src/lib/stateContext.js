import React from 'react';
import { Audio } from 'expo-av';

export const ThemeContext = React.createContext();

export default function StateContext(props) {
  const [dark, setDark] = React.useState(true);
  const toggleTheme = () => {
    setDark(!dark);
  };

  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [playedEp, setPlayedEp] = React.useState();

  const playSound = async (Link) => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: Link ? Link : 'https://mystation.micast.media/radio/8190/radio.mp3' },
      { shouldPlay: true },
    );
    setIsPlaying(true);
    setSound(sound);
    await sound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setIsPlaying(false);
    }
  };

  const pauseSound = async () => {
    setIsPlaying(false);
    await sound.pauseAsync();
  };

  const resumeSound = async () => {
    setIsPlaying(true);
    await sound.playAsync();
  };

  const context = {
    dark,
    toggleTheme,
    isPlaying,
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    playedEp,
    sound,
    setPlayedEp,
  };

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>;
}
