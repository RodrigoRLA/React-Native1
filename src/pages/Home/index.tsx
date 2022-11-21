/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';


function Home({navigation}) {

  const [carregar, setCarregar] = useState(false);

  useEffect(() =>{

    setCarregar(true);

    setTimeout(() => {
        setCarregar(false);
    }, 1500);
},[]);

if (carregar === true) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#1c1c77" />
    </View>
  );
}
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });
export default Home;
