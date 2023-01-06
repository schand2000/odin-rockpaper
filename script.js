function computerPlay(){
    let computerSelection='';
    let randomInt=Math.floor(Math.random()*3);
    if(randomInt===0)
    {
        computerSelection='Rock';
    }
    else if(randomInt===1)
    {
        computerSelection='Paper';
    }
    else{
        computerSelection='Scissors';
    }
    return computerSelection;}

function playRound(computerSelection, playerSelection){
    let roundWinner='';
		if(playerSelection===computerSelection){

			roundWinner = "Draw";
         } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
           roundWinner = "You win! Rock beats scissors!";
         } else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
          roundWinner = "You lose! Paper beats rock!";
         } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
          roundWinner = "You win! Paper beats rock!";
         } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
          roundWinner = "You lose! Scissors beats paper!";
         } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
          roundWinner = "You win! Scissors beats paper!";
         } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
          roundWinner = "You lose! Rock beats scissors!";
         }
         return roundWinner;
}
function playerSelection(){
    let playerInput=prompt("Rock,Paper or Scissors:")
    let trimmedInput=playerInput.trim();
    let lowerCaseInput=trimmedInput.toLowerCase();
    let capitalizedInput=lowerCaseInput.charAt(0).toUpperCase()+lowerCaseInput.slice(1);
    while(!['Rock','Paper','Scissors'].includes(capitalizedInput)){
        trimmedInput=playerInput.trim();
        lowerCaseInput=trimmedInput.toLowerCase();
        capitalizedInput=lowerCaseInput.charAt(0).toUpperCase()+lowerCaseInput.slice(1);
    }
    return capitalizedInput; }
function game()
{
	  let roundResult ='';
        let playerPoints = 0;
        let computerPoints = 0;
        let playerTurn = '';
        let computerTurn = '';
        let notimes=prompt("How many rounds do you want to play");
        for(i=0;i<notimes;i++){
        	computerTurn=computerPlay();
        	playerTurn=playerSelection();
        	roundResult=playRound(playerTurn,computerTurn);
        	if(roundResult.includes('You win')){
        		playerPoints+=1;

        	}else if (roundResult.includes('You lose')){
            computerPoints += 1;
            console.log(roundResult + " The score is: " + playerPoints + " to " + computerPoints);
          } else {
            i -= 1;
            console.log(roundResult + " The score is: " + playerPoints + " to " + computerPoints);
          }
        }

        if (playerPoints > computerPoints) {
          console.log("You won the game! " + playerPoints + " to " + computerPoints + "!");
        }  else if(computerPoints > playerPoints){
            console.log("You lost the game! " + computerPoints + " to " + playerPoints + "!");
          }
          else{
            console.log("The game is a draw " + computerPoints + " to " + playerPoints);
          }

        

      }
      game()

