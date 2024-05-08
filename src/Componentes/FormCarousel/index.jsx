import React, { useState, useEffect } from "react";
import ImagenVisor from '../VisorImagen';

const FormCarousel = ({ cambioImagenCarouselUrl }) => {
  const [imagenes, setImagenes] = useState([
    { url: "", titulo: "", descripcion: "", position:1 },
    { url: "", titulo: "", descripcion: "", position:2 },
    { url: "", titulo: "", descripcion: "", position:3 },
    { url: "", titulo: "", descripcion: "", position:4 }
  ]);

  // Cargar imágenes desde localStorage al iniciar
  useEffect(() => {
    const storedImages = localStorage.getItem("carouselImages");
    if (storedImages) {
      setImagenes(JSON.parse(storedImages));
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedImages = [...imagenes];
    updatedImages[index][name] = value;
    setImagenes(updatedImages);
  };

  const handleSaveChanges = () => {
    localStorage.setItem("carouselImages", JSON.stringify(imagenes));
    // Lógica adicional aquí, si es necesario
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="grid col-span-4">
        <h1 className="text-center mb-1 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Cambiar Información
        </h1>
      </div>

      {imagenes.map((imagen, index) => (
        <div key={index} className="grid col-span-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-center">Imagen {index+1}</h1>
          <div className="flex flex-col justify-between ">
            <label className="block pl-2 text-sm font-medium text-gray-900 dark:text-white">Url</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              name="url"
              placeholder="Ingresa la URL de la imagen"
              value={imagen.url}
              onChange={(e) => handleInputChange(index, e)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <div className="flex justify-center">
              {imagen.url && ( // Mostrar la imagen solo si la URL está ingresada
                <img
                  className=" max-w-lg mx-auto object-fill w-[15rem] h-[12rem]"
                  src={imagen.url}
                  alt={`Imagen ${index + 1}`}
                  
                /> 
              )}
            </div>
            <label className="block pl-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
              name="titulo"
              placeholder="Ingresa el título de la imagen"
              value={imagen.titulo}
              onChange={(e) => handleInputChange(index, e)}
              style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
            />
            <label className="blockp-2 pl-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              name="descripcion"
              placeholder="Ingresa la descripción de la imagen"
              value={imagen.descripcion}
              onChange={(e) => handleInputChange(index, e)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px', resize: 'vertical' }}
            />
          </div>
        </div>
      ))}

      <div className="grid col-span-4 mt-4">
        <div className="flex justify-evenly">
          <button
            onClick={handleSaveChanges}
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormCarousel;
