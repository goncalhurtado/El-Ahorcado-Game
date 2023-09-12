import React, { useState } from "react";
import { createKeyboard } from "../helpers/createKeyboard";

const Keyboard = ({ selectedWord, updateIntento }) => {
  let resultado = createKeyboard(selectedWord);
  const handle = (letter) => {
    updateIntento(letter);
  };

  return (
    <>
      <div>Keyboard</div>
      {resultado?.map((letter, index) => (
        <button onClick={() => handle(letter)} key={index}>
          {letter}
        </button>
      ))}
    </>
  );
};

export default Keyboard;
