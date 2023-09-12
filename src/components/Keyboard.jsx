import React, { useState } from "react";
import { createKeyboard } from "../helpers/createKeyboard";

const Keyboard = ({ word, updateIntento }) => {
  let resultado = createKeyboard(word);
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
