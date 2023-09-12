import React, { useEffect, useState } from "react";

import WordInput from "./WordInput";

const Word = ({ word, intento, objWord }) => {
  return (
    <>
      <p>la palabra es {word}</p>
      {objWord?.map((item) => (
        <WordInput word={item} key={item.key} />
      ))}
    </>
  );
};

export default Word;
