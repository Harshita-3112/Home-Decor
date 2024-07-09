import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Screens/Splash/Splash';
import Onboarding from '../Screens/Onboarding/Onboarding';
import Onboarding2 from '../Screens/Onboarding2/Onboarding2';
import Onboarding3 from '../Screens/Onboarding3/Onboarding3';
import SignIn from '../Screens/SignIn/SignIn';
import PasswordRecovery from '../Screens/PasswordRecovery/PasswordRecovery';
import Welcome from '../Screens/Welcome/Welcome';
import SignUp from '../Screens/SignUp/SignUp';
import Home1 from '../Screens/Home/Home';
import BottomTabNavigator from '../Screens/BottomTabNavigator/BottomTabNavigator';
import auth from '@react-native-firebase/auth';
import ChairDetail from '../Screens/ChairDetail/ChairDetail';
import MyCart from '../Screens/MyCart/MyCart';
import Profile from '../Screens/Profile/Profile';
import EditProfile from '../Screens/EditProfile/EditProfile';
import firestore from '@react-native-firebase/firestore';

const RootNavigator = () => {
  const Stack = createStackNavigator();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listener = auth().onAuthStateChanged(handleUser);
    return listener;
  }, []);

  const handleUser = async user => {
    if (user) {
      const firestoreData = await firestore()
        .collection('Users')
        .doc(user.uid)
        .get();
      console.log('data here', firestoreData.data());
      if (firestoreData.data()) {
        setUser(user);
        setLoading(false);
      } else {
        await firestore().collection('Users').doc(user.uid).set({
          Name: 'Harshita',
          Email: user.email,
          Uid: user.uid,
        });
        setUser(user);
        setLoading(false);
      }
    } else {
      setUser(null);
      setLoading(false);
    }
  };

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen
              name="BottomTabNavigator"
              component={BottomTabNavigator}
            />
            <Stack.Screen name="ChairDetail" component={ChairDetail} />
            <Stack.Screen name="MyCart" component={MyCart} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
          </>
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
            <Stack.Screen name="Onboarding3" component={Onboarding3} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen
              name="PasswordRecovery"
              component={PasswordRecovery}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Welcome" component={Welcome} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
