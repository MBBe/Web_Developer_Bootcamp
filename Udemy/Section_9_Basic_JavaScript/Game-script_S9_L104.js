// Create secret number 
var secretNumber = 88;

//ask user for guess
var stringGuess = prompt("How miles per hour does the Doloreen need for Marty to go back to the future?");
var guess = Number(stringGuess);
alert(guess);

//check guess is right
if (guess === secretNumber){
	alert("YOU GOT IT RIGHT");
}

//you got it wrong
//else{
//	alert("WRONG!");
//}

//check if guess is higher
else if (guess > secretNumber){
	alert("Too high. Guess again!");
}

//otherwise, check if lower
else{
	alert("Too low. Guess again!");
}