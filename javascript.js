let gridSize = 16;

let color = "rgb(0, 0, 0)";
let randRed;
let randGreen;
let randBlue;

let colorMode = 'random';


// setup grid layout
const grid = document.querySelector(".grid");

// change grid size
const gridSizeBtn = document.querySelector(".grid-size");
gridSizeBtn.addEventListener('click', () => setNewGrid());

// change color mode
const blackFillBtn = document.querySelector('.black');
blackFillBtn.addEventListener('click', () => colorMode = 'black')

const randFillBtn = document.querySelector('.random');
randFillBtn.addEventListener('click', () => colorMode = 'random');


function getNewGridSize() {
    let newGridSize = prompt("Input a number between 1 and 100 to set the new grid size");
    newGridSize = validateInput(newGridSize);
    return newGridSize;
}


function validateInput(newGridSize) {
    if (isFinite(newGridSize) === true && parseInt(newGridSize) >= 1 && parseInt(newGridSize) <= 100) {
        return newGridSize
    } else {
        getNewGridSize();
    }
}


function setNewGrid() {
    const gridSizeString = getNewGridSize();
    const gridSizeInt = parseInt(gridSizeString);
    grid.innerHTML = '';
    setGrid(gridSizeInt);
}


// Color div black
function setColor(newDiv, colorMode) {
    switch (colorMode) {
        case 'black':
            color = "rgb(0, 0, 0)"
            break;
        case 'random':
            getRandRGB();
            color = `rgb(${randRed}, ${randGreen}, ${randBlue}`
    }
    newDiv.style.background = color;
}


function getRandRGB() {
    randRed = getRandInt();
    randGreen = getRandInt();
    randBlue = getRandInt();
}


function getRandInt() {
    const randInt = Math.floor(Math.random() * 255);
    return randInt
}


function addEventColorIn(newDiv) {
    newDiv.addEventListener('mouseover', () => setColor(newDiv, colorMode));
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
            addEventColorIn(newDiv);
            grid.appendChild(newDiv);
        }
    }
}


setGrid(gridSize);
