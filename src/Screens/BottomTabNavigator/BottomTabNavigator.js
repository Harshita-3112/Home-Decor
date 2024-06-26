import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home1 from '../Home1/Home1';
import Home2 from '../Home2/Home2';
import Cart from '../Cart/Cart';
import Notifications from '../Notifications/Notifications';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'home'} size={22} color={'#000'} />
          ),
        }}
        name={'Home1'}
        component={Home1}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'home'} size={22} color={'#000'} />
          ),
        }}
        name={'Home2'}
        component={Home2}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Ionicons name={'notifications-outline'} size={22} color={'#000'} />
          ),
        }}
        name={'Notifications'}
        component={Notifications}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'shoppingcart'} size={22} color={'#000'} />
          ),
        }}
        name={'Cart'}
        component={Cart}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
