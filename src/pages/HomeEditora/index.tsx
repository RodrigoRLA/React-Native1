/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AxiosInstance from '../../api/AxiosIntance';
import { DataContext } from '../../context/DataContext';
import { DadosEditoraType } from '../../models/DadosEditoraType';

const HomeEditora = ({route, navigation}) => {
    const {id} = route.params;

    console.log(`Editora Id: ${id}`);

    return (
    <View>
        <Text>Home Editora {id}</Text>
    </View>
    );
};


export default HomeEditora;
