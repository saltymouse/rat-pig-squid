// Remove JS warning for JS users
document.getElementById("nojs").style.display = "none";

// Visual results for CPU
var cpuAnimal = document.getElementById("cpuAnimal2img");
var animalImages = ["rat-alive.svg", "pig-alive.svg", "squid-alive.svg"];
var animalIndex = 0;
function cpuCycle() {
    cpuAnimal.setAttribute("src", animalImages[animalIndex]);
    animalIndex++;
    if (animalIndex >= animalImages.length) {
        animalIndex = 0;
    }
}
var intervalHandler = setInterval(cpuCycle, 500);

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
// Set globals to grab animal img id
var rat = document.getElementById("ratButton");
var pig = document.getElementById("pigButton");
var squid = document.getElementById("squidButton");
var results = document.getElementById("resultBox");

function playGame(playerChoice) {
	var computerChoice = getComputerChoice();
        
	if (playerChoice === computerChoice) {
		return results.innerHTML = "<p>Tie!</p>";
        console.log(playerChoice,computerChoice);
	}

	if (playerChoice === 'rat') {
        pig.style.opacity = "0.5";
        squid.style.opacity = "0.5";
		if (computerChoice === 'squid') {
            clearInterval(intervalHandler);
			cpuAnimal.setAttribute("src", animalImages[2]);
            results.innerHTML = "<p style='line-height:100px;'>Win!</p>";
		} else {
            clearInterval(intervalHandler);
            cpuAnimal.setAttribute("src", animalImages[1]);
			results.innerHTML = "<p style='line-height:100px;'>Lose!</p>";
		}
	}

	if (playerChoice === 'pig') {
        rat.style.opacity = "0.5";
        squid.style.opacity = "0.5";
		if (computerChoice === 'rat') {
            clearInterval(intervalHandler);
            cpuAnimal.setAttribute("src", animalImages[0]);
			results.innerHTML = "<p style='line-height:100px;'>Win!</p>";
		} else {
            clearInterval(intervalHandler);
            cpuAnimal.setAttribute("src", animalImages[2]);
			results.innerHTML = "<p style='line-height:100px;'>Lose!</p>";
		}
	}

	if (playerChoice === 'squid') {
        rat.style.opacity = "0.5";
        pig.style.opacity = "0.5";
		if (computerChoice === 'pig') {
			clearInterval(intervalHandler);
            cpuAnimal.setAttribute("src", animalImages[1]);
			results.innerHTML = "<p style='line-height:100px;'>Win!</p>";
		} else {
			clearInterval(intervalHandler);
            cpuAnimal.setAttribute("src", animalImages[0]);
			results.innerHTML = "<p style='line-height:100px;'>Lose!</p>";
		} 
	}


}

// Need a reset button