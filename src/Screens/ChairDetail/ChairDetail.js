import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const ChairDetail = () => {
  const navigation = useNavigation();
  const handleCart = () => {
    navigation.navigate('MyCart');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20}}>
      <AntDesign
        name={'arrowleft'}
        size={22}
        color={'#000'}
        style={{marginTop: 20}}
      />

      {/* header View */}

      <View style={styles.header}>
        <Image
          source={require('../../assets/icon/chair3.png')}
          style={{height: 180, width: 180, resizeMode: 'contain'}}
        />
        <View
          style={{
            backgroundColor: '#FFE6E4',
            height: 36,
            width: 36,
            borderRadius: 18,
            position: 'absolute',
            top: 8,
            right: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name={'hearto'} size={16} color={'#FF0000'} />
        </View>
      </View>

      <Text style={styles.text}>The Pink Panther</Text>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Text style={{color: '#000'}}>$23.00</Text>
        <Text style={{left: 30}}>$50.00</Text>
      </View>

      <View style={styles.rating}>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name={'star'} size={18} color={'#FCD240'} />
          <Text>4.9 Ratings</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{right: 12}}>1456 Reviews</Text>
          <AntDesign name={'right'} size={20} color={'#A6A6A6'} />
        </View>
      </View>

      <Text
        style={{
          fontSize: 22,
          color: '#000',
          fontFamily: 'Poppins-Medium',
          marginTop: 15,
        }}>
        Description
      </Text>
      <Text style={{color: '#A4A4A4', fontFamily: 'Poppins-Regular'}}>
        Comfortable, made of very high quality materials with a smooth texture.
        The interior of the sofa is made of expensive wood with a high service
        life.
      </Text>

      <TouchableOpacity onPress={handleCart}>
        <View
          style={{
            height: 50,
            width: 'auto',
            borderRadius: 10,
            backgroundColor: '#FCD240',
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Poppins-SemiBold',
            }}>
            Add to cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChairDetail;

const styles = StyleSheet.create({
  header: {
    height: 260,
    width: 'auto',
    borderRadius: 12,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  rating: {
    height: 50,
    width: 'auto',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 10,
    alignItems: 'center',
  },
});
