import React from "react";

const WordInput = ({ word }) => {
  return (
    <input
      type="text"
      defaultValue={word.guessed === true ? word.letter : ""}
      readOnly
      className={word.guessed === true ? "word-input-guessed" : "word-input"}
    />
  );
};

export default WordInput;
