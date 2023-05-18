
const foods = ["pizza", "garbanzos", "canelones", "burger", "brocoli"];

function comerPizza(foods, quieroPizza = false, aDieta = true) {
    let servirPizza = false;
    for (let food in foods) {
        if (food === "pizza" || quieroPizza) {
            if (aDieta) {
                servirPizza = false;
                console.log("I serve you brocoli"); 
            }
            else {
            servirPizza = true;
            }
        }
    }
}

comerPizza(foods, true, false);