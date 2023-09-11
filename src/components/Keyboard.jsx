import React from "react";
import { createKeyboard } from "../helpers/createKeyboard";

const Keyboard = ({ selectedWord }) => {
  let resultado = createKeyboard(selectedWord);
  console.log("probando el Keyboard", resultado);

  return (
    <>
      <div>Keyboard</div>
    </>
  );
};

export default Keyboard;
