import React, { useEffect, useState } from "react";
import Word from "./Word";
import Keyboard from "./Keyboard";
import { startGame, newGame } from "../helpers/getWords";
import { checkInput, modifyObj } from "../helpers/checkInput";
import { splitWord } from "../helpers/splitWord";
import { checkIfWin } from "../helpers/checkInput";
import Player from "./Player";

const Game = ({ gameStatus }) => {
  const [word, setWord] = useState("");
  const [intento, setIntento] = useState();
  const [contador, setContador] = useState(0);
  const [objWord, setObjWord] = useState();
  const [gameEnd, setgameEnd] = useState("");

  const updateIntento = (newIntento) => {
    setIntento(newIntento);

    //PREGUNTAR A MARTIN PORQUE FUNCIONA DE ESTA MANERA
    if (!checkInput(word, newIntento)) {
      if (contador < 8) {
        setContador(contador + 1);
        if (contador === 7) {
          setgameEnd("lose");
        }
      } else if (contador === 8) {
        setgameEnd("lose");
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
    setContador(0);
    setgameEnd("");
  };

  if (checkIfWin(objWord) && gameEnd !== "win") {
    setgameEnd("win");
  }

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
          {gameEnd && <button onClick={startNewGame}>Nuevo Juego</button>}
        </div>
        <Word objWord={objWord} gameEnd={gameEnd} word={word} />
        <Keyboard word={word} updateIntento={updateIntento} />
      </div>
    </>
  );
};

export default Game;
