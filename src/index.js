import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Global from './components/styled-components/theme/Global.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Global />
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
