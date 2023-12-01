// const h1 = document.querySelector('#score');     //To update score
// const players = document.querySelector('#players');    //Dropdown menu to select the number of times to play

// const playersValue = players.value;
// console.log(playersValue);

const p1 = document.querySelector('#p1');   //p1 button
const p2 = document.querySelector('#p2');    //p2 button
const reset = document.querySelector('#reset');    //reset button
const p1Score = document.querySelector('#p1Score');   //p1 score span
const p2Score = document.querySelector('#p2Score');   //p2 score span
const playTo = document.querySelector('#playTo');

let p1Update = 0;
let p2Update = 0;
let winningScore = 5;    //dummy winning score
let isGameOver = false;    //to check if winning score is reached

p1.addEventListener('click', function() {
    if (!isGameOver) {  
        p1Update++;
        if (p1Update === winningScore) {
            isGameOver = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
        }
    }   
    p1Score.textContent = p1Update;
})

p2.addEventListener('click', function() {
    if (!isGameOver) {  
        p2Update++;
        if (p2Update === winningScore) {
            isGameOver = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
        }
    } 
    p2Score.textContent = p2Update;
})

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value);
})

// if (p1Update > p2Update) {
//     alert('Player 1 wins');
// }
// else {
//     alert("Player 2 wins");
// }

reset.addEventListener('click', function() {
    isGameOver = false;
    p1Update = 0;
    p2Update = 0;

    p1Score.textContent = 0;
    p2Score.textContent = 0;
})