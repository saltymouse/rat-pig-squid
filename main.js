// Remove JS warning if JS is enabled
document.getElementById("nojs").style.display = "none";

// The main game function
function rps() {

  var rpsOptions = {
    // The animals' playing power IS their position in array
    // i.e. rat = 0, pig = 1, squid = 2
    animals: ['rat', 'pig', 'squid'],
    playerChoice: undefined,
    cpuChoice: undefined,
    roundsPlayed: 0
  }
  
  reset();
  
  //container for the current round number
  var roundBox = document.getElementById("roundBox");
  
  //container element for the text display of the winner
  var resultBox = document.getElementById('resultBox');
  
  //container element with all the cpu's animals
  var cpuDomDisplay = document.getElementById('cpuBox');
  
  //container element with all the player's animal choices
  var clickBox = document.getElementById('clickBox');

  clickBox.addEventListener('click', getPlayerSelection);

  function getPlayerSelection(event) {
    event.preventDefault();

    // Click event is on the image,
    // but the div wrapping the image (parent) holds the id
    var playerSelection = event.target.parentNode.id;

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
    var playerVal = rpsOptions.animals.indexOf(rpsOptions.playerChoice),
        cpuVal = rpsOptions.animals.indexOf(rpsOptions.cpuChoice),
        victor = undefined;

    if (playerVal === cpuVal) {
      victor = "draw";
    } else if ((playerVal - cpuVal + 3) % 3 === 1) {
      victor = 'player';
    } else {
      victor = 'cpu';
    }

    displayWinner(victor);
  } // seeWhoWins()

  function displayWinner(victor) {

    function displayPlayer() {
      clickBox.getElementById(rpsOptions.playerChoice).css('background', 'red');
    }
    function displayCpu() {
      clickBox.getElementById(rpsOptions.cpuChoice).css('background', 'red');
    }

    switch (victor) {
      case 'draw':
        document.getElementById(rpsOptions.playerChoice).className = "animated bounceIn"

        resultBox.innerHTML = '<p class="animated fadeIn">Draw!</div>';
        

        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log("draw");
        break;
      case 'player':
        
        //set the losing animal image for cpu
        cpuDomDisplay.children[1].children[0].src = rpsOptions.cpuChoice+"-dead.svg";
        
        //set the winning animal image for player
        clickBox.children[rpsOptions.animals.indexOf(rpsOptions.playerChoice)].children[0].src = rpsOptions.playerChoice+"-alive.svg";
        
        //write the winner in the center text-box
        resultBox.innerHTML = '<p class="animated fadeIn">You Win!</div>';

        //console stuff
        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log("player wins");
        break;
      case 'cpu':
        //set the victorious animal image for cpu
        cpuDomDisplay.children[1].children[0].src = rpsOptions.cpuChoice+"-alive.svg";
        
        //set the losing animal image for player
        clickBox.children[rpsOptions.animals.indexOf(rpsOptions.playerChoice)].children[0].src = rpsOptions.playerChoice+"-dead.svg";

        //write the winner in the center text-box
        resultBox.innerHTML = '<p class="animated fadeIn">CPU Wins!</div>';
        
        //console stuff
        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log('cpu wins');
        break;
    } // switch (victor)
    
    nextRound();

  } // displayWinner(victor)
  
  function nextRound() {
    rpsOptions.roundsPlayed += 1;
    roundBox.innerHTML = "Round "+ rpsOptions.roundsPlayed;
  }

  function reset() {
    
    //only allow reset if we've played at least 1 round
    if (rpsOptions.roundsPlayed >= 1) {
      

      //set the winning animal image for player
      var playerAnimals = clickBox.children;
      
      rpsOptions.animals.forEach(function(animal) {
        playerAnimals[animal].src = playerAnimals[animal].id + "-alive.svg";
        console.log(playerAnimals[animal].src)
      });

      //set the victorious animal image for cpu
      cpuDomDisplay.children[1].children[0].src = rpsOptions.cpuChoice+"-alive.svg";
      
      
    }//endif

  }//reset

} // rps


rps();

// Need a reset button
// Play for 'best of X games'
