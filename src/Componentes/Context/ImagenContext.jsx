import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const ImagenesContext = createContext();

// Proveedor del contexto
export const ImagenesProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([
    { url: '', titulo: '', descripcion: '' },
    { url: '', titulo: '', descripcion: '' },
    { url: '', titulo: '', descripcion: '' },
  ]);

  // Cargar imágenes desde localStorage al iniciar
  useEffect(() => {
    const storedImages = localStorage.getItem("carouselImages");
    if (storedImages) {
      setImagenes(JSON.parse(storedImages));
    }
  }, []);

  // Función para actualizar las imágenes en el contexto y en localStorage
  const actualizarImagenes = (nuevasImagenes) => {
    setImagenes(nuevasImagenes);
  };

  return (
    <ImagenesContext.Provider value={{ imagenes, actualizarImagenes }}>
      {children}
    </ImagenesContext.Provider>
  );
};
