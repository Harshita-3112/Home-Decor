import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ChairDetail = () => {
  const navigation = useNavigation();
  const handleCart = () => {
    navigation.navigate('MyCart');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name={'arrowleft'}
          size={22}
          color={'#000'}
          style={{ marginTop: 20 }}
        />
      </TouchableOpacity>

      {/* header View */}

      <View style={styles.header}>
        <Image
          source={require('../../assets/icon/chair3.png')}
          style={{ height: 180, width: 180, resizeMode: 'contain' }}
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
          <TouchableOpacity>
            <AntDesign name={'hearto'} size={16} color={'#FF0000'} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.text}>The Pink Panther</Text>
      <View style={{ flexDirection: 'row', }}>
        <Text style={{ color: '#000', fontSize: 12 }}>$23.00</Text>
        <Text style={{ left: 30, fontSize: 12 }}>$50.00</Text>
      </View>

      <View style={styles.rating}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name={'star'} size={15} color={'#FCD240'} />
          <View style={{ flexDirection: 'row', left: 14 }}>
            <Text style={{ fontSize: 11, color: 'black' }}>4.9 </Text>
            <Text style={{ fontSize: 11, color: '#a4a4a4' }}>Ratings</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 11, color: 'black', right: 18 }}>1456 </Text>
          <Text style={{ fontSize: 11, color: '#a4a4a4', right: 18 }}>Reviews</Text>
          <TouchableOpacity>
            <AntDesign name={'right'} size={12} color={'#A6A6A6'} style={{ alignSelf: 'center' }} />
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          fontSize: 18,
          color: '#000',
          fontFamily: 'Poppins-Medium',
          marginTop: 20,
        }}>
        Description
      </Text>
      <Text style={{ color: '#A4A4A4', fontFamily: 'Poppins-Regular', fontSize: 12 }}>
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
            marginTop: 70,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
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
    marginTop: 20
  },

  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Medium',
    marginTop: 10,
  },
  rating: {
    height: 40,
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
