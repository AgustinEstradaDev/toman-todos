import React, { useState } from "react";
import Modal from "../modal/Modal";

const Card = ({ number, modalText, isOpened, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    onOpen(); // Marca como abierto
  };

  return (
    <>
      {/* Contenedor con borde degradado */}
      <div
        className={`p-[3px] mt-4 rounded-lg cursor-pointer transition-transform hover:scale-105
          ${
            isOpened
              ? "bg-gray-500"
              : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          }`}
        onClick={handleClick}
      >
        {/* Cuadrado interno */}
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#282c34] flex justify-center items-center rounded-lg">
          <span
            className={`text-2xl md:text-4xl font-extrabold bg-clip-text ${
              isOpened
                ? "text-gray-400"
                : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent"
            }`}
          >
            {number}
          </span>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <Modal setIsOpen={setIsOpen} modalText={modalText} />}
    </>
  );
};

export default Card;
