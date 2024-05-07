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
        <h1 className="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Cambio Imágenes
        </h1>
      </div>

      {imagenes.map((imagen, index) => (
        <div key={index} className="grid col-span-1 border-2 border-solid border-red-600">
            <h1 className="text-center">Imagen {index+1}</h1>
          <div className="flex flex-col justify-between ">
            <label htmlFor="">Url</label>
            <input
              type="text"
              name="url"
              placeholder="Ingresa la URL de la imagen"
              value={imagen.url}
              onChange={(e) => handleInputChange(index, e)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            {imagen.url && ( // Mostrar la imagen solo si la URL está ingresada
              <img
                src={imagen.url}
                alt={`Imagen ${index + 1}`}
                style={{ width: '150px', height: '150px', marginBottom: '10px' }}
              /> 
            )}
            <label htmlFor="">Titulo</label>
            <input
              type="text"
              name="titulo"
              placeholder="Ingresa el título de la imagen"
              value={imagen.titulo}
              onChange={(e) => handleInputChange(index, e)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <label htmlFor="">Descripcion</label>
            <textarea
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

      {/* Mostrar la última imagen ingresada */}
      {imagenes.length > 0 && <ImagenVisor imageUrl={imagenes[imagenes.length - 1].url} />}
    </div>
  );
};

export default FormCarousel;
