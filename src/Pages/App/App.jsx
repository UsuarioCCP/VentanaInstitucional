import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ImagenesProvider } from '../../Componentes/Context/ImagenContext';
import Home from '../Home/';
import Admin from '../Admin/';
import Navbar from '../../Componentes/Navbar';
import './App.css';

const App = () => {
  return (
    <ImagenesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </ImagenesProvider>
  );
};

export default App;