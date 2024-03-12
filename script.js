const DEFAULT_SIZE = 16;
const DEFAULT_CELL_COLOR = 'black';

function createGrid(size) {
    let container = document.querySelector('#container');

    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add('cell');

        div.style.width = (512 / size) + 'px';
        div.style.height = (512/ size) + 'px';

        // Change cell to black when hovered over
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = DEFAULT_CELL_COLOR;
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

// Set up event listener for slider
let slider = document.querySelector('#slider');
slider.addEventListener('change', () => {
    let sliderText = document.querySelector('#slider-value');
    sliderText.textContent = slider.value;
    clearGrid();
    createGrid(slider.value);
});