import React from "react";
import { splitWord } from "../helpers/splitWord";
import WordInput from "./WordInput";

const Word = ({ word }) => {
  let objWord = splitWord(word);

  return (
    <>
      <div>Word</div>
      <p>la palabra es {word}</p>
      {objWord?.map((word) => (
        <WordInput word={word} key={word.key} />
      ))}
    </>
  );
};

export default Word;
