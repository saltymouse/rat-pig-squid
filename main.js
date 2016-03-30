// Remove JS warning for JS users
document.getElementById("nojs").style.display = "none";

// The main game function
function rps() {
  
  rpsOptions = {
    // The animals' playing power is their position in array
    // i.e. rat = 0, pig = 1, squid = 2
    animals: ['rat', 'pig', 'squid'],
    playerChoice: undefined,
    cpuChoice: undefined,
  }
  var resultBox = document.getElementById('resultBox');
  
  var cpuDomDisplay = document.getElementById('cpuBox');
  
  var clickBox = document.getElementById('clickBox');
  
  clickBox.addEventListener('click', getPlayerSelection);
  
  function getPlayerSelection(event) {
    event.preventDefault();
    var playerSelection = event.target.id;
    rpsOptions.animals.forEach(function(animal) {
      if (animal === playerSelection) {
        rpsOptions.playerChoice = animal;
        
        getCpuSelection();
      }
    })
    
  }; // getPlayerSelection()
  
  function getCpuSelection() {
    var randomChoice = Math.floor( Math.random() * (rpsOptions.animals.length) );
    
    rpsOptions.cpuChoice = rpsOptions.animals[randomChoice];
    
    seeWhoWins();
  }; // getCpuSelection()
  
  function seeWhoWins() {
    var playerNumericalChoice = rpsOptions.animals.indexOf(rpsOptions.playerChoice);
    var cpuNumericalChoice = rpsOptions.animals.indexOf(rpsOptions.cpuChoice);
    
    switch (playerNumericalChoice - cpuNumericalChoice) {
      case 0:
        displayWinner('draw');
        break;
      case 1:
        displayWinner('player');
        break;
      case -1:
        displayWinner('cpu');
        break;
    }
    
  } // seeWhoWins()
  
  function displayWinner(victor) {
    
    switch (victor) {
      case 'draw':
        cpuDomDisplay.className = "animated bounceIn"
        
        document.getElementById(rpsOptions.playerChoice).className = "animated bounceIn"
        
        resultBox.innerHTML = "Draw!"
        break;
      case 'player': document.getElementById(rpsOptions.playerChoice).className = "animated bounceIn"
        
        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log("player");
        break;
      case 'cpu':
        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log('cpu');
        break;
    } // switch (victor)
  } // displayWinner(victor)
  
} // rps


rps();

// Need a reset button
// Play for 'best of X games'