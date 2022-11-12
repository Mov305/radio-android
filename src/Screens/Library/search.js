import React from 'react';
import { Images } from '../../Constants';
import { Mview, Mtext } from '../../util';
import { Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../Constants';

export default function Search({ navigation, handleSearch }) {
  const [search, setSearch] = React.useState('');

  const { mainDarkLight, mainLight, textDark } = Colors;

  return (
    <>
      <Mview class="w-full p-2">
        <Mview class="rounded-full h-12 flex flex-row justify-between p-2 " dark={mainDarkLight}>
          <Mview class="h-full w-10 flex justify-center items-center">
            <TouchableOpacity onPress={() => handleSearch(search)}>
              <AntDesign name="search1" size={24} color="#A7A7A7" />
            </TouchableOpacity>
          </Mview>
          <TextInput
            textAlign="right"
            placeholder="ابحث عن برنامج"
            className="text-[#A7A7A7] text-lg font-semibold flex-1"
            placeholderTextColor="#A7A7A7"
            style={{ color: '#A7A7A7', fontSize: 16 }}
            onChangeText={(text) => {
              setSearch(text);
            }}
            onSubmitEditing={() => handleSearch(search)}
            returnKeyType="search"
          />
        </Mview>
      </Mview>
    </>
  );
}
