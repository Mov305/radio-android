import React from 'react';
import { Mtext, Mview } from '../../util';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PlayList({ navigation }) {
  return (
    <Mview>
      <Mview class="flex flex-row justify-between items-center p-3">
        <TouchableOpacity onPress={() => navigation.navigate('Playlist')}>
          <AntDesign name="indent-left" size={24} color="#E7E7E78f" />
        </TouchableOpacity>
        <Mtext class="text-[#E7E7E7] text-lg font-semibold"> الحلقات المضافة حديثاً</Mtext>
      </Mview>
    </Mview>
  );
}
