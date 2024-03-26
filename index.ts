#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to my game world");
const randomNumber=Math.floor(Math.random( )* 10 + 1);
const answer= await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type : "number",
        message : "Enter your guess number",

},
]);
if(answer.userGuessedNumber===randomNumber){
    console.log("you guessed correct number");
}
else{
    console.log("you are wrong");
}