import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [game, setGame] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);
  let Handle = () => {
    setGame(true);
    setGameStatus(true);
  };
  return (
    <>
      {!game ? (
        <button type="button" onClick={Handle}>
          Start Game
        </button>
      ) : (
        ""
      )}
      {game ? <Game gameStatus={gameStatus} /> : ""}
    </>
  );
}

export default App;
