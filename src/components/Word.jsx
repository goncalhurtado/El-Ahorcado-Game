import React, { useEffect, useState } from "react";

import WordInput from "./WordInput";

const Word = ({ contador, objWord }) => {
  return (
    <>
      <div>
        <p>{contador === 8 && "perdiste!"}</p>
        {objWord?.map((item) => (
          <WordInput word={item} key={item.key} />
        ))}
      </div>
    </>
  );
};

export default Word;
