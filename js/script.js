function getMoveName(argMoveId){
    if(argMoveId === 1){
        return 'kamień';
    } else if (argMoveId === 2){
        return 'papier';
    } else if (argMoveId === 3){
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove === 'nożyce' && argPlayerMove === 'kamień'){
        printMessage('wygrałeś!');
    } else if( argComputerMove === 'kamień' && argPlayerMove === 'papier'){
        printMessage('wygrałeś!');
    } else if( argComputerMove === 'papier' && argPlayerMove === 'nożyce'){
        printMessage('wygrałeś!');
    } else if( argComputerMove === argPlayerMove){
        printMessage('remis, spróbuj jeszcze raz');
    } else if(argPlayerMove === 'nieznany ruch'){
        printMessage('nieznany ruch');
    }
    /*if( argComputerMove === 'kamień' && argPlayerMove === 'papier'){ // kamień
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove === 'kamień' && argPlayerMove === 'kamień' ){
        printMessage( 'Remis!');
    } else if ( argComputerMove === 'kamień' && argPlayerMove === 'nożyce'){
        printMessage('Komputer wygrywa!');
    } else if ( argComputerMove === 'kamień' && argPlayerMove === 'nieznany ruch'){
        printMessage('nieznany ruch!');
    } else if( argComputerMove === 'papier' && argPlayerMove === 'papier'){ //papier
        printMessage('Remis!');
    } else if ( argComputerMove === 'papier' && argPlayerMove === 'kamień'){
        printMessage('Komputer wygrywa!');
    } else if ( argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove === 'papier' && argPlayerMove === 'nieznany ruch'){
        printMessage('nieznany ruch!');
    } else if( argComputerMove === 'nożyce' && argPlayerMove === 'papier'){  //nożyce
        printMessage('Komputer wygrywa!');
    } else if ( argComputerMove === 'nożyce' && argPlayerMove === 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove === 'nożyce' && argPlayerMove === 'nożyce'){
        printMessage('Remis!');
    } else if ( argComputerMove === 'nożyce' && argPlayerMove === 'nieznany ruch'){
        printMessage('nieznany ruch!');
    }*/
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber === 1) {
    computerMove = 'kamień';
} else if (randomNumber === 2) {
    computerMove = 'papier';
}   else if (randomNumber === 3) {
    computerMove = 'nożyce'
}*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

if(playerInput === '1'){
    playerMove = 'kamień';
} else if (playerInput === '2'){
    playerMove = 'papier';
} else if (playerInput === '3'){
    playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);

displayResult(computerMove, playerMove)

/* if( computerMove === 'kamień' && playerMove === 'papier'){ // kamień
    printMessage('Ty wygrywasz!');
} else if ( computerMove === 'kamień' && playerMove === 'kamień' ){
    printMessage( 'Remis!');
} else if (computerMove === 'kamień' && playerMove === 'nożyce'){
    printMessage('Komputer wygrywa!');
} else if (computerMove === 'kamień' && playerMove === 'nieznany ruch'){
    printMessage('nieznany ruch!');
} else if(computerMove === 'papier' && playerMove === 'papier'){ //papier
    printMessage('Remis!');
} else if (computerMove === 'papier' && playerMove === 'kamień'){
    printMessage('Komputer wygrywa!');
} else if (computerMove === 'papier' && playerMove === 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'papier' && playerMove === 'nieznany ruch'){
    printMessage('nieznany ruch!');
} else if(computerMove === 'nożyce' && playerMove === 'papier'){  //nożyce
    printMessage('Komputer wygrywa!');
} else if (computerMove === 'nożyce' && playerMove === 'kamień'){
    printMessage('Ty wygrywasz!');
} else if (computerMove === 'nożyce' && playerMove === 'nożyce'){
    printMessage('Remis!');
} else if (computerMove === 'nożyce' && playerMove === 'nieznany ruch'){
    printMessage('nieznany ruch!');
}
*/

