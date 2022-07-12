// random value generated
var y = Math.floor(Math.random() * 10 + 1);  
// counting the number of guesses
// made for correct Guess
playername = localStorage.getItem("player_name");
var guess = 1;  
// function for number guessed by user     
function submit(){
    var x = document.getElementById("guessField").value;

    if(x==y)
    {
        alert("CONGRADULATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
               + guess + " GUESS ");
         guess= 1;
    }

    else if(x > y)

    {
        guess++;
        alert("OOPS SORRY!! TRY A LITTLE SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("OOPS SORRY!! TRY A LITTLE GREATER NUMBER");
    }

    
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}