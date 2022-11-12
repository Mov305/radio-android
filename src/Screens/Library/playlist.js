import React from 'react';
import { Mtext, Mview } from '../../util';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native';
import CatCard from './catCard';
import { Fadeinout } from '../../util/animation';

export default function PlayList({ navigation, data }) {
  return (
    <Mview>
      <Mview class="flex flex-row justify-between items-center p-3">
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <AntDesign name="indent-left" size={24} color="#E7E7E78f" />
        </TouchableOpacity>
        <Mtext class="text-[#E7E7E7] text-lg font-semibold">أحدث البرامج</Mtext>
      </Mview>
      {data.categories ? (
        <FlatList
          data={data.categories.slice(0, 10)}
          renderItem={({ item, index }) => (
            <CatCard item={item} index={index} navigation={navigation} />
          )}
          keyExtractor={(item) => item._id}
          horizontal
        />
      ) : (
        <Mview class="justify-around items-center flex flex-row">
          <Fadeinout>
            <Mview class="flex flex-row rounded-2xl justify-between items-center flex-1 h-52 w-40 bg-slate-500/25"></Mview>
          </Fadeinout>
          <Fadeinout>
            <Mview class="flex flex-row rounded-2xl justify-between items-center flex-1 h-52 w-40 bg-slate-500/25"></Mview>
          </Fadeinout>
        </Mview>
      )}
    </Mview>
  );
}
