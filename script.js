function createGrid(rows, cols) {
    let container = document.querySelector('#container');

    for (let i = 0; i < (16 * 16); i++) {
        let div = document.createElement("div");
        div.classList.add('cell');
        

        // Change cell to black when hovered over
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });

        container.appendChild(div);
    }
}

// Create grid
let rows = 16;
let cols = 16;
createGrid(rows, cols);

// Set up event listener for button
let btn = document.querySelector('button');


btn.addEventListener('mousedown', () => {
    rows = cols = prompt("Enter a new number of rows and cols");
});