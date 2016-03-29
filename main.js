// Remove JS warning for JS users
document.getElementById("nojs").style.display = "none";

// The main game function
function rps() {
  
  rpsOptions = {
    animals: ['rat', 'pig', 'squid'],
    playerChoice: undefined,
    cpuChoice: undefined,
  }
  
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
    var randomChoice = Math.floor( Math.random() *(rpsOptions.animals.length) );
    
    rpsOptions.cpuChoice = rpsOptions.animals[randomChoice];
    
    seeWhoWins();
  }; // getCpuSelection()
  
  function seeWhoWins() {
    
    if (rpsOptions.playerChoice === rpsOptions.animals[0]) {
      
      if (rpsOptions.cpuChoice === rpsOptions.animals[0]) {
        playerWins();
      }
      
      
      
    }
  } // seeWhoWins()
  
  function displayWinner() {
    
  }
        
        
  
} // rps


rps();

// Need a reset button