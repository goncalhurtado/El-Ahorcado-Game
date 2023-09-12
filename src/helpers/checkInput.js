export let checkInput = (word, attemp) => {

    let wordSplit = word.split("");

    if (wordSplit.includes(attemp)) {

        return true
    }

    return false
}

export let modifyObj = (objWord, letter) => {
    const index = objWord.findIndex(obj => obj.letter === letter);

    objWord[index].guessed = true;

    return objWord;
}