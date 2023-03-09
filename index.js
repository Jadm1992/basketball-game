//Create 6 divs with an id


let plusOne = 0;
let resetBtn = 0;
let homeScore = document.getElementById('homeNumber')
let guestScore = document.getElementById('guestNumber')

let body = document.body
let button = document.createElement('play')

function incrementLeft() {
    let updateScore = 1;
    guestScore.textContent = parseInt(guestScore.textContent) + updateScore
}

function incrementLeft2() {
    let updateScore2 = 2;
    guestScore.textContent = parseInt(guestScore.textContent) + updateScore2
}

function incrementLeft3() {
    let updateScore3 = 3;
    guestScore.textContent = parseInt(guestScore.textContent) + updateScore3
}

function incrementRight() {
    let updateHome = 1;
    homeScore.textContent = parseInt(homeScore.textContent) + updateHome
}


function incrementRight2() {
    let updateHome2 = 2;
    homeScore.textContent = parseInt(homeScore.textContent) + updateHome2
}

function incrementRight3() {
    let updateHome3 = 3;
    homeScore.textContent = parseInt(homeScore.textContent) + updateHome3
}

function resetLeft() {
    guestScore.textContent = resetBtn
}

function resetRight() {
    homeScore.textContent = resetBtn
}

function alertMe() {
    alert()
}

