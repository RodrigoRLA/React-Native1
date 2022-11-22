/* eslint-disable prettier/prettier */
import jwt_decode from 'jwt-decode';
import React, { createContext, useState } from 'react';

import { DadosUsuarioType } from '../models/DadosUsuarioType';

//Criando o contexto
export const DataContext = createContext({ });

//Criando o provedor do contexto
export const DataProvider = ({children}) => {
    const [dadosUsuario, setDadosUsuario] = useState<DadosUsuarioType>();

    const armazenaDadosUsuario = (jwt:any) => {
        var tokenDecodificado:any = jwt_decode(jwt);

        //Armazenando apenas a chave usuario da string json decodificada
        var usuario = tokenDecodificado.usuario;
        //Transformando a string json contida dentro da variavel usuario num objeto JS
        usuario = JSON.parse(usuario);

        setDadosUsuario({
            id: usuario?.userId,
            nome: usuario?.usuarioNome,
            email: usuario?.userEmail,
            token: jwt,
        });
    };

    return (
        <DataContext.Provider value={{
            dadosUsuario,
            armazenaDadosUsuario,
        }}>
            {children}
        </DataContext.Provider>
    );
};
