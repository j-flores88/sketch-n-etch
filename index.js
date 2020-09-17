/*
if ($) {
    alert('SUCCESS!')
} 
*/
const grid = document.getElementById('container');
const square = document.querySelector("div");
const resetBtn = document.getElementById('reset');
const userInput = document.getElementById('quantity')

function createGrid() {
    for(let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell).className = 'square'
    }
}

square.onmouseover = function(e) {
    e.target.classList.replace('square', 'color')
}
function userGrid() {
    grid.innerHTML = '';
    grid.style.setProperty('grid-template-columns', `repeat(${userInput.value}, 2fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${userInput.value}, 2fr)`);

    for(let i = 0; i < (userInput.value * userInput.value); i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell).className = 'square';
    }
}

userInput.addEventListener("change", userGrid);

resetBtn.onclick = function() { 
    grid.innerHTML = ""; 
    userInput.value = ''  
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid()
}

createGrid()