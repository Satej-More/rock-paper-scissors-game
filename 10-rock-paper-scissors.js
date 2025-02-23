let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};

updateScoreElements();

/*if(!score) {
score ={
  wins:0,
  losses:0,
  ties:0
}
}
*/ 

function playerGame(playerMove) {
const computerMove=pickComputerMove();

let result = '';

if(playerMove == 'scissors'){

  if(computerMove === 'rock'){
    result='You Loose';
  }else if(computerMove === 'paper'){
    result='You Win';
  }else if(computerMove === 'scissors'){
    result = 'Tie';
  }
}

 else if(playerMove == 'paper'){

      if(computerMove === 'rock'){
        result='You Win';
      }else if(computerMove === 'paper'){
        result='Tie';
      }else if(computerMove === 'scissors'){
        result = 'You Loose';
      }
  }
else{
      if(computerMove === 'rock'){
      result='Tie';
      } else if(computerMove === 'paper'){
      result='You Loose';
      } else if(computerMove === 'scissors'){
      result = 'You Win';
      }
    }

    if(result === 'You Win') {
        score.wins++;
    }
    else if(result == 'You Loose'){
      score.losses ++;
    }
    else{
      score.ties ++;
    }
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElements();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;


alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} Wins:${score.wins}, Losses${score.losses}, Ties:${score.ties}`);

}

function updateScoreElements(){
document.querySelector('.js-score').
innerHTML = `Wins:${score.wins}, Losses${score.losses}, Ties:${score.ties}`;
}


function pickComputerMove() {
const randomNumber=Math.random();

let computerMove ='';

if(randomNumber >= 0 && randomNumber < 1/3){
  computerMove='rock';
}
if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove='paper';
}
else{
  computerMove='scissors';
}

return computerMove;

}
