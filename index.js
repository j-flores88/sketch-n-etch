/*
if ($) {
    alert('SUCCESS!')
} 
*/
const grid = document.getElementById('container')


function createGrid() {

    for(let i = 0; i < 256; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell).className = 'square'
    }
}

createGrid()