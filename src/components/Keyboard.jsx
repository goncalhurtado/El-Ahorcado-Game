import React, { useState } from "react";
// import { createKeyboard } from "../helpers/createKeyboard";

const Keyboard = ({ word, updateIntento }) => {
  // let resultado = createKeyboard(word);
  const handle = (letter) => {
    updateIntento(letter);
  };

  return (
    <>
      <div className="container-keyboard">
        <div className="container-btn">
          <button onClick={() => handle("q")}>Q</button>
          <button onClick={() => handle("w")}>W</button>
          <button onClick={() => handle("e")}>E</button>
          <button onClick={() => handle("r")}>R</button>
          <button onClick={() => handle("t")}>T</button>
          <button onClick={() => handle("y")}>Y</button>
          <button onClick={() => handle("u")}>U</button>
          <button onClick={() => handle("i")}>I</button>
          <button onClick={() => handle("o")}>O</button>
          <button onClick={() => handle("p")}>P</button>
        </div>
        <div className="container-btn">
          <button onClick={() => handle("a")}>A</button>
          <button onClick={() => handle("s")}>S</button>
          <button onClick={() => handle("d")}>D</button>
          <button onClick={() => handle("f")}>F</button>
          <button onClick={() => handle("g")}>G</button>
          <button onClick={() => handle("h")}>H</button>
          <button onClick={() => handle("j")}>J</button>
          <button onClick={() => handle("k")}>K</button>
          <button onClick={() => handle("l")}>L</button>
          <button onClick={() => handle("ñ")}>Ñ</button>
        </div>
        <div className="container-btn">
          <button onClick={() => handle("z")}>Z</button>
          <button onClick={() => handle("x")}>X</button>
          <button onClick={() => handle("c")}>C</button>
          <button onClick={() => handle("v")}>V</button>
          <button onClick={() => handle("b")}>B</button>
          <button onClick={() => handle("n")}>N</button>
          <button onClick={() => handle("m")}>M</button>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
