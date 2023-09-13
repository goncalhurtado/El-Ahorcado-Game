import React, { useEffect } from "react";

const Player = ({ contador }) => {
  return (
    <>
      <img
        src={`src/assets/img/${contador}.png`}
        alt="img"
        className="player-img"
      />
      {/* <img
        src={`https://res.cloudinary.com/dhvgi2cmq/image/upload/v1694626625/ahorcadito-game-test/${contador}_ahorcadito-game.png`}
        alt="img"
        className="player-img"
      /> */}
    </>
  );
};

export default Player;
