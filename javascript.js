// set the grid to a default 16 x 16
let gridSize = 16;

// setup grid layout
const container = document.querySelector(".grid");
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

// make divs to fill the grid
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item")
        container.appendChild(newDiv);
    }
}