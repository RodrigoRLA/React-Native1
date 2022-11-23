/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import HomeEditoras from './pages/HomeEditoras';
import HomeEditora from './pages/HomeEditora';

import { DataProvider } from './context/DataContext';

const TabBottomNavigation = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <TabBottomNavigation.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle:{backgroundColor: '#f4511e'},
        tabBarLabelStyle:{fontSize: 14},
        tabBarActiveTintColor:'#000',
        tabInactiveTintColor: '#fff'
      }}
    >
      <TabBottomNavigation.Screen name="HomeTabScreen" component={Home}
        options={{
          title:'Home',
          tabBarIcon: () => (<Ionicons name='home' color='#fff' size={24} />)
        }}
      />
      <TabBottomNavigation.Screen name="HomeEditorasTabScreen" component={HomeEditoras}
        options={{
          title:'Home Editoras',
          tabBarIcon: () => (<Ionicons name='library' color='#fff' size={24} />)
        }}
      />
    </TabBottomNavigation.Navigator>
  );
}

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
        }}name="BottomNavigatorScreen" component={BottomNavigator} />
          <Stack.Screen options={{
            headerShown:false,
          }} name="Login" component={Login} />
          <Stack.Screen name="HomeEditora" component={HomeEditora}/>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};



