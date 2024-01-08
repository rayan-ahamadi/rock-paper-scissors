function getComputerChoice() {
   let choice = ['pierre', 'feuille', 'ciseaux'];
   let random = Math.floor(Math.random() * 3); 
   return choice[random];
}

function getPlayerChoice(){
    let playerChoice = prompt('Choisissez entre pierre, feuille ou ciseaux');
    playerChoice = playerChoice.toLowerCase().replace(/\s/g, '');
    while (playerChoice !== 'pierre' && playerChoice !== 'feuille' && playerChoice !== 'ciseaux') {
        playerChoice = prompt('Erreur : Choisissez entre pierre, feuille ou ciseaux');
    }
    return playerChoice;
}

function gameRound(playerChoice, computerChoice) {
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
                return 'Perdu, les ciseaux battent la feuille';
            }

        case 'ciseaux':
            if (computerChoice === 'pierre') {
                return 'Perdu, la pierre bat les ciseaux';
            } else if (computerChoice === 'feuille') {
                return 'Gagné, les ciseaux battent la feuille';
            } else {
                return 'Egalité, l\'ordinateur a choisi Ciseaux';
            }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    while((playerScore < 5) && (computerScore < 5)){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = gameRound(playerChoice, computerChoice);
        console.log('Vous avez choisi ' + playerChoice + ' et l\'ordinateur a choisi ' + computerChoice);
        console.log(result);
        if(result.includes('Gagné')){
            playerScore++;
        } else if(result.includes('Perdu')){
            computerScore++;
        }else {
            round--;
        }
        console.log('Vous avez ' + playerScore + ' point(s).' + 'Et l\'ordinateur a ' + computerScore + ' point(s)');
    }

    if(playerScore > computerScore){
        console.log('Vous avez gagné la partie');
    } else if(playerScore < computerScore){
        console.log('Vous avez perdu la partie');
    } else {
        console.log('Egalité');
    }

    let rematch = prompt('Voulez-vous rejouer ?, (oui ou non)');
    rematch = rematch.toLowerCase().replace(/\s/g, '');
    while (rematch !== 'oui' && rematch !== 'non') {
        rematch = prompt('Erreur : Voulez-vous rejouer ?, (oui ou non)');
        rematch = rematch.toLowerCase().replace(/\s/g, '');
    }

    if (rematch === 'oui') {
        game();
    }

}

game()

