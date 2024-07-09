import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Search = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20 }}>
      <View style={styles.header}>
        <Text style={styles.text}>MONO</Text>

        <View style={styles.subView}>
          <View style={styles.wishlist}>
            <Octicons name={'heart'} size={22} color={'#FF0000'} />
          </View>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icon/profile.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Text>Search</Text>
        <EvilIcons name={'search'} size={22} color={'#A4A4A4'} />
      </View>

      <View style={styles.products}>
        <View style={{ flex: 2, padding: 10, justifyContent: 'space-between' }}>
          <Text style={styles.discount}>30% off all new products </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 10, color: '#000' }}>Watch</Text>
            <AntDesign
              name={'arrowright'}
              size={12}
              color={'#000'}
              style={{ left: 2 }}
            />
          </View>
        </View>
        <Image
          source={require('../../assets/icon/chair3.png')}
          style={styles.chair1}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontFamily: 'Poppins-Medium',
          marginTop: 16,
        }}>
        Room Style Store
      </Text>

      <ImageBackground
        borderRadius={10}
        source={require('../../assets/icon/bed2.png')}
        resizeMode="cover"
        style={{
          height: 180,
          width: '65%',
          borderRadius: 12,

          alignSelf: 'flex-start',
        }}>
        <Text style={{ padding: 5, color: '#FFF' }}>Bedroom</Text>
      </ImageBackground>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',

    marginTop: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,

    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  subView: {
    flexDirection: 'row',
  },
  wishlist: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#FFE6E4',
    right: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  searchBar: {
    height: 35,
    width: 'auto',
    borderRadius: 16,
    backgroundColor: '#F9FAFB',

    marginTop: 20,
    justifyContent: 'space-between',
    padding: 8,
    flexDirection: 'row',
  },
  products: {
    height: 100,
    width: 'auto',
    borderRadius: 16,
    marginTop: 20,

    backgroundColor: '#FFF9E4',

    flexDirection: 'row',
  },
  discount: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  chair1: {
    height: 100,
    resizeMode: 'contain',
    backgroundColor: '#fff9e4',
    flex: 1,
  },
});
