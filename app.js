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
let scores, roundScore, activePlayer, gamePlaying;

init();

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice, "<--random number");

// document.querySelector("#current-" + activePlayer).textContent = dice;

// document.querySelector(".dice").style.display = "none";
// get element by id a bit faster than qs.

// callback function that is called by another function. this is being called by eventlistener function
// or write anoynomous function. no name used once
document.querySelector(".btn-roll").addEventListener("click", function(){
	if(gamePlaying){
		// 1. Random number 
		let dice = Math.floor(Math.random() * 6) + 1;
		// 2. Display the result 
		let diceDOM = document.querySelector(".dice");
		diceDOM.style.display = "block";
		diceDOM.src = "dice-" + dice + ".png"
		// 3. Update the round score IF the rolled number was NOT a 1
		if (dice !== 1){
			// add score
			roundScore += dice
			document.querySelector("#current-" + activePlayer).textContent = roundScore
		} else {
			// next player 
			nextPlayer();

		}

	}
	
});

document.querySelector(".btn-hold").addEventListener("click", function(){
	if(gamePlaying){

		// add player current  score to global score
		scores[activePlayer] += roundScore;
		// update the ui to reflect change 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		// check if player won the game (100 pts)
		if(scores[activePlayer] >= 50) {
			document.querySelector('#name-' + activePlayer).textContent = "Winner";
			hideDice();
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;

		} else {
			nextPlayer();
		}

	}


});

document.querySelector(".btn-new").addEventListener("click", init)

function nextPlayer() {
	activePlayer === 0  ? activePlayer = 1 : activePlayer = 0; 
	roundScore = 0; 
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	hideDice();
}

function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;


	hideDice();
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";
	document.getElementById('name-0').textContent = "Player 1";
	document.getElementById('name-1').textContent = "Player 2";
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

	}

function hideDice(){
	document.querySelector(".dice").style.display = "none";
}



