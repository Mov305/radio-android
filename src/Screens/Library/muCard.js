import { Mtext, Mview } from '../../util';
import React from 'react';
import { Images } from '../../Constants';
import { Image, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../lib/stateContext';

export default function MusicCard({ data, navigation }) {
  const { stopSound } = React.useContext(ThemeContext);
  return (
    <TouchableOpacity>
      <Mview class="flex flex-row mx-1 my-1 bg-slate-500/10 rounded-lg">
        <Mview class="flex flex-row items-center rounded-full w-12 justify-center h-12 mx-1 scale-90 bg-slate-600/25 p-2">
          <Image source={Images.Music} style={{ width: 30, height: 30 }} className="mt-1" />
        </Mview>
        <Mtext
          class="text-[#E7E7E7] text-base font-semibold p-3 text-right flex-1 "
          main={{
            onPress: async () => {
              await stopSound();
              navigation.navigate('Player', { data });
            },
          }}
        >
          الحلقة {data.title} من {data.category}
        </Mtext>
      </Mview>
    </TouchableOpacity>
  );
}
