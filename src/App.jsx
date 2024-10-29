import { useState } from "react";
import Header from "./component/Header";
import Tile from "./component/Tile";
import Footer from "./component/Footer";
import Guide from "./component/Guide";

export default function App() {
  const [status, setStatus] = useState("start");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function startGame() {
    setStatus("play");
  }

  return (
    <div className="background relative flex h-screen flex-col pt-2">
      <Header />
      <Tile status={status} />
      <Footer />
    </div>
  );
}
