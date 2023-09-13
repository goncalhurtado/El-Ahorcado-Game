import WordInput from "./WordInput";

const Word = ({ objWord, gameEnd }) => {
  return (
    <>
      <div>
        <p>{gameEnd === "win" ? "Ganaste!" : ""}</p>
        <p>{gameEnd === "lose" ? "Perdiste!" : ""}</p>
        {/* <p>{gameEnd === undefined && ""}</p> */}
        {objWord?.map((item) => (
          <WordInput word={item} key={item.key} />
        ))}
      </div>
    </>
  );
};

export default Word;
