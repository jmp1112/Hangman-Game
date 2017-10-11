// We want a hangmanGame object to contain all our variables and initilization

var hangGame = {
  gotCharsToPick: {
    Tyrion: {
      picture: "",
    },
    Jaime: {
      picture: "",
    },
    Cersei: {
      picture: "",
    },
    Ned: {
      picture: "",
    },
    Arya: {
      picture: "",
    },
    Joffrey : {
      picture: "",
    },
    Bronn : {
      "",
    }
  }  

  //Variables initial states at start of game
  wordInPlay: null,
  lettersOfTheWord: [],
  matchedLetters: [],
  guessedLetters: [],
  guessesLeft: 0,
  totalGuesses: 0,
  letterGuessed: null,
  wins: 0,

  //setUpGame method is called whne page first loads. 

  //updatePage function runs whenever user guesses a letter

  //updateGuesses governs consequences of incorrect guess

  //processUpdateTotalGuesses sets initial guesses the user gets

  //updateMatchedLetters governs consequences of a successful guess

  //rebuildWorldView builds display of the word that is currently being guessed

  //restartGame restarts game by resetting all variables

  //updateWins  checks to see if the user has won
};

//Intialize the game when the page loads

//Document.onkey up function goes here




  			selectWord (){
  				return options[Math.floor(Math.random() * options.length];
  			}
  			//init section

  				var updateWordOnHTML = function () {
  					var html = "wins: " + wins + "<br>";
  					for (var i = 0; i < selectedWord.length; i++) {
  						underScores += "_";
  					}
  					html = html + underScores;
  					gameDiv.innerHTML = html;
  				}

	  			var options = ["initialization" , "objects" , ] 

	  			//these are going to change below, optionsn wont changes

	  			var wins
	  			var losses
	  			var selectedword;
	  			selectedWord = selectWord();
	  			var gameDiv = document.getElementById("game");

  			//processing

  				document.onkeyup = function(event) {
  					//most of our game logic will take place in the body of this function
  					//get the users key that was pressed
  					//capture user input, use document.onkey something
  				var userKey = event.key;
  					//do some logic to see if they selected the right letter
  					//when I have some that I know is going to happen many times, I know it needs to be in a function

  				}

  			//output
