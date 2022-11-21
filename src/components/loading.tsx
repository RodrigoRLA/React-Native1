/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = ({navigation}) => {
     useEffect(() =>{
        setTimeout(() => {
            navigation.navigate('Home');
        }, 1500);
  },[]);
    return (
        <View style={[styles.container, styles.horizontal]}>
             <ActivityIndicator size="large" color="#1c1c77" />
        </View>
    );
};

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

export default Loader;
