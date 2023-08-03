let grid = document.getElementById("grid");
let slider = document.getElementById("grid-sizer");
let clearButton = document.getElementById("clr-btn");
let label = document.getElementById("label");
let colorButton = document.getElementById("color");


let color = "black";
let gridSize = 35; //! defined in CSS
let gridDimensions = 16;

makeGrid(gridDimensions);
slider.oninput = function() {
    gridDimensions = slider.value;
    label.textContent = `Size ${gridDimensions}x${gridDimensions}`;
    makeGrid(gridDimensions);
}

colorButton.addEventListener('input', function(e) {
    color = colorButton.value;
});

clearButton.addEventListener("click", clearCanvas);

function generateGrid(dim) {
    for(let i=0; i < dim*dim; i++) {
        let cell = document.createElement('div');
        cell.classList.add("grid-item");
        cell.style.width = `${gridSize / dim}rem`;
        cell.style.height = `${gridSize / dim}rem`;
        cell.addEventListener("mouseover", paint);
        grid.appendChild(cell);
    }
}

function makeGrid(dimensions) {
    grid.innerHTML = "";
    generateGrid(dimensions);
}

function paint() {
    this.style.backgroundColor = color;
}

function clearCanvas() {
    let cells = document.querySelectorAll(".grid-item");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}