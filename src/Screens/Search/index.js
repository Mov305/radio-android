import React from 'react';
import { Mtext, Mview } from '../../util';
import { Images } from '../../Constants';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../Constants';
import { ThemeContext } from '../../lib/stateContext';
import { useIsFocused } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import MusicCard from '../Library/muCard';

export default function SearchResults({ navigation, route }) {
  const { stopSound } = React.useContext(ThemeContext);
  const IsFocused = useIsFocused();
  const [searchResults, setSearchResults] = React.useState();
  const { author, name, img } = route.params.data;

  const fetchData = async (key) => {
    try {
      const result = await fetch(`https://radio-scoop.com/api/native/ep?search=${key}`);
      const json = await result.json();
      setSearchResults(json.episodes);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    (async () => {
      await stopSound();
      await fetchData(name);
    })();
  }, [IsFocused]);

  const { mainDark, mainLight, textDark } = Colors;
  return (
    <Mview class="flex-1" dark={mainDark}>
      <Mview class="flex flex-row justify-between py-1 px-3 items-center shadow-md ">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={Images.up}
            style={{ width: 25, height: 25 }}
            className="-rotate-90 mt-1 "
          />
        </TouchableOpacity>
        <Mview class="justify-end flex flex-row items-center">
          <Mtext class="text-2xl mt-1 font-semibold" dark={textDark}>
            {' '}
            راديو سكووب
          </Mtext>
          <Image source={Images.radioLogo} style={{ width: 60, height: 50 }} />
        </Mview>
      </Mview>
      <ScrollView>
        <Mview class="flex items-center mt-10">
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
          <Mtext
            class="text-xl font-semibold my-4 bg-slate-400/25 rounded-xl py-1 px-5"
            dark={textDark}
            main={{ onPress: () => console.log(route.params.data) }}
          >
            {name} - {author}
          </Mtext>
        </Mview>
        {searchResults ? (
          searchResults.map((item) => (
            <MusicCard key={item._id} data={item} navigation={navigation} />
          ))
        ) : (
          <Mview class="flex-1 items-center justify-center">
            <Mtext class="text-2xl font-semibold" dark={textDark}>
              لا يوجد نتائج
            </Mtext>
          </Mview>
        )}
      </ScrollView>
    </Mview>
  );
}
