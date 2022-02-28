import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/App.scss';
import { Provider } from 'react-redux';
import Router from './routes/Router';

ReactDOM.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
