import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TextInputBase,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const navigtaion = useNavigation();
  const [email, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setpassword] = useState(null);

  const handleWelcome = () => {
    navigation.navigate('Welcome');
  };

  const handleSignUp = () => {
    if (
      email != null &&
      email.includes('@gmail.com') &&
      email != ' ' &&
      userName != null &&
      userName != ' ' &&
      // password != null &&
      password.length > 6
    ) {
      console.log(email, password);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success');
        })
        .catch(error => {
          console.log(error, 'error');
        });
    } else {
      Alert.alert('Warning', 'Please enter valid details');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <AntDesign
        name={'arrowleft'}
        size={22}
        color={'#000'}
        style={{marginHorizontal: 20, marginTop: 20}}
      />

      <Text style={styles.text}>Create an account</Text>

      <View style={styles.bar1}>
        <AntDesign name={'mail'} size={18} color={'#6B7280'} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.bar1}>
        <AntDesign name={'user'} size={18} color={'#6B7280'} />
        <TextInput
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      <TouchableOpacity style={styles.bar2}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name={'lock-outline'}
            size={18}
            color={'#6B7280'}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setpassword}
          />
        </View>
        <Feather name={'eye-off'} size={15} color={'#6B7280'} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignUp}
        style={{
          height: 45,
          borderRadius: 10,
          backgroundColor: '#FCD240',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 24,
          marginTop: 60,
        }}>
        <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
          Sign up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <View style={styles.option}></View>
        <Text style={{color: '#A6A6A6'}}>OR</Text>
        <View style={styles.option}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View style={styles.google}>
          <Image
            source={require('../../assets/icon/search.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.facebook}>
          <Image
            source={require('../../assets/icon/facebook.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 50,
          alignSelf: 'center',
        }}>
        <Text style={{fontWeight: '600', fontSize: 12}}>
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#000', fontWeight: '600', fontSize: 12}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginHorizontal: 20,
    marginTop: 70,
    fontStyle: 'normal',
    fontFamily: 'Poppins-BoldItalic',
  },

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
  text3: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginHorizontal: 20,
    marginTop: 20,
  },
  bar2: {
    height: 40,
    width: 'auto',
    borderRadius: 12,
    backgroundColor: '#F9FAFB',
    marginTop: 40,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    height: 1,
    width: 140,
    backgroundColor: '#E8E8E8',
  },
  google: {
    height: 50,
    width: 150,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    borderWidth: 1,
  },
  facebook: {
    height: 50,
    width: 150,
    borderColor: '#EFEFEF',
    borderRadius: 8,
    borderWidth: 1,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 30,
    width: 20,
    marginTop: 9,
  },
});
