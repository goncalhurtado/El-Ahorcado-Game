import React from "react";

const WordInput = ({ word }) => {
  console.log(word);
  return (
    <input
      type="text"
      defaultValue={word.vocal === true ? word.letter : ""}
      readOnly
    />
  );
};

export default WordInput;
