import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App/App';
import { ImagenesProvider } from './Componentes/Context/ImagenContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ImagenesProvider>
      <App />
    </ImagenesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);