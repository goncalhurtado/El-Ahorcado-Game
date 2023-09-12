import React, { useEffect, useState } from "react";

import WordInput from "./WordInput";

const Word = ({ word, intento, objWord }) => {
  return (
    <>
      <p>la palabra es {word}</p>
      {objWord?.map((word) => (
        <WordInput word={word} key={word.key} />
      ))}
    </>
  );
};

export default Word;
