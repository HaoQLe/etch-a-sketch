function createGrid() {
    let container = document.querySelector('#container');

    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        div.textContent = i;
    }
}

createGrid();