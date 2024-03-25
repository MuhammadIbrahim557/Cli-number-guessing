#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 7 + 1);

const answer = await inquirer.prompt([
  {
    message: "Please guess a number between 1-7:",
    type: "number",
    name: "userGuessedNumber",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations, You guessed the correct number");
} else {
  console.log("You guessed wrong number, please try again");
}
