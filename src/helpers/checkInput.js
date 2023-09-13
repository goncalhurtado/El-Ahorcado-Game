export let checkInput = (word, attemp) => {

    let wordSplit = word.split("");

    if (wordSplit.includes(attemp)) {
        return true
    }
    return false
}

export let modifyObj = (objWord, letter) => {
    return objWord.map(obj => {
        if (obj.letter === letter) {
            obj.guessed = true;
        }
        return obj;
    });
}

export let checkIfWin = (objWord) => {
    if (objWord) {
        let result = objWord.every(obj => obj.guessed === true);
        return result
    } else return false
}