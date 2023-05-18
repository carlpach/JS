const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let ul$$ = document.createElement("ul");


for (let car of cars) {
    let li$$ = document.createElement("li");
    li$$.textContent=car;
    ul$$.appendChild(li$$);

}

let div$$ = document.body.querySelector('[data-function="printHere"]');

div$$.appendChild(ul$$);