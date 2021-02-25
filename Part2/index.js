

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');


console.log(idInput);
console.log(colorInput);

function setCard() {
    const card = document.getElementById(idInput.value);
    console.log(card);
    card.style.color = colorInput.value;
}

function resetCards() {
    const cardArray = document.querySelectorAll('section');
    console.log(cardArray);
    cardArray.forEach(card => {
        card.style.color = 'grey'
    })
}