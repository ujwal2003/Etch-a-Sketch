let grid = document.getElementById("grid-container");

function makeGrid(width, height) {
    width = (width > 100) ? 100 : width;
    height = (height > 100) ? 100 : height;
    
    for(let x=0; x < width; x++) {
        let col = document.createElement('div');
        col.className = 'col';

        for(let y=0; y < height; y++) {
            let item = document.createElement('div');
            item.className = 'grid-box';
            col.appendChild(item);
        }

        grid.appendChild(col);
    }
}

function editGrid(width, height) {
    grid.innerHTML = '';
    makeGrid(width, height);
}