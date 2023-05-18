
let ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (let app of apps) {
    let li$$ = document.createElement("li");
    li$$.textContent = app;
    ul$$.appendChild(li$$);
}