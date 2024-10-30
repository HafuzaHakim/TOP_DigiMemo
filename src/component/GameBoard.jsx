import { useState, useEffect } from "react";
import Loading from "./Loading";
import Score from "./Score";

const URL = "https://digi-api.com/api/v1/digimon?level=child&pageSize=250";
const baseList = [1, 15, 16, 98, 143, 349, 509, 715, 842, 891, 1292, 1440];

const GameBoard = ({ score, bestScore }) => {
  const [images, setImages] = useState(null);
  const [selectedDigimon, setSelectedDigimon] = useState([]);

  useEffect(() => {
    // Expilicitly adding loading timer for the purpose of displaying loading screen
    const timer = setTimeout(getData, 2500);
    async function getData() {
      const data = await fetch(URL);
      const response = await data.json();
      const digimons = response.content.filter((digimon) =>
        baseList.includes(digimon.id),
      );
      setImages(digimons);
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!images && <Loading />}
      {images && <Score score={score} bestScore={bestScore} />}
    </>
  );
};

export default GameBoard;
