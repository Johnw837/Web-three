const grid = document.getElementById("grid")
const startBtn = document.getElementById("startBtn")

const levelDisplay = document.getElementById("level")
const scoreDisplay = document.getElementById("score")

const message = document.getElementById("message")

let dots = []

let pattern = []

let playerPattern = []

let level = 1

let score = 0



// CREATE GRID

for(let i=0;i<16;i++){

let dot = document.createElement("div")

dot.classList.add("dot")

dot.dataset.index = i

grid.appendChild(dot)

dots.push(dot)

dot.addEventListener("click",playerClick)

}



// START GAME

startBtn.onclick = function(){

level = 1

score = 0

startRound()

}



// START ROUND

function startRound(){

playerPattern = []

pattern = []

levelDisplay.textContent = level

scoreDisplay.textContent = score

generatePattern()

showPattern()

}



// GENERATE PATTERN

function generatePattern(){

for(let i=0;i<level+2;i++){

let random = Math.floor(Math.random()*16)

pattern.push(random)

}

}



// SHOW PATTERN

function showPattern(){

message.textContent="Watch the pattern"

pattern.forEach((index,i)=>{

setTimeout(()=>{

dots[index].classList.add("active")

setTimeout(()=>{

dots[index].classList.remove("active")

},500)

},i*800)

})

}



// PLAYER CLICK

function playerClick(){

let index = Number(this.dataset.index)

playerPattern.push(index)

this.classList.add("player")

setTimeout(()=>{

this.classList.remove("player")

},300)

checkPattern()

}



// CHECK PATTERN

function checkPattern(){

for(let i=0;i<playerPattern.length;i++){

if(playerPattern[i] !== pattern[i]){

message.textContent="Wrong! Game Over"

return

}

}



if(playerPattern.length === pattern.length){

score += 10

level++

message.textContent="Correct!"

setTimeout(startRound,1000)

}

}
