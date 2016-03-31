// Remove JS warning if JS is enabled
document.getElementById("nojs").style.display = "none";

// The main game function
function rps() {

  rpsOptions = {
    // The animals' playing power IS their position in array
    // i.e. rat = 0, pig = 1, squid = 2
    animals: ['rat', 'pig', 'squid'],
    playerChoice: undefined,
    cpuChoice: undefined
  }
  var resultBox = document.getElementById('resultBox');

  var cpuDomDisplay = document.getElementById('cpuBox');

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
        document.getElementById(rpsOptions.playerChoice).className = "animated bounceIn"

        resultBox.innerHTML = '<p class="animated fadeIn">You Win!</div>';

        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log("player wins");
        break;
      case 'cpu':
        document.getElementById(rpsOptions.cpuChoice).className = "animated bounceIn"

        resultBox.innerHTML = '<p class="animated fadeIn">CPU Wins!</div>';
        console.log("Player: "+rpsOptions.playerChoice,"CPU: "+rpsOptions.cpuChoice);
        console.log('cpu wins');
        break;
    } // switch (victor)

    reset();
  } // displayWinner(victor)

  function reset() {

    rpsOptions.playerChoice = undefined;
    rpsOptions.cpuChoice = undefined;

    rpsOptions.animals.forEach(function(animal) {
      document.getElementById(animal).className = "";
    })

  }//reset

} // rps


rps();

// Need a reset button
// Play for 'best of X games'
