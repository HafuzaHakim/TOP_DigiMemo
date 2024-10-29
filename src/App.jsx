import { useState } from "react";
import Guide from "./component/Guide";
import Tile from "./component/Tile";

export default function App() {
  const [status, setStatus] = useState("start");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="background h-screen">
      <Guide />
    </div>
  );
}
