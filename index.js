function computerPlay(){
    let compArray=['rock','paper','scissors'];
    let randNumber = Math.floor(Math.random() * compArray.length);
    return compArray[randNumber];
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection=='rock' && computerSelection=='paper'){
        return 'You Lose!Paper beats Rock';
    }
    else if(playerSelection=='rock' && computerSelection=='scissors'){
        return 'You Win!Rock beats Scissors';
    }
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        return 'You Lose!Scissors beat Paper';
    }
    else if(playerSelection=='paper' && computerSelection=='rock'){
        return 'You Win!Paper beats Rock';
    }
    else if(playerSelection=='scissors' && computerSelection=='paper'){
        return 'You Win!Scissors beat Paper';
    }
    else if(playerSelection=='scissors' && computerSelection=='rock'){
        return 'You Lose!Rock beats Scissors';
    }
    else{
        return 'Draw!Both are same';
    }
}
function game(){
    let count = 4;
    for(i=0;i<=count;i++){
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection))
    }
}

prompt("Dare to play with me - I am your PC");
game();

