const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("")


let getRandomLetter = () => {
    const indiceAleatorio = Math.floor(Math.random() * alphabet.length);
    let letter = alphabet[indiceAleatorio]
    return letter
}

export let createKeyboard = (word) => {

    let wordSplit = word.split("");
    let i = 0;

    while (i < 10) {
        let letter = getRandomLetter();

        if (!wordSplit.includes(letter)) {
            wordSplit.push(letter)
            i++
        }

    }
    return wordSplit

}