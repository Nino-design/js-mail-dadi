/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

const pcNumber = Math.floor(Math.random() * 6) +1;

console.log(pcNumber);

const userNumber = Math.floor(Math.random() * 6) +1;

console.log(userNumber);

let risultato;

if(pcNumber > userNumber){
    risultato = 'Hai perso'
}else if(pcNumber < userNumber){
    risultato = 'Hai vinto'
}else{
    risultato = 'Pareggio'
}

console.log(risultato);