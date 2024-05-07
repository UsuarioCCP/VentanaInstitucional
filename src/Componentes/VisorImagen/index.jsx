import React from 'react';

const ImagenVisor = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Imagen" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImagenVisor;