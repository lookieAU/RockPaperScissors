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
    let count = 5,win = 0, loss=0;
    for(i=0;i<=count;i++){
        // const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        const buttons = document.querySelectorAll('button');
        // console.log(buttons);
        buttons.forEach((button)=>{
            button.addEventListener('click',()=>{
                // const div = document.createElement('div');
                const result = playRound(button.textContent,computerSelection);
                console.log(result[4]);
                if (result[4]=='W'){
                    win +=1;
                }
                else if(result[4]=='L'){
                    loss +=1;
                }
            });
        });
    }
    const div = document.createElement('div');
    div.classList.add('result');
    div.setAttribute('style','align-text: center;');
    if(win>loss){
        div.textContent = "You are the winner of the 5 rounds played!"
    }
    else if(loss>win){
        div.textContent = "You lose the game after 5 rounds unfortunately!"
    }
    else{
        div.textContent = "Its a draw! Up for a rematch? Just reload the page."
    }
    const container = document.querySelector('body');
    container.appendChild(div);
}

prompt("Dare to play with me - I am your PC");
game();



