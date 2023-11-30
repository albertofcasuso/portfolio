import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Router from './routes';
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <Provider store={store}>
      <Router />
    </Provider>
  </ChakraProvider>
);
