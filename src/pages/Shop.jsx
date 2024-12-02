import { useState, useEffect } from "react";
import ShopData from "../data/Tienda";

function Shop() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-4">
      {ShopData.map((recipe) => (
        <div key={recipe.id}>
          <div className="max-w-auto bg-white border border-gray-200 rounded-lg shadow">
            {/* 
            <a href={recipe.link}>
              <img
                className="rounded-t-lg"
                src={recipe.image}
                alt={recipe.title}
              />
            </a>
            */}
            {/* Contenido */}
            <div className="p-5">
              {/* Título */}
              <a href={recipe.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
                  {recipe.title}
                </h5>
              </a>

              {/* Descripción */}
              <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                {recipe.description}
              </p>

              {/* Precio */}
              <p className="mb-4 text-lg font-semibold text-gray-800">
                Precio: ${recipe.price.toFixed(2)}
              </p>

              {/* Botón */}
              <a
                href={recipe.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-kelloggs rounded-lg hover:bg-kelloggsHover focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Añadir a la cesta
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
