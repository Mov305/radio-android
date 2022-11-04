import React from 'react';
import { Images } from '../../Constants';
import { Mview, Mtext } from '../../util';
import { Image, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Search() {
  return (
    <>
      <Mview class="flex flex-row justify-end py-1 px-3 items-center">
        <Mtext class="text-2xl  text-[#ED1BA3]  mt-1 font-semibold"> راديو سكوب</Mtext>
        <Image source={Images.radioScoop} style={{ width: 60, height: 50 }} />
      </Mview>
      <Mview class="w-full p-2">
        <Mview class="rounded-full bg-[#361E60]  h-12 flex flex-row justify-between p-2 ">
          <Mview class="h-full w-10 flex justify-center items-center">
            <TouchableOpacity>
              <AntDesign name="search1" size={24} color="#A7A7A7" />
            </TouchableOpacity>
          </Mview>
          <TextInput
            textAlign="right"
            placeholder="ابحث عن برنامج"
            className="text-[#A7A7A7] text-lg font-semibold flex-1"
            placeholderTextColor="#A7A7A7"
            style={{ color: '#A7A7A7', fontSize: 16 }}
          />
        </Mview>
      </Mview>
    </>
  );
}
