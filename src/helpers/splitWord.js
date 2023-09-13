export let splitWord = (word) => {
    let wordObj = [];
    let wordSplit = word.split("");

    for (let i = 0; i < wordSplit.length; i++) {
        if (wordObj.length >= 8) {
            break;
        }

        let letter = wordSplit[i];
        let isVocal = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"].includes(letter);
        let letterObj = {
            realLetter: letter,
            letter: quitarAcentos(letter),
            key: Math.floor(Math.random() * 9000) + 1000,
            guessed: isVocal,
            vocal: isVocal,
        };
        wordObj.push(letterObj);
    }

    return wordObj;
};


function quitarAcentos(letra) {
    const acentos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
    };
    return acentos[letra] || letra;
}