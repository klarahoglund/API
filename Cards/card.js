let btn = document.querySelector('#player');
let btn2 = document.querySelector('#dealer');
let btnStart = document.querySelector('#btnStart');
let gameBoard = document.querySelector('#gameBoard');
var deckid = "";


btn.addEventListener('click', getApi);
btn2.addEventListener('click', getApi);
btnStart.addEventListener('click', start);


function start() {

    dealerBoard.innerHTML = "";
    playerBoard.innerHTML = "";
    deckid = "";
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', {
        method: 'GET',
        header: { 'Accept': 'application/json' }

    })
        .then(res => res.json())
        .then(data => {

            console.log(data)

            deckid = data.deck_id;

        }
        )


        .catch(err => console.log(err));
}
function getApi() {

    if (deckid == "")
        alert("You must start by pressing START");

    fetch('https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=1', {
        method: 'GET',
        header: { 'Accept': 'application/json' }

    })
        .then(res => res.json())
        .then(data => {

            const card = data.cards[0];

            const image = document.createElement('img');
            image.setAttribute(
                'src',
                card.image,
            );
            image.setAttribute('height', '150px');
            image.setAttribute('alt', 'card');

            console.log(data.cards[0])
            if (this.id === 'player')
                playerBoard.appendChild(image);
            else
                dealerBoard.appendChild(image);

        }
        )


        .catch(err => console.log(err));
}

