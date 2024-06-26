import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.logo}>
          <Text style={styles.text}>MONO </Text>

          <View style={styles.store}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 38,
                fontWeight: '600',
                color: '#000',
              }}>
              Store
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    height: 70,
    width: 150,
    backgroundColor: '#FCD240',
    borderRadius: 16,

    marginRight: 60,
  },
  text: {
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '600',
    color: '#000',
  },
  store: {
    height: 70,
    width: 150,
    backgroundColor: '#FCD240',
    borderRadius: 16,

    marginLeft: 60,
  },
});
