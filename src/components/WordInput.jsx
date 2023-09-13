import React from "react";

const WordInput = ({ word }) => {
  console.log(word);
  return (
    <input
      type="text"
      defaultValue={word.guessed === true ? word.realLetter : ""}
      readOnly
      className={word.guessed === true ? "word-input-guessed" : "word-input"}
    />
  );
};

export default WordInput;
