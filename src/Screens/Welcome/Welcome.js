import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Welcome = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 20}}>
      <AntDesign
        name={'arrowleft'}
        size={22}
        color={'#000'}
        style={{marginTop: 20}}
      />
      <Text style={styles.text}>Welcome!</Text>

      <Image
        source={require('../../assets/icon/done.png')}
        style={styles.image}
      />
      <Text style={styles.text2}>
        Your account has been successfully created. Please add additional
        information (phone number, shipping address, etc.) to continue shopping
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    fontSize: 22,
    fontWeight: '500',
    color: '#000',

    textAlign: 'center',
  },
  image: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 60,
  },
  text2: {
    marginTop: 40,
  },
});
