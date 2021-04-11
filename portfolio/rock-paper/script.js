
function getUserPlay() { //This functions gets the user choice about rock, paper or scissor using promt
    let userPlay = prompt("¿Cual es tu eleccion?","piedra, papel o tijera").toLocaleLowerCase();
    let letrMayus = userPlay.charAt(0).toUpperCase();
    let letrMinu = userPlay.slice(1);
    let finalUserPlay = letrMayus + letrMinu;
    return finalUserPlay;
}

function getComputerPlay() { //This functions gets a ramdom numeric value between 100 and 0 and 
                             //asiggn the result to rock, paper or scissor, then return one of this strings                   

    let randNumber = ( Math.random() * 100 );

    if(randNumber <= 100 && randNumber > 66.66) {
        return "Piedra";
    } else if ( randNumber <= 66.66 && randNumber > 33.33 ) {
        return "Papel";
    } else {
        return "Tijera";
    }
}

function getWinner() { //This functions make an evaluation to the user input and the PC input
    let userPlayer = getUserPlay();
    let pcPlayer = getComputerPlay();
 if ( userPlayer == pcPlayer ) {
    return "Empate";
} else if ( 

    (userPlayer == "Piedra") && ( pcPlayer == "Tijera" ) 
    || (userPlayer == "Tijera") && ( pcPlayer == "Papel" ) 
    || (userPlayer == "Papel") && ( pcPlayer == "Piedra" ) 

    )   {
    return "Tu ganas, " + userPlayer + " vence a " + pcPlayer;
} else {
    return "Tu pierdes, " + pcPlayer + " vence a " + userPlayer;
};
}

console.log(getWinner())

function game() {
    
}




