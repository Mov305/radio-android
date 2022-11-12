import { Mtext, Mview } from '../../util';
import React from 'react';
import MusicCard from './muCard';
import { Fadeinout } from '../../util/animation';

export default function Episodes({ data, navigation }) {
  return (
    <Mview class="mb-28 mx-2">
      <Mtext class="text-[#E7E7E7] text-lg font-semibold p-3"> الحلقات المضافة حديثاً</Mtext>
      {data ? (
        data.map((item) => <MusicCard data={item} key={item._id} navigation={navigation} />)
      ) : (
        <Mview>
          <Fadeinout>
            <Mview class="flex flex-row mx-1 my-1 bg-slate-500/10 rounded-lg">
              <Mview class="flex flex-row items-center rounded-full w-12 justify-center h-12 mx-1 scale-90 bg-slate-600/25 p-2"></Mview>
            </Mview>
            <Mview class="flex flex-row mx-1 my-1 bg-slate-500/10 rounded-lg">
              <Mview class="flex flex-row items-center rounded-full w-12 justify-center h-12 mx-1 scale-90 bg-slate-600/25 p-2"></Mview>
            </Mview>
            <Mview class="flex flex-row mx-1 my-1 bg-slate-500/10 rounded-lg">
              <Mview class="flex flex-row items-center rounded-full w-12 justify-center h-12 mx-1 scale-90 bg-slate-600/25 p-2"></Mview>
            </Mview>
          </Fadeinout>
        </Mview>
      )}
    </Mview>
  );
}
