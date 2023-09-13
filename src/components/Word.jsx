import WordInput from "./WordInput";

const Word = ({ objWord, gameEnd, word }) => {
  return (
    <>
      <div>
        <p>{gameEnd === "win" ? "Ganaste!" : ""}</p>
        <p>{gameEnd === "lose" ? `Perdiste! la palabra es: ${word}` : ""}</p>
        {/* <p>{gameEnd === undefined && ""}</p> */}
        {objWord?.map((item) => (
          <WordInput word={item} key={item.key} />
        ))}
      </div>
    </>
  );
};

export default Word;
