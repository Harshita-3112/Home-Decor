import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const FilterEditProfile = ({title, icon, righticon, value, onChange}) => {
  return (
    <View
      style={{
        backgroundColor: '#F9FAFB',
        height: 50,

        borderRadius: 12,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        alignContent: 'center',
      }}>
      {icon}

      <TextInput
        placeholder={title}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={'#A4A4A4'}
        style={{
          paddingHorizontal: 20,
          width: '80%',
        }}
      />

      {righticon}
    </View>
  );
};

export default FilterEditProfile;

const styles = StyleSheet.create({});
