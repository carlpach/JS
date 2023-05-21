
let rowsInp = prompt("Inserta el num de filas, e.g:", "");
let columnsInp = prompt("Inserta el num de columnas, e.g:", "");

// random position3
let randomPosX = Math.floor(Math.random() * columnsInp) + 1;
let randomPosY = Math.floor(Math.random() * rowsInp) + 1;
console.log(randomPosX, randomPosY);

// read elements html
let tbody$$ = document.body.querySelector('[data-function="board"]');
let attempts$$ = document.body.querySelector('[data-function="attempts"]');
let countClicks = 0;
let postRw = 0;
for (let index = 0; index < rowsInp; index++) {
    let row$$ = document.createElement("tr");
    tbody$$.appendChild(row$$);
    let positionCellX = index + 1;

    for (let indexCol = 0; indexCol < columnsInp; indexCol++) {
        let positionCellY = indexCol + 1

        let cell$$ = document.createElement("img");
        cell$$.src = "public/exercise-4/x.png";

        cell$$.addEventListener("click", function () {
            checkResult(cell$$, positionCellX, positionCellY);
            }
        )
        row$$.appendChild(cell$$);
    }

}

function checkResult(cell$$, positionCellX, positionCellY) {
    countClicks++;
    attempts$$.textContent = countClicks;
    console.log(`number of clicks ---->> ${countClicks}`);
    console.log(randomPosX, randomPosY, positionCellX, positionCellY);
    if (randomPosX === positionCellX && randomPosY === positionCellY) {
    cell$$.src = "public/exercise-4/chest.png";
    setTimeout(() => {alert("You won!!!!");
            }, "100");
    } 
    else {
        cell$$.src = "public/exercise-4/skull.png";
        //setTimeout( alert("You won!!!!"), "4000")
    }
}
