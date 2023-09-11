import React, { useEffect, useState } from "react";
import Word from "./Word";
import Keyboard from "./Keyboard";
import { startGame } from "../helpers/getWords";

const Game = ({ gameStatus }) => {
  const [word, setWord] = useState("");
  const [selectedWord, setSelectedWord] = useState("");

  useEffect(() => {
    let selectedWord = startGame();

    setWord(selectedWord);
    setSelectedWord(selectedWord);
  }, [gameStatus]);

  return (
    <>
      <Word word={word} />
      <Keyboard selectedWord={selectedWord} />
    </>
  );
};

export default Game;
