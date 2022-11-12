import React from 'react';
import { Mview, Mtext } from '../../util';
import { Image, TouchableOpacity } from 'react-native';
import { Images } from '../../Constants';

export default function CatCard({ item, index, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Search', { data: item });
      }}
    >
      <Mview class={`flex flex-col items-center relative ${index === 0 ? 'ml-3' : 'ml-0'}`}>
        <Mview class=" scale-75 bg-slate-600/25 p-1 absolute right-0 mr-3 rounded-full z-30">
          <Image source={Images.heart} style={{ width: 30, height: 30 }} className="" />
        </Mview>
        <Image
          source={{ uri: item.img }}
          style={{ width: 160, height: 200 }}
          className="rounded-xl overflow-hidden mx-4"
        />
        <Mtext class="text-[#E7E7E7] text-xs w-36 text-ellipsis text-center overflow-hidden -translate-y-6 font-semibold mt-2 bg-slate-800 border border-slate-700 rounded-full">
          {item.name}
        </Mtext>
      </Mview>
    </TouchableOpacity>
  );
}
