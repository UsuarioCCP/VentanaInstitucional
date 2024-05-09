// import React, { useState } from "react";
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { ImagenesProvider } from "../../Componentes/Context/ImagenContext";
import Home from '../Home/';
import Admin from '../Admin/';
import Navbar from '../../Componentes/Navbar';
// import Baner from '../../Componentes/Baner';
import './App.css'
// import Form from "../../Componentes/Form"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />} ,
    { path: '/admin', element: <Admin /> },
  ])

  return routes
}

const App = () => {
  

  return (
       <ImagenesProvider>
          <BrowserRouter>
            <AppRoutes />
            <Navbar />
            {/* <Form /> */}
            {/* <Baner /> */}
        </BrowserRouter>
       </ImagenesProvider>
  )
}

export default App
