import React from 'react';
import { Mtext, Mview } from '../../util';
import { Images } from '../../Constants';
import { Image, TouchableOpacity } from 'react-native';
import Main from './player';
import { Colors } from '../../Constants';

export default function Player({ navigation, route }) {
  const data = route.params.data;

  const { mainDark, mainLight, textDark } = Colors;
  return (
    <Mview class="flex-1" dark={mainDark}>
      <Mview class="flex flex-row justify-between py-1 px-3 items-center ">
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
      <Main data={data} />
    </Mview>
  );
}
