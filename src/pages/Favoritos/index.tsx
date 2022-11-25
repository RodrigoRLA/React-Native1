/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button, Card, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DadosLivroType } from '../../models/DadosLivroType';
import { clearStorage, incrementLocalData, removeFromFavoritosByKeyAndValue, removeLocalData, retrieveLocalData, storeLocalData } from '../../services/LocalStorageService';

// const Item = ({ item }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{item}</Text>
//   </View>
// )
const removeFromFavoritosByKeyAndValue = async (key:string, codigoLivro:any) =>{
  var arrayJsonFavoritos:any = null;
  var arrayJsFavoritos = [];
  var arrayJsAlteradoFavoritos = [];
  try {
    //recupera os dados da key existentes atualmente
    arrayJsonFavoritos = await retrieveLocalData(key);

    //converte os dados de JSON para objeto Javascript
    arrayJsFavoritos = JSON.parse(arrayJsonFavoritos);

    //Percorre o array JS, filtrando o seu conteúdo e criando um novo array sem
    //  o elemento do array que contem o codigoLivro igual ao fornecido ao metodo
    arrayJsAlteradoFavoritos = arrayJsFavoritos.filter(function(e){
      return e.codigoLivro !== codigoLivro;
    });

    //salvar o array filtrado, sem o item removido
    storeLocalData(key, arrayJsAlteradoFavoritos);
  } catch (error) {
    console.log(`Erro ao remover dados (key: ${key}) com a valor do codigo do livro ${codigoLivro} do LocalStorage: ${error}`);
  }
};

const CardLivro = ({ item }) => {
  return (
  <Card>
    <Card.Title title={item?.nomeLivro} subtitle={item.editora.nomeEditora} />
    <Card.Cover source={{uri: item?.urlImagem}} />
    <Card.Content >
      <Title>Autor: {item.autor.nomeAutor}</Title>
      <Title>Data de lançamento: {item.dataLancamento}</Title>
    </Card.Content>
    <Card.Actions style={{justifyContent:'center'}}>
      <Button onPress={() => removeFromFavoritosByKeyAndValue('favoritos', item.codigoLivro)}><Ionicons name="trash-outline" color="#000" size={36} /></Button>
    </Card.Actions>
  </Card>
  );
};

const Favoritos = () => {

  const [favoritos, setFavoritos] = useState<DadosLivroType[]>([]);
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState<DadosLivroType[]>([]);
  var actualData:any = null;

  // const Item = ({ item, onPress, backgroundColor, textColor }) => (
  //   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  //      <Image source={{uri: item.urlImagem}} resizeMode="contain" style={styles.imgItem} />
  //     <Text style={[styles.title, textColor]}>{item.nomeLivro}</Text>
  //   </TouchableOpacity>
  // );

  const handleFavoritos = async () => {
    //await clearStorage(); //limpa todos os dados atuais da key especificada. Usar para fins de teste
    try {
      //recupera os dados da key existentes atualmente
      actualData = await retrieveLocalData('favoritos');
      //converte os dados, de JSON para objeto Javascript
      actualData = JSON.parse(actualData);
      //console.log(actualData: ${JSON.stringify(actualData, null, '\t')});

      if (actualData !== undefined && actualData !== null) {
        //armazena os dados existentes atualmente no array data
        setData(actualData);
        // data.push(actualData);
        //transforma os dados recebidos pelo metodo num objeto JS
      } else {
        //quando chamado pela primeira vez, caso nao exista ainda dados pra key, os armazena
        console.log('Não há favoritos');
        // storeLocalData(key, value);
      }
    } catch (error) {
        console.log(`${error}`);
        //console.log(Erro ao recuperar dados (key: ${key}) do LocalStorage: ${error});
    }
};

  // const ListarFavoritos = async () => {
  //     const data = await retrieveLocalData('favoritos');
  //     console.log('data',data);
  //     if (data){
  //     let temp = JSON.parse(data);
  //     console.log('temp',temp);

  //     setFavoritos(temp);
  //     }
  //   };

  //   const DeletarFavoritos = async () => {
  //     await removeFromFavoritosByKeyAndValue('favoritos', selectedId);
  //     ListarFavoritos();
  //   };

    useEffect(() => {
      // ListarFavoritos();
      // DeletarFavoritos();
      handleFavoritos();
    });

    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={CardLivro}
          keyExtractor={(item, indice) => indice}
        />
      </SafeAreaView>
    );
};
export default Favoritos;
