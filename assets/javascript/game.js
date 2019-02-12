//Variables
//============================================
//Global Variables
var scoreToGet = [];
var  gems = ["gem1", "gem2", "gem3", "gem4"];
var currentScore= 0;
var gemValues = [];

//Game Counter Variables
var winCounter;
var lossCounter;



//Functions
//============================================

function init(){
    //Prompt the user for a username
   var userName = prompt("Hey Groovy human, what do you want to be called?");

    //update playername 
    $("#userName").html(userName);


    //generate random score to get between 19-120
    scoreToGet = Math.floor((Math.random() * 102) + 19);

    //generate random values for each gem between 1-12
    for (i =0; i < gems.length; i++){
        gemValues.push(Math.floor((Math.random() * 12) + 1));   
    }

    //render target score and user score
    $("#target").html(scoreToGet);
    $("#score").html(currentScore);
    //render everything that needs to be rendered.. using magical jQuery

    //building and debugging
    console.log(scoreToGet);
    console.log(gemValues);
    console.log(userName);
}

function reset() {
    //generate  random score to get between 12-120
    //generate random values for each gem between 1-12
    //update win/loss counter
    //reset users current score to 0
}

//Main Process
//============================================
//set listeners for each of the gem buttons 
$("#gem1").on("click", function(){  
    currentScore = currentScore + gemValues[0];
    console.log(currentScore);
});

$("#gem2").on("click", function(){
    currentScore = currentScore + gemValues[1];
    console.log(currentScore);
});

$("#gem3").on("click", function(){
    currentScore = currentScore + gemValues[2];
    console.log(currentScore);
});

$("#gem4").on("click", function(){
    currentScore = currentScore + gemValues[3];
    console.log(currentScore);
});

init();

//when a gem is clicked add that gems value to the users current score
//if else if for score matching and exceeding the score to get



