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
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);

  const handleSignIn = () => {
    if (
      email != null &&
      email.includes('@gmail.com') &&
      password != null &&
      password.length > 6
    ) {
      // setLoading(true);

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success');
          Alert.alert('Success', 'You are successfully loggedin');
        })
        .catch(error => {
          console.log(error, 'error');
        });
    } else {
      Alert.alert('Warning', 'Please enter valid details');
    }
  };

  const navigtaion = useNavigation();

  const handleRecovery = () => {
    navigtaion.navigate('PasswordRecovery');
  };
  const handleSignUp = () => {
    navigtaion.navigate('SignUp');
  };

  // google signin

  GoogleSignin.configure({
    webClientId:
      '849027195626-77d90pk7co48oibvkm9n03n52afgd0cn.apps.googleusercontent.com',
  });

  const handleGoogleSignIn = async () => {
    console.log('button');
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error here', error);
    }
  };
  console.log(auth().currentUser);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={styles.text}>Welcome 👋</Text>
      <Text style={styles.text2}>Sign in to your account</Text>

      <TouchableOpacity style={styles.bar1}>
        <AntDesign name={'mail'} size={18} color={'#6B7280'} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </TouchableOpacity>

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

      <TouchableOpacity onPress={handleRecovery}>
        <Text style={styles.text3}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignIn}
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
          Sign in
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
        <TouchableOpacity onPress={handleGoogleSignIn}>
          <View style={styles.google}>
            <Image
              source={require('../../assets/icon/search.png')}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>

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
          marginTop: 60,
          alignSelf: 'center',
        }}>
        <Text style={{fontWeight: '600', fontSize: 12}}>
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{color: '#000', fontWeight: '600', fontSize: 12}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginHorizontal: 20,
    marginTop: 100,
    fontStyle: 'normal',
    fontFamily: 'Poppins-BoldItalic',
  },
  text2: {
    fontSize: 11,
    fontWeight: '400',
    color: '#A4A4A4',
    marginHorizontal: 20,
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

    // backgroundColor: 'red',
  },
});
