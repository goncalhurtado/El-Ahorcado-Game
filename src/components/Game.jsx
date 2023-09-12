import React, { useEffect, useState } from "react";
import Word from "./Word";

import Keyboard from "./Keyboard";
import { startGame, newGame } from "../helpers/getWords";
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
      if (contador < 8) {
        setContador(contador + 1);
      } else if (contador === 8) {
        console.log("perdiste", contador);
      }
      return;
    }
    let objUpdate = modifyObj(objWord, newIntento);
    setObjWord(objUpdate);
  };

  const startNewGame = () => {
    let newWordSelected = newGame();
    setWord(newWordSelected);
    let newWordSplit = splitWord(newWordSelected);
    setObjWord(newWordSplit);
  };

  useEffect(() => {
    let selectedWord = startGame();
    setWord(selectedWord);
    setObjWord(splitWord(selectedWord));
  }, [gameStatus]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Player contador={contador} />
        <div>
          <button onClick={startNewGame}>Start New Game</button>
        </div>
        <Word objWord={objWord} contador={contador} />
        <Keyboard word={word} updateIntento={updateIntento} />
      </div>
    </>
  );
};

export default Game;
