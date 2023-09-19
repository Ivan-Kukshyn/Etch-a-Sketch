const container = document.getElementById('container');

// Creates a default grid sized 16x16
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    cell.innerText = (c + 1);
    container.appendChild(cell).className = 'grid-item';
  };
};

makeRows(16, 16);

/* Created a "hover" effect so that the grid divs change 
colour when you hover your mouse over them, and ends when your mouse leaves it */
const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(cell => {
  cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = '#000';
  });

  cell.addEventListener('mouseout', () => {
    cell.style.backgroundColor = '';
  });
});
