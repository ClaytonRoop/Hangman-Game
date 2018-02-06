var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];
var wrongGuess = [];
var remainingGuess = 9;
var lettersGuessed = [];
var wins = 0;
var losses = 0;

//random word generater

var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(computerPick);

// var newComputerGuess = function () {



// }

var reset = function () {
    remainingGuess = 9;
    computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerPick);

    lettersGuessed = [];
    document.getElementById("guesses").innerHTML = "Letters Guessed: " + lettersGuessed;
}


document.onkeyup = function (event) {
    var userGuess = event.key;
    alert(userGuess);

    var lowerCaseGuess = userGuess.toLowerCase();
    lettersGuessed.push(lowerCaseGuess);
    console.log(lettersGuessed);
    var showGuesses = lettersGuessed.join(", ");
    document.getElementById("guesses").innerHTML = "Letter Guessed" + showGuesses;



    if (remainingGuess < 1) {
        // alert("You Lose you have this many losses: " + ++losses);
       
        document.getElementsByClassName("row wins").innerHTML = "You Lose you have this many losses: " + ++losses;
       
        remainingGuess = 9;
        ++losses;

        reset();
    } else if (lowerCaseGuess == computerPick) {
        alert("You Win wins: " + ++wins);
        reset();
    } else if (lowerCaseGuess !== computerPick) {
        alert("Wrong, pick again. remaining guesses = " + --remainingGuess)
    }

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("remaining").innerHTML = "Remaining Guesses: " + remainingGuess;
    
}

    //     for (var i = 0; i < computerPick.length; i++)
    //     {
    //         console.log("_ ")
    //     }   


    //     document.onkeyup = function (event) 
    // {
    //     console.log(event)
    //     var userGuess = event.key;

    //     for (var i = 0; i < computerPick.length; i++)
    //     {
    //         if (userGuess == computerPick.charAt(i)) {
    //             console.log("we have a match at positon " + i );
    //             allGuesses.push(userGuess);
    //             console.log(allGuesses);
    //             // ?? get it to show right guess on the screen

    //         } else if ((userGuess != computerPick.charAt(i)) && (remainingGuess != 0)) {
    //             remainingGuess--;
    //             console.log("You have" + remainingGuess + "guesses left");
    //         } else {
    //             console.log("No more Guesses, you lose")
    //         }
    //     }

    // }


        // function letterChecker(event) { 
        // for (var i = 0; i < computerPick.length; i++)
        // if (cycleChar == computerPick.charAt(i);
        //     

