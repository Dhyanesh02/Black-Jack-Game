// create two varibales firstCard and secondCard  and set values between 2-11

// let firstCard = getRandomNumber();
// let secondCard = getRandomNumber();
// sum of two cards
// let sum = firstCard + secondCard;
let sum = 0;
// console.log(sum)
let cardValues = [];
let hasBlackJack = false;
let isAlive = false;
let message = ""
//Message object 
let messageEl = document.getElementById("message-el");
//Sum of the values of cards
let sumEl = document.getElementById("sum-el");
//Number of cards drawn and their number
let cardEl = document.getElementById("card-el");
// let sumEl = document.querySelector("#sum-el");

//
let newCardApproach = true;
//Fuction to start the game
function startGame() {
  // cardValues = [];
  if (sum<=20 && newCardApproach === true) {
    isAlive = true;
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cardValues.push(firstCard, secondCard);
    sum += (firstCard + secondCard);
    renderGame();
    console.log(personName)
  }
  
}

//Function to draw cards from 2 - 11
//Math.randow()*5 will generate number between 0.000 to 4.999
function getRandomNumber() {
  // return Math.floor(Math.random() * 9)+2; //2->11
  //or
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
  
}

//Function to render values
function renderGame() {
  //Display Sum of cards
  sumEl.textContent = "Sum: " + sum;
  //Display Values of Cards
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cardValues.length;i++) {
    cardEl.textContent += cardValues[i]+" ";
  }
  

  if (sum <=20 && cardValues.length < 3) {
  message="Do you want to draw a new card? 🙂";
  }else if (sum === 21) {
    message="Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message="You're out of the game! 😭";
    isAlive = false;
  }
  // Display the Message
  messageEl.textContent = message;
  console.log(message);
  console.log(Math.floor(3.9));

  newCardApproach = false;
}

//Function to generate new card
function newCard() {
  if (isAlive === true && hasBlackJack === false && cardValues.length <3) {
    let thirdCard = getRandomNumber();

    cardValues.push(thirdCard);

    sum += thirdCard;

    renderGame();
  }
}


function startOver() {
  sum = 0;
  // console.log(sum)
  cardValues = [];
  hasBlackJack = false;
  isAlive = false;
  message = "";
  newCardApproach = true;
  messageEl.textContent = "Want to play a round?";
  sumEl.textContent = "Sum: ";
  cardEl.textContent = "Cards: ";
}

// Detect the current page by checking the pathname
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;

    if (currentPage.includes('index.html') || currentPage === '/') {
        const form = document.getElementById('form');
        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                const name = document.getElementById('name').value;
                const betAmount = document.getElementById('betAmount').value;

                localStorage.setItem('name', name);
                localStorage.setItem('betAmount', betAmount);

                window.location.href = 'game.html';
            });
        } else {
            console.error('Form element not found!');
        }
    } else if (currentPage.includes('game.html')) {
        const name = localStorage.getItem('name');
        const betAmount = localStorage.getItem('betAmount');

        if (name && betAmount) {
            document.getElementById('displayName').textContent = `Name: ${name}`;
            document.getElementById('displayBetAmount').textContent = `Bet Amount: ${betAmount}`;
        } else {
            document.body.innerHTML = '<h2>No data found. Please go back and submit the form.</h2>';
        }
    }
});
