import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Calendara, CreateTask , Landing , Profile}  from '../../containers/pages/';


const HomeStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Stack = createStackNavigator();

function HomeStackScreen () {
  return(
  <HomeStack.Navigator screenOptions={{gestureEnabled: false }} >
    <HomeStack.Screen name="Landing" component={Landing}  headerMode = 'none' screenOptions={{headerShown: false ,gestureEnabled: false }}/>
  </HomeStack.Navigator>
  );
}

function CalendarStackScreen () {
  return(
  <CalendarStack.Navigator screenOptions={{gestureEnabled: false }} >
    <HomeStack.Screen name="Calendar" component={Calendara}  headerMode = 'none' screenOptions={{headerShown: false ,gestureEnabled: false }}/>
    <HomeStack.Screen name="CreateTask" component={CreateTask}/>
  </CalendarStack.Navigator>
  );
}

function ProfileStackScreen () {
  return(
  <ProfileStack.Navigator screenOptions={{gestureEnabled: false }} >
    <HomeStack.Screen name="Profile" component={Profile}  headerMode = 'none' screenOptions={{headerShown: false ,gestureEnabled: false }}/>
  </ProfileStack.Navigator>
  );
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeStackScreen" component={HomeStackScreen}/>
        <Stack.Screen name="ProfileStackScreen" component={ProfileStackScreen}/>
        <Stack.Screen name="CalendarStackScreen" component={CalendarStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;