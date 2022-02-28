import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import '@/styles/App.scss';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
