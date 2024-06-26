import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useConfigStore from '../../store/configStore';

const FilterButton = ({image, title, item}) => {
  const setCart = useConfigStore(state => state.setCart);

  const addToCart = item => {
    console.log('item', item);
    setCart(item);
  };

  return (
    <View style={styles.comfy}>
      {typeof image == 'string' && (
        <Image source={{uri: image}} style={styles.chair2} />
      )}
      <View style={styles.divider}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <View>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#000'}}>
            {title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 10, fontWeight: '400', color: '#000'}}>
              $24.00
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '400',
                color: '#A4A4A4',
                left: 6,
              }}>
              $48.00
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={{
            height: 28,
            width: 28,
            borderRadius: 14,
            backgroundColor: '#D9D9D9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name={'plus'} size={20} color={'#FF0000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  comfy: {
    height: 140,
    width: '45%',
    // backgroundColor: '#EFEFEF',
    // backgroundColor: 'blue',
    borderRadius: 8,
    marginTop: 20,
    // marginHorizontal: 10,
  },
  divider: {
    width: 'auto',
    borderColor: '#A4A4A4',
    borderWidth: 1,
    marginHorizontal: 6,
  },
  chair2: {
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 6,
    width: '100%',
  },
});
