import React, { useState, useEffect } from "react";
import "./styles.css";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: "Garfiel",
      imageUrl: "https://i.imgur.com/QFRW2ig.jpg",
      description:
        "🎃 ¡Adéntrate en el oscuro festín de nuestro Combo Perro Americano del Más Allá! 🌭👻",
    },
    {
      title: "Calzadofootprints",
      imageUrl: "https://i.imgur.com/QQ6SU5S.jpg",
      description:
        "Los instantes son pasajeros,vivamos cada día con amor y alegría 👣😊regalemos sonrisas😀😘👣#calzadofootprints",
    },
    {
      title: "Cosa Peluda",
      imageUrl: "https://i.imgur.com/tHolPmT.jpg",
      description: "Cosa Peluda. Estilo para tu mascota.",
    },
    {
      title: "Linea de Atención Express",
      imageUrl: "https://i.imgur.com/XIbD9ht.jpg",
      description: "Linea de atención Express Cameral",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length); // Mostrar un elemento a la vez
    }, 10000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  return (
    <div
      id="carouselExampleCaptions"
      className="absolute max-w-sm h-[33rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slidesData.slice(activeIndex, activeIndex + 1).map((slide, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-600ms ease-in-out motion-reduce:transition-none`}
            data-te-carousel-active
            data-te-carousel-item
            id="slide-carousel"
          >
            <img
              src={slide.imageUrl}
              className="block w-full h-96"
              id="imagen-carousel"
              alt="..."
            />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {slide.title}
                </h5>
              </a>
              <p className="mb-3 text-center font-medium text-black dark:text-gray-400">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
