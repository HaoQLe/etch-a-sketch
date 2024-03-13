const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'color';

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

function createGrid(size) {
    let container = document.querySelector('#container');

    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add('cell');

        div.style.width = (512 / size) + 'px';
        div.style.height = (512/ size) + 'px';

        // Change cell to black when hovered over
        div.addEventListener('mouseover', () => {
            if (currentMode === 'color') {
                div.style.backgroundColor = currentColor;
            } else if (currentMode === 'erase') {
                div.style.backgroundColor = 'white';
            }
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

// Handle event when slider value is changed
let slider = document.querySelector('#slider');
slider.addEventListener('change', () => {
    let sliderText = document.querySelector('#slider-value');
    sliderText.textContent = slider.value;
    clearGrid();
    createGrid(slider.value);
});

// Handle event when clear button is clicked
let clearBtn = document.getElementById('clearBtn');
clearBtn.onclick = () => {
    clearGrid();
    createGrid(size);
}