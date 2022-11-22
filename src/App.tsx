/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

import { DataProvider } from './context/DataContext';

const Stack = createNativeStackNavigator();

export default () => {

  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen options={{
          title: 'Bem vindo(a)!',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}name="Home" component={Home} />
          <Stack.Screen options={{
            headerShown:false,
          }} name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};



