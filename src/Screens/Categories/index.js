import React from 'react';
import { Mtext, Mview } from '../../util';
import { Images } from '../../Constants';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../Constants';
import { ThemeContext } from '../../lib/stateContext';
import { useIsFocused } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import CatCard from '../Library/catCard';

export default function Categories({ navigation }) {
  const { stopSound } = React.useContext(ThemeContext);
  const IsFocused = useIsFocused();
  const [cat, setCat] = React.useState(null);

  const scrollRef = React.useRef(null);

  const fetchCat = async (page = 1) => {
    try {
      const result = await fetch('https://radio-scoop.com/api/native/cat?page=' + page);
      const json = await result.json();
      setCat(json);
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    stopSound();
    fetchCat();
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
      <ScrollView ref={scrollRef}>
        <Mtext
          class="text-xl text-center mt-5 font-semibold bg-slate-400/20 rounded-2xl "
          dark={textDark}
        >
          {' '}
          برنامج راديو سكووب
        </Mtext>
        <Mview class="my-5">
          {cat && (
            <Mview class="flex flex-row flex-wrap justify-center">
              {cat.categories.map((item, index) => (
                <CatCard key={index} item={item} navigation={navigation} />
              ))}
            </Mview>
          )}
        </Mview>
        {/* making the pagnation */}
        <Mview class="flex flex-row justify-center items-center bg-slate-100 mb-8" dark={mainDark}>
          {cat && (
            <Mview class="flex flex-row justify-center items-center  ">
              {cat.pagenateArr.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    await fetchCat(item);
                    // to scroll to the top of the page
                    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
                  }}
                >
                  <Mtext
                    class="text-xl rounded-lg bg-slate-400/25 p-2 font-semibold mx-2"
                    dark={textDark}
                  >
                    {item}
                  </Mtext>
                </TouchableOpacity>
              ))}
            </Mview>
          )}
        </Mview>
      </ScrollView>
    </Mview>
  );
}
