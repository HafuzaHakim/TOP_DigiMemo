import { useState, useEffect } from "react";

const URL = "https://digi-api.com/api/v1/digimon?level=child&pageSize=250";
const baseList = [1, 15, 16, 98, 143, 349, 509, 715, 842, 891, 1292, 1440];

const Tile = () => {
  const [images, setImages] = useState(null);
  const [selectedDigimon, setSelectedDigimon] = useState([]);

  useEffect(() => {
    // Expilicitly adding loading timer for the purpose of displaying loading screen
    const timer = setTimeout(getData, 2000);
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

  return <div className="container mx-auto">This is a gameboard</div>;
};

export default Tile;
