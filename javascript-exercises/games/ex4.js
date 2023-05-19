

let rowsInp = prompt("Inserta el num de filas, e.g:", " ");
console.log(rowsInp);
let columnsInp = prompt("Inserta el num de columnas, e.g:", " ");


// read elements html
let tbody$$ = document.body.querySelector('[data-function="board"]');

for (let row of rowsInp) {
    let row$$ = document.createElement("tr");
    tbody$$.appendChild(row$$);

    for (let col of columnsInp) {
        let cell$$ = document.createElement("img");
        cell$$.src = "public/exercise-4/x.png";
        row$$.appendChild(cell$$);
    }

}