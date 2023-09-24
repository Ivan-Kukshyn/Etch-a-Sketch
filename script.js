const container = document.querySelector('#container');
const clear = document.querySelector('button');
let isDrawing = false;
// Colour change function
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

// Creates a default grid sized 16x16
function createGrid(size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {

    let square = document.createElement('div');
    square.style.backgroundColor = '#fff';
    container.appendChild(square);

    /* Created a “hover” effect so that the grid divs change color
     when mouse passes over them, leaving a (pixelated) trail through grid */
    square.addEventListener('mouseover', e => {
      if (isDrawing) (
        square.style.backgroundColor = getRandomColor()
      )
    });

    square.addEventListener('mouseup', e => {
      isDrawing = false;
    });

    square.addEventListener('mousedown', e => {
      isDrawing = true;
    });

    // Function to reset the grid
    function clearGrid() {
      clear.addEventListener('click', e => {
        square.style.backgroundColor = '#fff';
      })
    }

    clearGrid();
  }
};

createGrid(16);

// Pop-up window
function newGrid() {
  let number = prompt("What size would you like the grid to be? (1-100)");
  container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  createGrid(number);
};

clear.addEventListener('click', () => {
  newGrid()
});



