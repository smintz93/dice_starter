/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// 

// Global vars
let scores = [0,0];
let roundScore = 0;
let activePlayer = 0; 

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice, "<--random number");

document.querySelector("#current-" + activePlayer).textContent = dice;

document.querySelector(".dice").style.display = "none";

function btn(){

}

// callback function that is called by another function. this is being called by eventlistener function
// or write anoynomous function. no name used once
document.querySelector(".btn-roll").addEventListener("click", function(){
	console.log('click')
	// 1. Random number 
	let dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result 
	document.querySelector(".dice").style.display = "block";


	// 3. Update the round score IF the rolled number was NOT a 1
});