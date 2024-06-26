import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const FilterProfile = ({icon, text}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          {icon}
          <Text style={{color: '#000', fontFamily: 'Poppins-Medium', left: 20}}>
            {text}
          </Text>
        </View>
        <SimpleLineIcons name={'arrow-right'} size={16} color={'#A4A4A4'} />
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default FilterProfile;

const styles = StyleSheet.create({
  divider: {
    // height: 1,
    width: 305,
    borderWidth: 0.3,
    borderColor: '#a4a4a4',
    left: 12,
    marginTop: 10,
  },
});
