let grid = document.getElementById("grid");
let slider = document.getElementById("grid-sizer");

let gridSize = 35; //! defined in CSS

makeGrid(16);
slider.oninput = function() {
    makeGrid(this.value);
}

function generateGrid(dim) {
    for(let i=0; i < dim*dim; i++) {
        let cell = document.createElement('div');
        cell.classList.add("grid-item");
        cell.style.width = `${gridSize / dim}rem`;
        cell.style.height = `${gridSize / dim}rem`;
        grid.appendChild(cell);
    }
}

function makeGrid(dimensions) {
    grid.innerHTML = "";
    generateGrid(dimensions);
}