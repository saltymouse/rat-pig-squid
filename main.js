// Remove JS warning for JS users

	document.getElementById("nojs").style.display = "none";

// Add game logic

function getComputerChoice() {
	var computerChoice = Math.random();

	if (computerChoice < 0.34) {
		computerChoice = "rat";
	} else if (computerChoice < 0.67) {
		computerChoice = "pig";
	} else {
		computerChoice = "squid";
	}

	return computerChoice;
}

function playGame(playerChoice) {
	var computerChoice = getComputerChoice();

	if (playerChoice === computerChoice) {
		alert("It's a tie!");
	}

	if (playerChoice === 'rat') {
		if (computerChoice === 'squid') {
			alert("You Win! Rat nibbles poor squid to death.");
		} else {
			alert("You Lose! Rat was squished by piggy.");
		}
	}

	if (playerChoice === 'pig') {
		if (computerChoice === 'rat') {
			alert("You Win! Piggy squishes little rat.");
		} else {
			alert("You Lose! Piggy was strangled by squid.");
		}
	}

	if (playerChoice === 'squid') {
		if (computerChoice === 'pig') {
			alert("You Win! Squid strangles litte piggy.");
		} else {
			alert("You Lose! Squid was nibbled to death by rat.");
		} 
	}


}