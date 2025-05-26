"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var aleatoryNumber = Math.round(Math.random() * 100);
//Oportunidades 
var attempts = 3;
//Contador de oportunidades
var attemptscounter = 1;
//Declaracion de numero ingresado por el usuario
var userInput;
//Declaracion del numero aleatorio
console.log("N\u00FAmero Aleatorio: ".concat(aleatoryNumber));
while (attemptscounter <= attempts) {
    userInput = parseInt(process.argv[2]);
    console.log("N\u00FAmero del usuario: ".concat(userInput));
    if (aleatoryNumber === userInput) {
        console.log("\u2018Congratulations! You found the secret!\u2019.");
        break;
    }
    else if (attemptscounter < attempts)
        if (userInput < aleatoryNumber) {
            console.log("The aleatory number is higher than yours");
        }
        else {
            console.log("The aleatory number is lower than yours");
        }
    attemptscounter++;
}
if (attemptscounter > attempts)
    console.log("That\u2019s sad, the secret number was ".concat(aleatoryNumber, ", ").concat(aleatoryNumber, " should be the secret number"));
