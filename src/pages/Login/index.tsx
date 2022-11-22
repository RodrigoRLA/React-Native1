/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AxiosInstance from '../../api/AxiosIntance';
import { DataContext } from '../../context/DataContext';


import { styles } from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {armazenaDadosUsuario} = useContext(DataContext);

  const handleLogin = async () => {
    var tokenJwt:any = null;

    try {
      const retorno = await AxiosInstance.post('/auth/login', {
        email: email,
        password: senha,
      });

      if (retorno.status === 200){

        //Atribuido a variavel tokenJwt o conteudo do retorno.data
        tokenJwt = retorno.data;
        //Passando pro metoso do contexto
        armazenaDadosUsuario(tokenJwt['jwt-token']);

        navigation.navigate('Home');
        // console.log('Retorno: ' + JSON.stringify(retorno.data));
      } else {
        console.log('Erro ao realizar a autentificação');
      }

    } catch (error) {
      Alert.alert('Deu ruim, meu patrão!');
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
