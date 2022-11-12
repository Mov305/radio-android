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

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: playedEp ? playedEp.link : 'https://mystation.micast.media/radio/8190/radio.mp3' },
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
    setPlayedEp(null);
  };

  const pauseSound = async () => {
    setIsPlaying(false);
    await sound.pauseAsync();
  };

  const resumeSound = async () => {
    setIsPlaying(true);
    await sound.playAsync();
  };

  const playEpisode = async (episode) => {
    await stopSound();
    setPlayedEp(episode);
    await playSound();
  };

  const context = {
    dark,
    toggleTheme,
    isPlaying,
    playSound,
    stopSound,
    pauseSound,
    resumeSound,
    playEpisode,
    playedEp,
  };

  return <ThemeContext.Provider value={context}>{props.children}</ThemeContext.Provider>;
}
