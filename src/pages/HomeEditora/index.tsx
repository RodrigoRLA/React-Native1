/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AxiosInstance from '../../api/AxiosIntance';
import { DataContext } from '../../context/DataContext';
import { DadosEditoraType } from '../../models/DadosEditoraType';
import { DadosLivroType } from '../../models/DadosLivroType';
import { incrementLocalData, removeLocalData, retrieveLocalData, storeLocalData } from '../../services/LocalStorageService';


const HomeEditora = ({route, navigation}) => {
    const {id} = route.params;

    const {dadosUsuario} = useContext(DataContext);
    const [selectedLivro, setSelectedLivro] = useState(null);
    const [dadosLivro, setDadosLivro] = useState<DadosLivroType[]>([]);

    useEffect(() => {
        getLivroByEditora();
    },[]);

    // const navigateToHomeLivro = (id:any) => {
    //     setSelectedId(id);
    //     navigation.navigate('HomeEditora', {id:id});
    //   };

    console.log(`Editora Id: ${id}`);

    const CardLivro = ({ item }) => {
        return (
        <Card style={styles.cardLivro}>
          <Card.Title title={item.nomeLivro} />
          <TouchableOpacity>
          <Card.Cover source={{uri: item.urlImagem}} />
          </TouchableOpacity>
          <Card.Actions style={{justifyContent:'center'}}>
            <Button onPress={() => addFavorite(dadosLivro)}><Ionicons name="heart-circle" color="#000" size={36} /></Button>
            <Button onPress={() => addCart(item.codigoLivro)}><Ionicons name="cart" color="#000" size={36} /></Button>
          </Card.Actions>
        </Card>
        );
      };

      const addFavorite = (dadosLivro:DadosLivroType) => {
        //console.log(`Favoritos: Livro selecionado: ${JSON.stringify(livro)}`);
        incrementLocalData('Favoritos', dadosLivro);
      };

    const getLivroByEditora = async () => {
        AxiosInstance.get(
            `/livros/por-editora/${id}`,
            {headers: {'Authorization' : `Bearer ${dadosUsuario?.token}`}}
            ).then( resultado => {
              console.log('Dados das livro: ' + JSON.stringify(resultado.data));
              setDadosLivro(resultado.data);
            }).catch((error) => {
              console.log('Ocorreu um erro ' + JSON.stringify(error));
            });
          };



    return (
    <ScrollView>
        <FlatList
            data={dadosLivro}
            renderItem={CardLivro}
            keyExtractor={(item, indice) => indice}
            extraData={setSelectedLivro}
        />
    </ScrollView>
    );
};

    const styles = StyleSheet.create({
        cardLivro:{
            marginHorizontal:8,
            padding:10,
            justifyContent: 'center',
        },
    });

export default HomeEditora;
