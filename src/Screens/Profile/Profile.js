import {
  ActivityIndicator,
  Image,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FilterProfile from '../../components/FilterProfile/FilterProfile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const Profile = () => {
  const currentUser = auth().currentUser;
  console.log('current', currentUser);

  const navigation = useNavigation();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const userData = auth().currentUser;
  // console.log('user here', userData);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile', {user: user});
  };

  const handleLogout = async () => {
    await auth().signOut();
  };

  const getUserData = async () => {
    try {
      const userData = await firestore()
        .collection('Users')
        .doc(auth().currentUser.uid)
        .get();
      setUser(userData.data());
      setLoading(false);
      console.log('user here', userData);
    } catch (error) {}
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size={30}
        style={{alignSelf: 'center', marginTop: '40%'}}
      />
    );
  }

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20}}>
      <View style={{marginTop: 10}}>
        <AntDesign name={'arrowleft'} size={22} color={'#000'} />
      </View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Image source={{uri: currentUser.photoURL}} style={styles.image} />
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontFamily: 'Poppins-Medium',
            marginTop: 10,
          }}>
          {user.Name}
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 30}}>
        <View>
          <MaterialCommunityIcons
            name={'ticket-confirmation-outline'}
            size={30}
            color={'#a4a4a4'}
          />
        </View>
        <View>
          <Text style={{color: '#000', fontFamily: 'Poppins-Medium', left: 16}}>
            Reffer friend give coupon code
          </Text>
          <Text style={{color: '#000', fontFamily: 'Poppins-Medium', left: 16}}>
            Learn More
          </Text>
        </View>
      </View>
      {/* divider */}
      <View style={styles.divider}></View>
      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
          marginTop: 30,
        }}>
        Account Settings
      </Text>

      <TouchableOpacity onPress={handleEditProfile}>
        <FilterProfile
          icon={<Feather name={'user'} size={24} color={'#A4A4A4'} />}
          text="Personal information"
        />
      </TouchableOpacity>

      <FilterProfile
        icon={<Feather name={'book'} size={24} color={'#A4A4A4'} />}
        text="Address Book"
      />
      <FilterProfile
        icon={<MaterialIcons name={'payment'} size={24} color={'#A4A4A4'} />}
        text="My payment option"
      />
      <FilterProfile
        icon={
          <Ionicons
            name={'notifications-outline'}
            size={24}
            color={'#A4A4A4'}
          />
        }
        text="Notification"
      />

      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
          marginTop: 30,
        }}>
        My Order
      </Text>

      <FilterProfile
        icon={<AntDesign name={'hearto'} size={24} color={'#A4A4A4'} />}
        text="Wishlist"
      />
      <FilterProfile
        icon={<FontAwesome5 name={'border-all'} size={24} color={'#A4A4A4'} />}
        text="My Order"
      />
      <FilterProfile
        icon={
          <MaterialCommunityIcons
            name={'chart-line-variant'}
            size={24}
            color={'#A4A4A4'}
          />
        }
        text="Order Tracking"
      />
      <FilterProfile
        icon={<FontAwesome5 name={'pencil-alt'} size={24} color={'#A4A4A4'} />}
        text="Give us feedback"
      />

      <Text
        style={{
          color: '#000',
          fontSize: 20,
          fontFamily: 'Poppins-Medium',
          marginTop: 30,
        }}>
        Legal
      </Text>
      <FilterProfile
        icon={
          <MaterialCommunityIcons
            name={'shield-check-outline'}
            size={24}
            color={'#A4A4A4'}
          />
        }
        text="Term & conditions"
      />
      <FilterProfile
        icon={
          <MaterialCommunityIcons
            name={'shield-outline'}
            size={24}
            color={'#A4A4A4'}
          />
        }
        text="Privacy policy"
      />

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          height: 40,
          width: 'auto',
          backgroundColor: 'red',
          borderRadius: 12,
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000'}}>Log out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'contain',
  },
});
