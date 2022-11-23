import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AxiosInstance from '../../api/AxiosIntance';
import { DataContext } from '../../context/DataContext';
import { DadosEditoraType } from '../../models/DadosEditoraType';

const HomeEditora = ({route, navigation}) => {
    const {id} = route.params

    console.log(`Editora Id: ${id}`);

    //---------------------------------------------------
    //Dados editora
    // const [dadosEditora, setDadosEditora] = useState<DadosEditoraType>();

    // const getEditora = async () => {
    //     AxiosInstance.get(
    //     `/editoras/${id}`,
    //     {headers: {'Authorization' : `Bearer ${dadosUsuario.token}`}}
    //     ).then( resultado => {
    //       console.log('Dados das Editoras: ' + JSON.stringify(resultado.data));
    //       setDadosEditora(resultado.data);
    //     }).catch((error) => {
    //       // console.log('Ocorreu um erro ' + JSON.stringify(error));
    //     });
    //   };

    //   useEffect(() =>{
    //     getEditora();
    //   },[]);
    //-------------------------------------------------------

    return(
    <View>
        <Text>Home Editora {id}</Text>
    </View>
    )
}


export default HomeEditora;