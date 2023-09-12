import React, { useEffect, useState } from "react";
import Word from "./Word";

import Keyboard from "./Keyboard";
import { startGame } from "../helpers/getWords";
import { checkInput, modifyObj } from "../helpers/checkInput";
import { splitWord } from "../helpers/splitWord";

const Game = ({ gameStatus }) => {
  const [word, setWord] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  let [intento, setIntento] = useState();
  let [contador, setContador] = useState(0);
  const [objWord, setObjWord] = useState();

  const updateIntento = (newIntento) => {
    intento = newIntento;
    // setIntento(newIntento);
    if (!checkInput(word, newIntento)) {
      contador++;
      return;
    }
    let objUpdate = modifyObj(objWord, intento);
    setObjWord(objUpdate);
    console.log(objWord);
    // console.log(objWord);
  };

  useEffect(() => {
    let selectedWord = startGame();
    setWord(selectedWord);
    setSelectedWord(selectedWord);
    setObjWord(splitWord(selectedWord));
  }, [gameStatus]);

  return (
    <>
      <Word word={word} intento={intento} objWord={objWord} />
      <Keyboard selectedWord={selectedWord} updateIntento={updateIntento} />
    </>
  );
};

export default Game;
