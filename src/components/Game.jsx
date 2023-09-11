import React, { useEffect, useState } from "react";
import Word from "./Word";
import Keyboard from "./Keyboard";
import { startGame } from "../helpers/getWords";

const Game = ({ gameStatus }) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    let selectedWord = startGame();
    setWord(selectedWord);
  }, [gameStatus]);

  return (
    <>
      <Word word={word} />
      <Keyboard word={word} />
    </>
  );
};

export default Game;
