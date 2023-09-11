import React from "react";
import { createKeyboard } from "../helpers/createKeyboard";

const Keyboard = ({ selectedWord }) => {
  let resultado = createKeyboard(selectedWord);

  return (
    <>
      <div>Keyboard</div>
      {resultado?.map((letter, index) => (
        <button key={index}>{letter}</button>
      ))}
    </>
  );
};

export default Keyboard;
