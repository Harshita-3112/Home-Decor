import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FilterButton from '../../components/FilterButton/FilterButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import useConfigStore from '../../store/configStore';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const cart = useConfigStore(state => state.cart);
  const setCart = useConfigStore(state => state.setCart);

  const renderProducts = ({ item, index }) => {
    return (
      <FilterButton item={item} image={item.thumbnail} title={item.title} />
    );
  };

  const navigation = useNavigation();

  const handleChair = () => {
    navigation.navigate('ChairDetail');
  };

  const handleLogOut = () => {
    auth().signOut();
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const getProducts = async () => {
    try {
      await axios({
        method: 'GET',
        url: 'https://dummyjson.com/products',
      }).then(response => {
        setProducts(response.data.products);
        setLoading(false);
      });
    } catch (error) {
      console.log('error here', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  if (loading) {
    return <ActivityIndicator size={30} style={{ marginTop: '70%' }} />;
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20 }}>
      {/* <StatusBar barStyle={'light-content'} /> */}
      {/* Header View */}
      <View style={styles.header}>

        <Text style={styles.text}>MONO</Text>

        <View style={styles.subView}>
          <View style={styles.wishlist}>
            <Octicons name={'heart'} size={22} color={'#FF0000'} />
          </View>

          <TouchableOpacity onPress={handleProfile}>
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
          source={require('../../assets/icon/chair1.png')}
          style={styles.chair1}
        />
      </View>
      <View style={styles.arrivals}>
        <Text
          style={{
            fontSize: 24,
            // fontWeight: '500',
            color: '#000',
            fontFamily: 'Poppins-Bold',
          }}>
          New arrivals
        </Text>
        <View style={styles.viewAll}>
          <Text style={{ fontSize: 12, fontWeight: '500', color: '#000' }}>
            View all
          </Text>
          <MaterialIcons
            name={'keyboard-arrow-right'}
            size={20}
            color={'#000'}
          />
        </View>
      </View>

      <View
        style={{
          width: '100%',
          backgroundColor: 'yellow',
          flexDirection: 'row',
        }}>
        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
          }}>
          <FilterButton
            image={require('../../assets/icon/chair2.png')}
            title={'Comfy Roaser'}
          />
          <TouchableOpacity onPress={handleChair}>
            <FilterButton
              image={require('../../assets/icon/chair2.png')}
              title={'Comfy Roaser'}
            />
          </TouchableOpacity>
          <FilterButton
            image={require('../../assets/icon/chair2.png')}
            title={'Comfy Roaser'}
          />
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.catagories}>Categories</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.star}>
          <Fontisto name={'star'} size={18} color={'#A4A4A4'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.star}>
          <MaterialCommunityIcons
            name={'table-chair'}
            size={18}
            color={'#A4A4A4'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.star}>
          <MaterialCommunityIcons
            name={'chair-rolling'}
            size={18}
            color={'#A4A4A4'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.star}>
          <FontAwesome6 name={'couch'} size={18} color={'#A4A4A4'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.star}>
          <Ionicons name={'bed'} size={18} color={'#A4A4A4'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.star}>
          <MaterialCommunityIcons
            name={'chair-school'}
            size={18}
            color={'#A4A4A4'}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      />
    </ScrollView>
  );
};

export default Home;

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
  arrivals: {
    flexDirection: 'row',

    marginTop: 20,
    justifyContent: 'space-between',
  },
  viewAll: {
    flexDirection: 'row',
  },
  catagories: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginTop: 20,
  },
  star: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Products = [
  {
    image: require('../../assets/icon/chair3.png'),
    title: 'Sera Core',
  },

  {
    image: require('../../assets/icon/stool.png'),
    title: 'stool',
  },
  {
    image: require('../../assets/icon/desk.png'),
    title: 'Wheel aeration',
  },
  {
    image: require('../../assets/icon/chair5.png'),
    title: 'Tuiou',
  },
  {
    image: require('../../assets/icon/desk2.png'),
    title: 'Stoodio 3 Piece',
  },
  {
    image: require('../../assets/icon/couch.png'),
    title: 'Siira Tui',
  },
  {
    image: require('../../assets/icon/bed.png'),
    title: 'Stoodio 3 Piece',
  },
  {
    image: require('../../assets/icon/chair4.png'),
    title: 'Solid cerve',
  },
];
