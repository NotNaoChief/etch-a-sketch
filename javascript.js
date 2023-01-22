// set the grid to a default 16 x 16
let gridSize = 16;

// setup grid layout
const grid = document.querySelector(".grid");


// change grid size
const gridSizeBtn = document.querySelector(".grid-size");
gridSizeBtn.addEventListener('click', () => setNewGrid());

function getNewGridSize() {
    const newGridSize = prompt("Input a number between 1 and 100 to set the new grid size");
    return newGridSize;
}

function setNewGrid() {
    const gridSizeString = getNewGridSize();
    const gridSizeInt = parseInt(gridSizeString);
    grid.innerHTML = '';
    setGrid(gridSizeInt);
}


// Color div black
function blackFill(newDiv) {
    newDiv.style.background = "black"
}


function addEventColorInBlack(newDiv) {
    newDiv.addEventListener('mouseover', () => blackFill(newDiv));
}


function setGrid(gridSize) {
    // setup grid template
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    makeDivs(gridSize);
}


function makeDivs(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            addEventColorInBlack(newDiv);
            grid.appendChild(newDiv);
        }
    }
}


setGrid(gridSize);