import React, { useState } from "react";
import "./App.css";
import Title from "./components/header/Title";
import Card from "./components/card/Card";
import cardsData from "./data.json";
function App() {
  const [openedCards, setOpenedCards] = useState([]);

  const handleOpen = (number) => {
    if (!openedCards.includes(number)) {
      setOpenedCards([...openedCards, number]);
    }
  };
  return (
    <div className="App w-full h-full bg-[#282c34]">
      <div className="w-full flex  flex-col justify-start items-center">
        <header className="App-heade flex flex-col p-2">
          <Title />
          <p className="text-white text-lg flex flex-col">
            <span>Modo de juego:</span>
            Elige un numero y descubre quien toma
          </p>
        </header>
        <div className="w-full flex items-start justify-between flex-wrap p-4">
          {cardsData.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              modalText={card.text}
              isOpened={openedCards.includes(card.number)}
              onOpen={() => handleOpen(card.number)}
            />
          ))}
        </div>
        <h3>Ahora... vamos a cruz?</h3>
      </div>
    </div>
  );
}

export default App;
