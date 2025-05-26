
import * as promptSync from 'prompt-sync';
const prompt = promptSync();


let aleatoryNumber: number = Math.round(Math.random() * 100);
//Oportunidades 
const attempts: number=3;
//Contador de oportunidades
let attemptscounter: number=1;

//Declaracion de numero ingresado por el usuario
let userInput :number;
//Declaracion del numero aleatorio
console.log(`Número Aleatorio: ${aleatoryNumber}`);
while (attemptscounter <= attempts){
    userInput = parseInt(prompt("Provide your desired number:"));
    console.log(`Número del usuario: ${userInput}`);
    if (aleatoryNumber === userInput){
        console.log(`‘Congratulations! You found the secret!’.`);
        break;
    }
    else if (attemptscounter < attempts)
        if (userInput < aleatoryNumber){
            console.log(`The aleatory number is higher than yours`);
        }
        else {
            console.log(`The aleatory number is lower than yours pretty boy`);
        }
    attemptscounter++;
}

if (attemptscounter > attempts)
    console.log(`That’s sad, the secret number was ${aleatoryNumber}, ${aleatoryNumber} should be the secret number`);