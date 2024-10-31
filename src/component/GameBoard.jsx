import { useState, useEffect } from "react";
import Loading from "./Loading";
import Score from "./Score";
import Cards from "./Cards";

const URL = "https://digi-api.com/api/v1/digimon?level=child&pageSize=250";
const baseList = [1, 15, 16, 98, 143, 349, 509, 715, 842, 891, 1292, 1440];

const GameBoard = ({ score, bestScore, gainScore, gameLose }) => {
  const [images, setImages] = useState(null);
  const [selectedDigimon, setSelectedDigimon] = useState([]);

  useEffect(() => {
    // Expilicitly adding loading timer for the purpose of displaying loading screen
    async function getData() {
      const data = await fetch(URL);
      const response = await data.json();
      const digimons = response.content.filter((digimon) =>
        baseList.includes(digimon.id),
      );
      setImages(digimons);
    }

    const timer = setTimeout(getData, 2500);

    return () => clearTimeout(timer);
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function shuffleImage() {
    const sourceImage = [...images];
    shuffle(sourceImage);
    setImages(sourceImage);
  }

  function handleClick(id) {
    if (selectedDigimon.includes(id)) {
      gameLose();
      setSelectedDigimon([]);
    } else {
      setSelectedDigimon([...selectedDigimon, id]);
      gainScore();
      shuffleImage();
    }
  }

  return (
    <>
      {!images && <Loading />}
      {images && (
        <div className="flex h-full flex-col justify-between gap-4">
          <Cards
            digimons={images}
            selectedDigimon={selectedDigimon}
            handleClick={handleClick}
          />
          <Score score={score} bestScore={bestScore} />
        </div>
      )}
    </>
  );
};

export default GameBoard;
