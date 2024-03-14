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
    activateButton(newMode);
    currentMode = newMode;
}

// Retrieve buttons
const colorBtn = document.getElementById('colorBtn');
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');

colorBtn.onclick = () => setMode('color');
rainbowBtn.onclick = () => setMode('rainbow');
eraserBtn.onclick = () => setMode('erase');
clearBtn.onclick = () => clearGrid();

let sliderText = document.getElementById('slider-value');
let container = document.getElementById('container');


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function updateSizeText(size) {
    sliderText.innerHTML = `${size} x ${size}`;
}

function createGrid(size) {
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
    container.innerHTML = "";
    createGrid(currentSize);
}

function changeColor(event) {
    if (event.type === 'mouseover' && !mouseDown) {
        return;
    }

    if (currentMode === 'color') {
        event.target.style.backgroundColor = currentColor;
    } else if (currentMode === "rainbow") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        event.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'erase') {
        event.target.style.backgroundColor = 'white';
    }
}

function activateButton(newMode) {
    if (currentMode === 'color') {
        colorBtn.classList.remove('active');
    } else if (currentMode === 'rainbow') {
        rainbowBtn.classList.remove('active');
    } else if (currentMode === 'erase') {
        eraserBtn.classList.remove('active');
    }

    if (newMode === 'color') {
        colorBtn.classList.add('active');
    } else if (newMode === 'rainbow') {
        rainbowBtn.classList.add('active');
    } else if (newMode === 'erase') {
        eraserBtn.classList.add('active');
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
    setMode('color')
}
