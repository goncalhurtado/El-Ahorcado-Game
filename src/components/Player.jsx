import React, { useEffect } from "react";

const Player = ({ contador }) => {
  return (
    <>
      <div className="center">
        <div className="player">
          <img
            src={`src/assets/img/${contador}.png`}
            alt="img"
            className="player__img"
          />
        </div>
      </div>
      {/* <img
        src={`https://res.cloudinary.com/dhvgi2cmq/image/upload/v1694626625/ahorcadito-game-test/${contador}_ahorcadito-game.png`}
        alt="img"
        className="player-img"
      /> */}
    </>
  );
};

export default Player;
