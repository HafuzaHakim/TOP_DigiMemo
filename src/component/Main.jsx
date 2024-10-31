import { useState } from "react";
import Guide from "./Guide";
import GameBoard from "./GameBoard";

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [status, setStatus] = useState("start");

  function gameStart() {
    setStatus("play");
  }

  function gameLose() {
    setStatus("lose");
  }

  function gameWin() {
    setStatus("win");
  }

  function gainScore() {
    setScore(score + 1);
  }

  return (
    <main className="container mx-auto h-[calc(100vh-140px)] overflow-auto">
      {status === "start" && <Guide onStart={gameStart} />}
      {status === "play" && <GameBoard score={score} bestScore={bestScore} />}
    </main>
  );
};

export default Main;
