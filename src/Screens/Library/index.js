import React, { useEffect, useState } from 'react';
import { Mview } from '../../util';
import { StatusBar, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Search from './search';
import PlayList from './playlist';
import Episodes from './ep';
import Player from './Player';
import { Colors } from '../../Constants';

export default function Library({ navigation }) {
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);

  const fetchData = async (key = '', page = 1) => {
    try {
      const result = await fetch(
        `https://radio-scoop.com/api/native/ep?search=${key}&page=${page}`,
      );
      const json = await result.json();
      setData(json);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCat = async () => {
    try {
      const result = await fetch('https://radio-scoop.com/api/native/cat');
      const json = await result.json();
      setCat(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
    fetchCat();
  }, []);

  const { mainDark, mainLight } = Colors;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Mview class="flex-1 " dark={mainDark}>
        <StatusBar barStyle={'light-content'} />
        <Search navigation={navigation} handleSearch={fetchData} />
        <ScrollView>
          <PlayList data={cat} navigation={navigation} />
          <Episodes data={data.episodes} navigation={navigation} />
        </ScrollView>
        <Player />
      </Mview>
    </TouchableWithoutFeedback>
  );
}
