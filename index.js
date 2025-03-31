let homeEl = document.querySelector(".score-home")
let guestEl = document.querySelector(".score-guest")

let scoreHome = 0
let scoreGuest = 0



function add1Home() {
    scoreHome += 1
    console.log(scoreHome)
    homeEl.textContent = scoreHome

}

function add2Home() {
    scoreHome += 2
    console.log(scoreHome)
    homeEl.textContent = scoreHome
}

function add3Home() {
    scoreHome += 3 
    console.log(scoreHome)
    homeEl.textContent = scoreHome
}

function add1Guest() {
    scoreGuest += 1
    console.log(scoreGuest)
    guestEl.textContent = scoreGuest
}

function add2Guest() {
    scoreGuest += 2
    console.log(scoreGuest)
    guestEl.textContent = scoreGuest
}

function add3Guest() {
    scoreGuest += 3
    console.log(scoreGuest)
    guestEl.textContent = scoreGuest
}

