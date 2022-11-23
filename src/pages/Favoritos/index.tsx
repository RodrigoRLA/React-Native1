/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AxiosInstance from '../../api/AxiosIntance';
import { showLoading } from '../../components/Loading/ShowLoading';

const Favoritos = () => {

  const [carregar, setCarregar] = useState(false);

  useEffect(() =>{
    setCarregar(true);
    setTimeout(() => {
        setCarregar(false);
    }, 1500);
    },[]);

    if (carregar === true) {
        return (
          showLoading()
        );
      }
          return (
             <View>
               <Text>Favoritos</Text>
            </View>
          );
        };


export default Favoritos;
