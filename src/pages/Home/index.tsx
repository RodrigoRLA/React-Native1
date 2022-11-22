/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AxiosInstance from '../../api/AxiosIntance';
import { DataContext } from '../../context/DataContext';
import { DadosEditoraType } from '../../models/DadosEditoraType';


 
const Item = ({ item, pressionarBotao, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={pressionarBotao} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.nomeEditora}</Text>
  </TouchableOpacity>
);

function Home({navigation}) {

  const {dadosUsuario} = useContext(DataContext);
  const [carregar, setCarregar] = useState(false);
  const [dadosEditora, setDadosEditora] = useState<DadosEditoraType[]>([]);
  const [selectedId, setSelectedId] = useState(null);


useEffect(() =>{
    setCarregar(true);
    setTimeout(() => {
        setCarregar(false);
    }, 1500);
},[]);

useEffect(() =>{
  getAllEditoras();
},[]);

const getAllEditoras = async () => {
  AxiosInstance.get(
  '/editoras',
  {headers: {'Authorization' : `Bearer ${dadosUsuario.token}`}}
  ).then( resultado => {
    console.log('Dados das Editoras: ' + JSON.stringify(resultado.data));
    setDadosEditora(resultado.data);
  }).catch((error) => {
    console.log('Ocorreu um erro ' + JSON.stringify(error));
  });
};

const renderItem = ({ item }) => {
  const backgroundColor = item.codigoEditora === selectedId ? '#D22D13' : '#EA7663';
  const color = item.codigoEditora === selectedId ? 'white' : 'black';

  return (
    <Item
      item={item}
      pressionarBotao={() => setSelectedId(item.codigoEditora)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
  );
};

if (carregar === true) {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#D22D13" />
    </View>
  );
}
    return (
       <View style={styles.container2}>
         <FlatList
        data={dadosEditora}
        renderItem={renderItem}
        keyExtractor={(item) => item.codigoEditora}
        extraData={selectedId}
        horizontal={true}
      />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    container2: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 10,
      width: 150,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    },
    title: {
      fontSize: 22,
    },
  });

export default Home;
