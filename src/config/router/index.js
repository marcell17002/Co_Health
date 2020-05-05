import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Calendara, CreateTask, Landing, Profile, EditProfile, Login, Register, Scan_qr, Intro } from '../../containers/pages/';

const HomeStack = createStackNavigator();
const PreStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Stack = createStackNavigator();

function PreStackScreen() {
  return (
    <PreStack.Navigator screenOptions={{ gestureEnabled: false }} >
      {/* <PreStack.Screen name="Intro" component={Intro}  headerMode = 'none' screenOptions={{headerShown: false ,gestureEnabled: false }}/> */}
      <PreStack.Screen name="Login" component={Login} headerMode='none' screenOptions={{ headerShown: false, gestureEnabled: false }} />
      <PreStack.Screen name="Register" component={Register} headerMode='none' screenOptions={{ headerShown: false, gestureEnabled: false }} />
    </PreStack.Navigator>
  );
}
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ gestureEnabled: false }} >
      <HomeStack.Screen name="Landing" component={Landing} headerMode='none' screenOptions={{ headerShown: false, gestureEnabled: false }} />
      <HomeStack.Screen name="Scan_qr" component={Scan_qr} />
    </HomeStack.Navigator>
  );
}

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator screenOptions={{ gestureEnabled: false }} >
      <CalendarStack.Screen name="Pengingat" component={Calendara} />
      <CalendarStack.Screen name="Tambah Pengingat" component={CreateTask} />
    </CalendarStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ gestureEnabled: false }} >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PreStackScreen" component={PreStackScreen} />
        <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} />
        <Stack.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
        <Stack.Screen name="CalendarStackScreen" component={CalendarStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;