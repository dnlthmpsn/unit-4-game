//Variables
//============================================
//Global Variables
var scoreToGet;
var  gems = ["gem1", "gem2", "gem3", "gem4"];
var currentScore= 0;
var gemValues = [];

//Game Counter Variables
var winCounter = 0;
var lossCounter = 0;



//Functions
//============================================
function generateRandomTarget(){
    scoreToGet = Math.floor((Math.random() * 102) + 19);
    return scoreToGet;
}

function generateGemValues(){
        for (i =0; i < gems.length; i++){
            gemValues.push(Math.floor((Math.random() * 12) + 1));   
    }
}


function init(){
    //Prompt the user for a username
   var userName = prompt("Hey Groovy human, what do you want to be called?");
    //update playername 
    $("#userName").html(userName);
    //generate random score to get between 19-120
   generateRandomTarget();
    //generate random values for each gem between 1-12
    generateGemValues();
    //render target score and user score
    $("#target").html(scoreToGet);
    $("#score").html(currentScore);
    //render everything that needs to be rendered.. using magical jQuery
    //building and debugging
    console.log(scoreToGet);
    console.log(gemValues);
    console.log(userName);
}

function reset(){
    generateRandomTarget();
    $("#target").html(scoreToGet);
    generateGemValues();
    currentScore = 0;
    $("#score").html(currentScore);

}
    

function winOrLose(){
    if(scoreToGet === currentScore){
        alert("groovy " + userName + "looks like you won. Play again?");
        winCounter++
        $("#winCounter").html(winCounter);
        reset();
    } else if (currentScore > scoreToGet){
        alert("looks like you lose" + userName + "not too groovy my friend. Play again?");
        lossCounter++
        $("#lossCounter").html(lossCounter);
        reset();
    }

}
    




//Main Process
//============================================
//set listeners for each of the gem buttons 

$("#gem1").on("click", function(){  
    currentScore = currentScore + gemValues[0];
    $("#score").html(currentScore);
    console.log(currentScore);
    winOrLose();
   
    
});

$("#gem2").on("click", function(){
    currentScore = currentScore + gemValues[1];
    $("#score").html(currentScore);
    console.log(currentScore);
    winOrLose();
});

$("#gem3").on("click", function(){
    currentScore = currentScore + gemValues[2];
    $("#score").html(currentScore);
    console.log(currentScore);
    winOrLose();
});

$("#gem4").on("click", function(){
    currentScore = currentScore + gemValues[3];
    $("#score").html(currentScore);
    console.log(currentScore);
    winOrLose();
});





init();


//when a gem is clicked add that gems value to the users current score
//if else if for score matching and exceeding the score to get



