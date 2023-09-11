import axios from 'axios';
let currentWords = JSON.parse(localStorage.getItem("words")) || [];

export let startGame = () => {
    if (!currentWords[1]) {
        fetchData()
        return selectWord()

    }
    return selectWord()
}

export let selectWord = () => {
    const wordString = localStorage.getItem("words")
    const word = JSON.parse(wordString)
    return word[0]
}


const getWordsApi = {
    method: 'GET',
    url: 'https://clientes.api.greenborn.com.ar/public-random-word?c=9&l=8',
};

export async function fetchData() {
    try {
        const response = await axios.request(getWordsApi);

        wordsForPlay = response.data
        localStorage.setItem("words", JSON.stringify(wordsForPlay))

    } catch (error) {
        console.error(error);
    }
}
let wordsForPlay = []