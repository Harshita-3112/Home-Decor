import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Onboarding = () => {
  const navigation = useNavigation();
  const handleDesign = () => {
    navigation.navigate('Onboarding2');
  };
  return (
    <ImageBackground
      style={styles.image}
      source={require('../../assets/icon/image.png')}>
      <LinearGradient colors={['transparent', '#000']} style={{flex: 1}}>
        <View
          style={{
            marginHorizontal: '8%',
            marginTop: 80,
          }}>
          <Text style={styles.text}>{`A new design \nof your style`}</Text>
          <Text style={{marginTop: 4, fontSize: 14}}>
            New designs every day. Explore and find the best furniture for your
            home.
          </Text>
        </View>
        <View style={{alignSelf: 'center', position: 'absolute', bottom: 40}}>
          <TouchableOpacity
            onPress={handleDesign}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#FCD240',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowright" size={22} color={'#323232'} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 28,

    color: '#000',
  },
});
