import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/App/App';
import { ImagenesProvider } from './Componentes/Context/ImagenContext'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImagenesProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ImagenesProvider>
)
