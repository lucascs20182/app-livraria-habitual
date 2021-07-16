import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { getData } from './src/storage';

import Routes from './src/routes';

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState('');

  useEffect(() => {
    async function handleSession() {
        const response = await getData('token');
        
        if(response != null) {
          setUsuarioLogado('logado');
        } else {
          setUsuarioLogado('deslogado');
        }
    }

    handleSession();
  }, [])

  return (
    <>
    {/* prevents routes being rendered before usuarioLogado' state is set */}
    { usuarioLogado.length != 0 ?
      <Routes logado={usuarioLogado === 'logado' ? true : false} />
    :
      <Text></Text>
    }
    </>  
  );
}
