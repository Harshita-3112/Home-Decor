import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyCart = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20}}>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign name={'arrowleft'} size={22} color={'#000'} />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            marginLeft: '33%',
          }}>
          My Cart
        </Text>
      </View>

      <View
        style={{
          height: 80,
          width: 'auto',
          borderRadius: 12,
          backgroundColor: '#F9FAFB',
          padding: 12,
          marginTop: 30,
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 40,
            width: 50,
            borderRadius: 4,
            backgroundColor: '#E8E8E8',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icon/chair2.png')}
            style={{
              height: 30,
              width: 35,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>

        <View style={{left: 40}}>
          <Text style={{color: '#000', fontFamily: 'Poppins-Regular'}}>
            White Classics
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 12}}>$33.00</Text>
            <Text style={{left: 16, fontSize: 12}}>$48.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({});
