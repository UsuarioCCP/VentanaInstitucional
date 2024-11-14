// Snowfall.js
import React, { useEffect, useState } from 'react';
import './Snowfall.css';

const Snowfall = ({ snowflakeCount = 50, flakeSize = 1, fallSpeed = 3 }) => {
  const [flakes, setFlakes] = useState([]);

  // Función para seleccionar un filtro de color navideño aleatoriamente
  const getRandomFilter = () => {
    const filters = [
      'hue-rotate(200deg) saturate(100) brightness(0.8)',  // Rojo
       // Verde
      'hue-rotate(230deg) saturate(150) brightness(1)',  // Amarillo
      'saturate(0) brightness(2.2)',                                  // Blanco
    ];
    return filters[Math.floor(Math.random() * filters.length)];
  };

  useEffect(() => {
    // Generar copos de nieve con posiciones y velocidades aleatorias
    const newFlakes = Array.from({ length: snowflakeCount }).map(() => ({
      left: Math.random() * 150, // Posición inicial horizontal aleatoria
      animationDuration: `${Math.random() * (fallSpeed + 2) + fallSpeed}s`,
      size: `${Math.random() * (flakeSize - 1) + 1}px`,
      filter: getRandomFilter(), // Asignar un filtro de color aleatorio
    }));
    setFlakes(newFlakes);
  }, [snowflakeCount, flakeSize, fallSpeed]);

  return (
    <div className="snowfall">
      {flakes.map((flake, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: flake.animationDuration,
            width: flake.size,
            height: flake.size,
            filter: flake.filter, // Aplicar el filtro de color
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
};

export {Snowfall};
