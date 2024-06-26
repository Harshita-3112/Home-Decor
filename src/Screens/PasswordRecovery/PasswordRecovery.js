import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PasswordRecovery = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AntDesign
        name={'arrowleft'}
        size={22}
        color={'#000'}
        style={{marginHorizontal: 20, marginTop: 20}}
      />

      <Text
        style={{
          marginTop: 80,
          fontSize: 20,
          fontWeight: '500',
          color: '#000',
          fontFamily: 'Poppins-BoldItalic',
          marginHorizontal: 20,
        }}>
        Password recovery
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          color: '#A4A4A4',
          fontSize: 12,
          fontWeight: '400',
        }}>
        Please enter your email address to send a password recovery email.
      </Text>
      <TouchableOpacity style={styles.bar1}>
        <AntDesign name={'mail'} size={18} color={'#6B7280'} />
        <TextInput placeholder="Email" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          height: 45,
          borderRadius: 10,
          backgroundColor: '#FCD240',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 24,
          marginTop: 130,
        }}>
        <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
          Send code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordRecovery;

const styles = StyleSheet.create({
  bar1: {
    height: 40,
    width: 'auto',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    marginTop: 40,
    marginHorizontal: 20,

    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
