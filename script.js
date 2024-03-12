const DEFAULT_SIZE = 16;

function createGrid(size) {
    let container = document.querySelector('#container');

    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add('cell');

        div.style.width = (512 / size) + 'px';
        div.style.height = (512/ size) + 'px';

        // Change cell to black when hovered over
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });

        container.appendChild(div);
    }
}

function clearGrid() {
    let container = document.querySelector('#container');
    container.innerHTML = "";
}

// Create initial grid
let size = DEFAULT_SIZE;
createGrid(size);

// Set up event listener for button
let btn = document.querySelector('button');


btn.addEventListener('mousedown', () => {
    size = prompt("Enter a new number of rows and cols");
    clearGrid();
    createGrid(size);
});