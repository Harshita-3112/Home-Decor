import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home1 from '../Home/Home';
import Home2 from '../Search/Search';
import Cart from '../Cart/Cart';
import Notifications from '../Notifications/Notifications';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../Search/Search';
import Home from '../Home/Home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'home'} size={22} color={'#000'} />
          ),
        }}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <AntDesign name={'search1'} size={22} color={'#000'} />
          ),
        }}
        name={'Search'}
        component={Search}
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
