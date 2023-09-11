let wordObj = [];

export let splitWord = (word) => {
    let wordSplit = word.split("");

    for (let i = 0; i < wordSplit.length; i++) {
        if (wordObj.length >= 8) {
            break;
        }

        let letter = wordSplit[i];
        let isVocal = ["a", "e", "i", "o", "u"].includes(letter);
        let letterObj = {
            letter: letter,
            key: Math.floor(Math.random() * 900) + 100,
            guessed: isVocal,
            vocal: isVocal,
        };
        wordObj.push(letterObj);
    }

    return wordObj;
};