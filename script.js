// Initialize immutables
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = 'black';
const DEFAULT_MODE = 'color';

// Initialize mutables
let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

// Initialize setters
function setSize(newSize) {
    currentSize = newSize;
}

function setColor(newColor) {
    currentColor = newColor;
}

function setMode(newMode) {
    currentMode = newMode;
}

// Retrieve buttons
const colorBtn = document.getElementById('colorBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

colorBtn.onclick = () => setMode('color');
eraserBtn.onclick = () => setMode('eraser');
clearBtn.onclick = () => clearGrid();

let sliderText = document.getElementById('slider-value');


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function updateSizeText(size) {
    sliderText.innerHTML = `${size} x ${size}`;
}

function createGrid(size) {
    let container = document.querySelector('#container');

    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add('cell');
        div.style.width = (512 / size) + 'px';
        div.style.height = (512/ size) + 'px';

        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mousedown', changeColor);
        container.appendChild(div);
    }
}

function clearGrid() {
    let container = document.querySelector('#container');
    container.innerHTML = "";
    createGrid(currentSize);
}

function changeColor(event) {
    if (event.type === 'mouseover' && !mouseDown) {
        return;
    }

    if (currentMode === 'color') {
        event.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
        event.target.style.backgroundColor = 'white';
    }
}

// Handle event when slider value is changed
let slider = document.querySelector('#slider');
slider.addEventListener('change', () => {
    updateSizeText(slider.value)
    clearGrid(); 
    createGrid(slider.value);
});

// On startup
window.onload = () => {
    createGrid(currentSize); // Create initial grid
}
