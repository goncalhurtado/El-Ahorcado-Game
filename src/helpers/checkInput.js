export let checkInput = (word, attemp) => {

    let wordSplit = word.split("");

    if (wordSplit.includes(attemp)) {
        console.log("correcto");
        return true
    }
    console.log("incorrecto");
    return false
}

export let modifyObj = (objWord, letter) => {
    const index = objWord.findIndex(obj => obj.letter === letter);

    objWord[index].guessed = true;

    return objWord;
}