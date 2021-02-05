import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import HomeContainer from './containers/homeContainer/HomeContainer.jsx';

const App = () => (
  <>
    <ChakraProvider>
      <HomeContainer />
    </ChakraProvider>
  </>
);

export default App;
