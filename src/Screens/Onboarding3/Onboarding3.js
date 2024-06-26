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

const Onboarding3 = () => {
  const navigation = useNavigation();
  const handleStyle = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ImageBackground
      style={styles.image}
      source={require('../../assets/icon/image3.png')}>
      <LinearGradient colors={['transparent', '#000']} style={{flex: 1}}>
        <View
          style={{
            marginHorizontal: '8%',
            marginTop: 80,
          }}>
          <Text style={styles.text}>{`Fast delivery \nof your style`}</Text>
          <Text style={{marginTop: 4, fontSize: 14}}>
            New designs every day. Explore and find the best furniture for your
            home.
          </Text>
        </View>
        <View style={{alignSelf: 'center', position: 'absolute', bottom: 40}}>
          <TouchableOpacity
            onPress={handleStyle}
            style={{
              height: 45,
              width: 290,
              borderRadius: 10,
              backgroundColor: '#FCD240',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 24,
            }}>
            <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
              Get started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Onboarding3;

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
