import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilterEditProfile from '../../components/FilterEditProfile/FilterEditProfile';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const EditProfile = props => {
  const navigation = useNavigation();

  const userData = props.route.params.user;
  console.log('User', userData);

  const [name, setName] = useState(userData.Name);
  const [email, setEmail] = useState(userData.Email);
  const [contactno, setContactno] = useState(null);

  const handleSave = async () => {
    try {
      await firestore().collection('Users').doc(auth().currentUser.uid).set({
        Name: name,
        Email: email,
        Contactno: contactno,
      });

      navigation.goBack();
    } catch (error) { }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', paddingHorizontal: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
        <AntDesign name={'arrowleft'} size={22} color={'#000'} />
      </TouchableOpacity>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Poppins-Medium',
          fontSize: 22,
          marginTop: 30,
        }}>
        Edit profile details
      </Text>

      <FilterEditProfile
        icon={
          <Feather
            name={'user'}
            size={24}
            color={'#A4A4A4'}
            style={{ alignSelf: 'center' }}
          />
        }
        title={'name'}
        value={name}
        onChange={setName}
      />
      <FilterEditProfile
        icon={<AntDesign name={'mail'} size={24} color={'#A4A4A4'} />}
        title={'Email'}
        value={email}
        onChange={setEmail}
      />

      <View
        style={{
          backgroundColor: '#F9FAFB',
          height: 50,
          width: 'auto',
          borderRadius: 12,
          marginTop: 20,
          flexDirection: 'row',
          paddingLeft: 12,
        }}>
        <TextInput
          placeholder="Contact no"
          value={contactno}
          onChangeText={setContactno}
        />
      </View>
      <TouchableOpacity
        onPress={handleSave}
        style={{
          backgroundColor: '#FCD240',
          height: 50,
          width: 'auto',
          borderRadius: 10,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 200,
        }}>
        <Text style={{ color: '#000', fontFamily: 'Poppins-Medium' }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
