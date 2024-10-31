import { useState, useEffect } from "react";
import Guide from "./Guide";
import GameBoard from "./GameBoard";
import Win from "./Win";
import Lose from "./Lose";

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [status, setStatus] = useState("start");
  const [hasWin, setHasWin] = useState(null);

  useEffect(() => {
    score === 12 && setHasWin(true);
  }, [score]);

  function gameStart() {
    setStatus("play");
    setScore(0);
    setHasWin(null);
    assignBestScore();
  }

  function gameLose() {
    setHasWin(false);
  }

  function assignBestScore() {
    score > bestScore && setBestScore(score);
  }

  function gainScore() {
    setScore(score + 1);
  }

  return (
    <main className="container mx-auto h-[calc(100vh-148px)]">
      {status === "start" && <Guide onStart={gameStart} />}
      {status === "play" && (
        <GameBoard
          score={score}
          bestScore={bestScore}
          status={status}
          gainScore={gainScore}
          gameLose={gameLose}
        />
      )}
      {hasWin === true && <Win onWin={gameStart} />}
      {hasWin === false && <Lose onLose={gameStart} score={score} />}
    </main>
  );
};

export default Main;
