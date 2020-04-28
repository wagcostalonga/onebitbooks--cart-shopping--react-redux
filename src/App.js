import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyles from './styles/Global';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
    
