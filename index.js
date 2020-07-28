/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 19;

if (votingAge >= 18){
    console.log(true);
}else {
    console.log(false);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let var1 = 10;

let var2 = 20;

if (var2 === 20){
    var1 = 30;
    console.log("New var1 is:" + var1);
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let num = Number('1999');

console.log(num);



//Task d: Write a function to multiply a*b 

function multiply(a, b){
    return a * b;
}

console.log(multiply(5, 6));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a){
    return a * 7;
}

console.log(dogYears(28));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
//      up to 5 lbs - 5% of their body weight
//      6 - 10 lbs - 4% of their body weight 
//      11 - 15 lbs - 3% of their body weight 
//      > 15lbs - 2% of their body weight 

// Puppies less than 1 year
//      2 - 4 months 10% of their body weight
//      4 - 7 months 5% of their body weight 
//      7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age){
    let rawFood = 0;
    if (age >= 1){
        //adult dog
        if (weight <= 5){
            rawFood = weight * .05;
        } else if (weight >= 6 && weight >= 10){
            rawFood = weight * .04;
        } else if (weight >= 11 && weight >= 15){
            rawFood = weight * .03;
        } else if (weight >= 15){
            rawFood = weight * .02;
        }
    }else if (age >= 0.17 && age <= 0.33 ){
        rawFood = weight * .10;
    } else if ( age >= 0.33 && age <= 0.58){
        rawFood = weight * .05;
    } else if (age >= 0.58 && age <= 1){
        rawFood = weight * 0.4;
    }
    return rawFood;
    }
console.log(dogFeeder(15, 1));

//not sure why it is not computing the correct number (0.44999999999999996)


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors (myChoice) {
    // console.log("test");
    // rock:1, paper: 2, scissors: 3

    //setting up the computer
    let compNumber = Math.ceil(Math.random() * 3) // computer generates a number from 1 - 3
                                                    // Math.ceil() function always rounds a number up to the next largest integer.

                                                        //    console.log(Math.random()); // gives a number 0 -1
                                                        //can multiply that number times 3 for the 3 choices
                                                        //rounds up the number to whole number
                                                        // console.log(Math.ceil(Math.random() * 3));

    //setting up the player                                           
    let player = 0;                       //first player has to start at 0
    let winner = ""                             //Why is this null?
    //setting up the player options
    if (myChoice.toLowerCase() === "rock") {                  //if my choice is rock first, then it = to the number 1 since that is rock's position
        player = 1;
    } else if (myChoice.toLowerCase() === "paper") {             // second option is paper then it = the number 2 since that is paper's position
        player = 2;
    } else {
        player = 3;                          //third option is scissors then it = the number 3 since that is scissor's position
    }
    // console.log(playerNumber);


    //setting up the randomized choices
    if (player === compNumber) {          //if the player number matches number inputed its a tie game
        winner = "tie game"
    } else if (player === 1 && compNumber === 2) { // player: rock, computer: paper - computer wins
        winner = "computer wins"
    } else if (player === 1 && compNumber === 3) { // player: rock, computer: scissors - player wins
        winner = "player wins"
    } else if (player === 2 && compNumber === 1) { // player: paper, computer: rock - player wins
        winner = "player wins"
    } else if (player === 2 && compNumber === 3) { // player: paper, computer: scissors - computer wins
        winner = "computer wins"
    } else if (player === 3 && compNumber === 1) { // player: scissors, computer: rock - player wins
        winner = "computer wins"                            
    } else {                                                 // player: scissors, computer: paper
        winner = "player wins"                              //Need 6 actual sets of rules so that it can account for 3 turns on the computer and 3 turns for the player
    }
    return winner;    
}
console.log(rockPaperScissors("rock"));

// let result = rockPaperScissors(myChoice); 
// console.log(rockPaperScissors("scissors"));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmConverter (number){
    return (number / 8) * 5
}

console.log(kmConverter(3));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function ftToCm (num){
    return num * 30.48;
}
 
console.log(ftToCm(5));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(num){
    for (let i = num; i > 0; i--){
        let count = i - 1;
        console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + count + " bottles of soda on the wall");
    }
}

console.log(annoyingSong(66));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(grade){
    if(grade > 90){
        console.log("You got an A");
    }else if(grade <=89 && grade >=80){
        console.log("You got a B");
    }else if(grade <= 79 && grade >= 70){
        console.log("You got a C")
    }else if(grade <= 69 && grade >= 60){
        console.log("You got a D");
    }else{
        console.log("You fail!")
    }
}
  console.log(gradeCalculator(72));
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





