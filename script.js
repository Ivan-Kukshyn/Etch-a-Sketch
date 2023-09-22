const container = document.querySelector("#container");
const clear = document.querySelector("button");

// Creates a default grid sized 16x16
function createGrid(size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {

    let grid = document.createElement("div");
    grid.style.backgroundColor = "#fff";
    container.appendChild(grid);

    /* Created a “hover” effect so that the grid divs change color
     when mouse passes over them, leaving a (pixelated) trail through grid */
    grid.addEventListener('mouseover', e => {
      grid.style.backgroundColor = "#000";
    })

    // Function to reset the grid
    function clearGrid() {
      clear.addEventListener('click', e => {
        grid.style.backgroundColor = "#fff";
      })
    }

    clearGrid();
  }
}

createGrid(16);

// Pop-up window
function newGrid() {
  let number = prompt("What size would you like the grid to be? (1-100)");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  createGrid(number);
}

clear.addEventListener('click', () => {
  newGrid()
})