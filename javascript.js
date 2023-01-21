// set the grid to a default 16 x 16
let gridSize = 16;

// setup grid layout
const grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;


// Color div black
function blackFill(newDiv) {
    newDiv.style.background = "black"
}


function addEventColorInBlack(newDiv) {
    newDiv.addEventListener('mouseover', () => blackFill(newDiv));
}


function makeDivs(gridSize) {
    // make divs to fill the grid
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            addEventColorInBlack(newDiv);
            grid.appendChild(newDiv);
        }
    }
}

makeDivs(gridSize);