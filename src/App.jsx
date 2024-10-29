import { useState } from "react";
import Header from "./component/Header";
import Guide from "./component/Guide";
import Tile from "./component/Tile";

export default function App() {
  const [status, setStatus] = useState("start");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function startGame() {
    setStatus("play");
  }

  return (
    <div className="background relative h-screen">
      <Header />
      {status === "start" && <Guide startGame={startGame} />}
      {status === "play" && <Tile />}
      {status === "end" && <GameOver />}
    </div>
  );
}
