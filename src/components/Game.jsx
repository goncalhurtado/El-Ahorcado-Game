import React, { useEffect, useState } from "react";
import Word from "./Word";

import Keyboard from "./Keyboard";
import { startGame } from "../helpers/getWords";
import { checkInput, modifyObj } from "../helpers/checkInput";
import { splitWord } from "../helpers/splitWord";
import Player from "./Player";

const Game = ({ gameStatus }) => {
  const [word, setWord] = useState("");
  const [intento, setIntento] = useState();
  const [contador, setContador] = useState(0);
  const [objWord, setObjWord] = useState();

  const updateIntento = (newIntento) => {
    setIntento(newIntento);

    if (!checkInput(word, newIntento)) {
      setContador(contador + 1);
      return;
    }
    let objUpdate = modifyObj(objWord, newIntento);
    setObjWord(objUpdate);
  };

  useEffect(() => {
    let selectedWord = startGame();
    setWord(selectedWord);
    setObjWord(splitWord(selectedWord));
  }, [gameStatus]);

  return (
    <>
      <Player contador={contador} />
      <Word word={word} intento={intento} objWord={objWord} />
      <Keyboard word={word} updateIntento={updateIntento} />
    </>
  );
};

export default Game;
