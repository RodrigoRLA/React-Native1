/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AxiosInstance from '../../api/AxiosIntance';

import { styles } from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');




  const handleLogin = async () => {

    try {
      const retorno = await AxiosInstance.post('/auth/login', {
        email: email,
        password: senha,
      });

      if (retorno.status === 200){

        navigation.navigate('Home');

        // console.log('Retorno: ' + JSON.stringify(retorno.data));
      } else {
        console.log('Erro ao realizar a autentificação');
      }


    } catch (error) {
      //criar um componente contendo uma mensagem com o Alert para o usuario
      //criar um loading informando ao usuario que a requisição está sendo processada
      Alert.alert('Deu ruim, meu cria!');
      console.log(
        'Erro ao realizar a autentificação -' + JSON.stringify(error),
      );
    }
  };

  // useEffect(() =>{
  //   console.log("Component renderizado")
  // },[])

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Bem-Vindo</Text>
      </View>

      <View style={styles.conteudo}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSenha}
          value={senha}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.rodape}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao} onPress={() => handleLogin()}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
