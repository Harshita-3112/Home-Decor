import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useConfigStore from '../../store/configStore';

const Cart = () => {
  const cart = useConfigStore(state => state.cart);
  console.log('cart', cart);

  if (cart.length == 0) {
    return (
      <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#FFF'}}>
        <View
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name={'arrowleft'} size={22} color={'#000'} />
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
              marginLeft: '30%',
            }}>
            My Card
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <EvilIcons name={'heart'} size={80} color={'#FF0000'} />

          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
            }}>
            Cart is empty
          </Text>
          <Text style={{color: '#a4a4a4'}}>
            You don't have any products in the cart yet.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#FFF'}}>
      <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign name={'arrowleft'} size={22} color={'#000'} />
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            marginLeft: '30%',
          }}>
          My Card
        </Text>
      </View>
      <View
        style={{
          height: 80,
          width: 'auto',
          borderRadius: 12,
          backgroundColor: '#F9FAFB',
          padding: 12,
          //   justifyContent: 'center',
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
            source={{uri: cart.images[0]}}
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
            {cart.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 12}}>${cart.price}</Text>
            <Text style={{left: 16, fontSize: 12}}>$48.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
