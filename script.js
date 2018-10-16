var container = document.getElementById("container");
let x = 0;

function createTable(num) {
    var div = document.createElement("div");
    div.id = "table";
    div.setAttribute("name", num);
    container.appendChild(div);
    setActive(div)
}

function size(amount) {
    for(let i = 0; amount > i; i++) {
        createTable(x+i);
        for(let x = 1; amount > x; x++) {
            createTable(x+i);
        }
    }
}

function setActive(div) {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'black';
    })
}

function removeTable() {
    container.innerHTML = "";

    size(16);
}

size(16);



