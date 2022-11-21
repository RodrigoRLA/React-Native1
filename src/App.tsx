/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Loading from './components/loading';
import Home from './pages/Home';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen options={{
          headerShown:false,
        }} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


