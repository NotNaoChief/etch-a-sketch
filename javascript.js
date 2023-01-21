let gridSize = 16;
const container = document.querySelector(".grid");

container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item")
        container.appendChild(newDiv);
    }
}