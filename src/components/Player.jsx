import React, { useEffect } from "react";

const Player = ({ contador }) => {
  return (
    <>
      <img src={`src/assets/img/${contador}.png`} alt="img" />
    </>
  );
};

export default Player;
