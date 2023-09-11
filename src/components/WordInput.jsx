import React from "react";

const WordInput = ({ word }) => {
  return (
    <input
      type="text"
      defaultValue={word.guessed === true ? word.letter : ""}
      readOnly
    />
  );
};

export default WordInput;