/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Text, View } from 'react-native';


function Home({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Volte para Login"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    );
  }
export default Home;
