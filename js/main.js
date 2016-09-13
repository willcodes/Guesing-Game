var answer = Math.floor((Math.random() * 100) + 1);
var submit = document.getElementById("submit");
var attempts = 0;
var attemptsMade=0;
var attempsRemaining=10;
var gameState="";
var output = document.getElementById("output");
var gameWon = false;
var score = document.getElementById("scoreboard");
guessClear = document.getElementById("guess");
console.log(answer);

window.addEventListener("keydown", keydownHandler, false); 
function keydownHandler(event)
{
 if(event.keyCode === 13)
 {
 validate();
 }
}
submit.onclick = function(){
	validate();
}
function validate(){
	guess = document.getElementById("guess").value;  // mystery number value;
	if (isNaN(guess) || guess == ""){
		output.innerHTML = "Please type a number!";
	}
	else{
	playGame();
	}
};
function playGame(){
	attempsRemaining --;
	attemptsMade ++;
	gameState = "Attempts: " + attemptsMade + "<br>" + "Remaining: " + attempsRemaining;
	if (guess > 100) {
		scoreboard.innerHTML = gameState;
		output.innerHTML = "Pick a smaller number -_-";
	}
	else if (guess == answer) {
		gameWon = true;
		output.style.color = "forestgreen";
		output.innerHTML = "Correct! ";
		scoreboard.innerHTML = gameState;
		endGame();
	}
	else if (guess > answer){
		output.style.color = "red";
		output.innerHTML = "Incorrect, Too high :(";
		scoreboard.innerHTML = gameState;
		if (attempsRemaining < 1){
			endGame();
		}
	}
	else if(guess < answer){
		output.style.color = "red";
		output.innerHTML = "Incorrect, Toooo low :O " + "<br>" + gameState;
		if (attempsRemaining < 1){
			endGame();
		}
	}
	render();
	guessClear.value = "";
	
};
function endGame(){
 	if (gameWon){
 	output.innerHTML
	 = "Yes, it's " + answer + "!" + "<br>"
	 + "It only took you " + attemptsMade + " guesses.";
 	}
 	else{
 	output.innerHTML
 	= "No more guesses left!" + "<br>"
 	+ "The number was: " + answer + ".";
 	}
 	submit.disabled = true;
	window.removeEventListener("keydown", keydownHandler, false);
 	guess.disabled = true;
};
//The arrow
var arrow = document.querySelector("#arrow"); 
function render(){
	if (guess > 100) {
	}
	else{
		arrow.style.left = guess * 3 + "px";
	}

}	 


