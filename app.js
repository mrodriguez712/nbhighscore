import { numberblocksImage } from "./data.js";

numberblocksImage.sort(() => Math.floor(Math.random()))

const grid = document.querySelector('#grid')
const cardsChosen = []

function createBoard() {
    for(let i = 0; i < numberblocksImage.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cover.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}
createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(numberblocksImage[cardId].name)
    console.log(cardsChosen)
}