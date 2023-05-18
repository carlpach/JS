const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement("ul");

for (let countr of countries) {
    let li$$ = document.createElement("li");
    li$$.textContent = countr;
    ul$$.appendChild(li$$);
    console.log(countr);
}

document.body.appendChild(ul$$);


