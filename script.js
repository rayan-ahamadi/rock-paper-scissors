const pierre = document.querySelector('#pierre');
const feuille = document.querySelector('#feuille');
const ciseaux = document.querySelector('#ciseaux');

const choicePlayerImg = document.querySelector(".choice-player img")
const choiceComputerImg = document.querySelector(".choice-ia img")
const choicePlayerTxt = document.querySelector(".choice-player p")
const choiceComputerTxt = document.querySelector(".choice-ia p")
const choiceResult = document.querySelector(".choice-result p")

const scorePlayerTxt = document.querySelector('#player-score');
const scoreComputerTxt = document.querySelector('#ia-score');

const resultGame = document.querySelector('.result-game p');
const divResultGame = document.querySelector('.result-game');
const restartButton = document.createElement('button');
restartButton.textContent = 'Rejouer ?';

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
   let choice = ['pierre', 'feuille', 'ciseaux'];
   let random = Math.floor(Math.random() * 3); 
   return choice[random];
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    scorePlayerTxt.textContent = playerScore;
    scoreComputerTxt.textContent = computerScore;
    choicePlayerImg.src = `img/thinking.jpeg`;
    choicePlayerTxt.textContent = `Choisissez un élément pour commencer...`;
    choiceComputerImg.src = `./img/thinking.jpeg`;
    choiceComputerTxt.textContent = `L'ordinateur choisit un élément...`;
    choiceResult.textContent = '';
    resultGame.textContent = '';
    divResultGame.removeChild(restartButton);
}

pierre.addEventListener('click', () => {
    gameRound("pierre");
});
feuille.addEventListener('click', ()=>{
    gameRound("feuille");
});
ciseaux.addEventListener('click', ()=>{
    gameRound("ciseaux");
});

function roundWinner(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'pierre':
            if (computerChoice === 'pierre') {
                return 'Egalité, l\'ordinateur a choisi Pierre';
            } else if (computerChoice === 'feuille') {
                return 'Perdu, la feuille bat la pierre';
            } else {
                return 'Gagné, la pierre bat les ciseaux';
            }

        case 'feuille':
            if (computerChoice === 'pierre') {
                return 'Gagné, la feuille bat la pierre';
            } else if (computerChoice === 'feuille') {
                return 'Egalité, l\'ordinateur a choisi Feuille';
            } else {
                return 'Perdu, le ciseau bat la feuille';
            }

        case 'ciseaux':
            if (computerChoice === 'pierre') {
                return 'Perdu, la pierre bat les ciseaux';
            } else if (computerChoice === 'feuille') {
                return 'Gagné, le ciseau bat la feuille';
            } else {
                return 'Egalité, l\'ordinateur a choisi ciseau';
            }
    }
}

function gameRound(playerChoice){
    let computerChoice = getComputerChoice();
    if((playerScore < 5) && (computerScore < 5)){
        let result = roundWinner(playerChoice, computerChoice);
        choicePlayerImg.src = `./img/${playerChoice}.png`;
        choicePlayerTxt.textContent = `Vous avez choisi : ${playerChoice}`;
        choiceComputerImg.src = `./img/${computerChoice}.png`;
        choiceComputerTxt.textContent = `L'ordinateur a choisi : ${computerChoice}`;
        choiceResult.textContent = result;
        if(result.includes('Gagné')){
            playerScore++;
        } else if(result.includes('Perdu')){
            computerScore++;
        }

        scorePlayerTxt.textContent = playerScore;
        scoreComputerTxt.textContent = computerScore;

        
    }

    if(playerScore > computerScore && playerScore === 5){
        resultGame.textContent = 'Vous avez gagné la partie !';
        divResultGame.appendChild(restartButton);
        restartButton.addEventListener('click', restartGame);
    } else if(playerScore < computerScore && computerScore === 5){
        resultGame.textContent = 'Vous avez perdu la partie !';
        divResultGame.appendChild(restartButton);
        restartButton.addEventListener('click', restartGame);
    }

    


    }


  



