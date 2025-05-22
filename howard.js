let userScore=0;
let sheldonScore=0;
const userScore_span=document.getElementById('user-score');
const sheldonScore_span=document.getElementById('sheldon-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const lizzard_div = document.getElementById('l');
const spock_div = document.getElementById('spock');
const gameoverScreen = document.getElementById('over')


function sheldonTurn(){
    const choices = ['r','p','s','l','spock'];
    const sheldonsConstant=Math.floor(Math.random() * 5);
    return choices [sheldonsConstant];
}

function convertWord(letter) {
    if (letter==='r') return 'Rock'
    if (letter==='p') return 'Paper'
    if (letter==='s') return 'Scissors'
    if (letter==='l') return 'Lizzard'
    return 'Spock'
}

function win(userChoice, sheldonChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    sheldonScore_span.innerHTML= sheldonScore;
    result_p.innerHTML= `${convertWord(userChoice)} beats ${convertWord(sheldonChoice)}. You Won`;

    const greenOutline = document.getElementById(userChoice);
    greenOutline.classList.add("glow-green");
    setTimeout(() => greenOutline.classList.remove("glow-green"), 500);
 }

function lose(userChoice, sheldonChoice) {
    sheldonScore++;
    sheldonScore_span.innerHTML = sheldonScore;
    sheldonScore_span.innerHTML = sheldonScore;
    result_p.innerHTML= `${convertWord(userChoice)} loses to ${convertWord(sheldonChoice)}. You Lost`;

    const redOutline = document.getElementById(userChoice);
    redOutline.classList.add("glow-red");
    setTimeout(() => redOutline.classList.remove("glow-red"), 500);
}

function tie(userChoice, sheldonChoice) {
    result_p.innerHTML= `${convertWord(userChoice)} is ${convertWord(sheldonChoice)}. Tie`;

    const yellowOutline = document.getElementById(userChoice);
    yellowOutline.classList.add("glow-tie");
    setTimeout(() => yellowOutline.classList.remove("glow-tie"), 500);
}

function game(userChoice) {
    const sheldonChoice =sheldonTurn();
    switch (userChoice + sheldonChoice){
        case'sp':
        case 'pr':
        case 'rl':
        case 'lspock':
        case 'spocks':
        case 'sl':
        case 'lp':
        case 'pspock':
        case 'spockr':
        case 'rs':
            win(userChoice,sheldonChoice)
            break
        case'ps':
        case'rp':
        case 'lr':
        case 'spockl':
        case 'sspock':
        case 'ls':
        case 'pl':
        case 'spockp':
        case 'rspock':
        case 'sr':
            lose(userChoice,sheldonChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
        case 'll':
        case 'spockspock':
            tie(userChoice,sheldonChoice)
            break
    }

}

function main () {
rock_div.addEventListener('click', function() {
    game('r');
})

paper_div.addEventListener('click', function() {
    game('p')
})

scissors_div.addEventListener('click', function() {
    game('s')
})

lizzard_div.addEventListener('click', function() {
    game('l')
})

spock_div.addEventListener('click', function() {
    game('spock')
})
}



main();