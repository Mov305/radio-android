import React, { useEffect, useState } from 'react';
import { Images } from '../../Constants';
import { Mview, Mtext } from '../../util';
import {
  StatusBar,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Search from './search';
import PlayList from './playlist';

export default function Library({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://www.radio-scoop.com/api/Episodes');
        const json = await result.json();
        setData(json);
      } catch (e) {
        console.log(e);
      }
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <Mview class="bg-[#1A0938] flex-1 ">
      <StatusBar barStyle={'light-content'} />
      <Search navigation={navigation} />
      <PlayList navigation={navigation} />
      <Mtext onPress={() => console.log(data)}>click me</Mtext>
    </Mview>
  );
}
