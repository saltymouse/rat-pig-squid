// Remove JS warning for JS users

	document.getElementById("nojs").style.display = "none";

window.onload = function () {
	var rat = document.getElementById("ratButton");
	var choice = rat.getAttribute("id");
	rat.onclick = getPlayerChoice;
}

// Add game logic

//Sucky and incomplete code. Will rewrite / complete in the future. Just learning how to work with Git. 
function getPlayerChoice(event) {

	console.log(event);
}

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

function compareAnimals(userChoice, computerChoice) {

}