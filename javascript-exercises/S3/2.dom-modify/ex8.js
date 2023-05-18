let p$$ = document.createElement("p");
p$$.textContent="voy en medio!";
let target$$ = document.querySelectorAll("div")[1];
console.log(target$$);
document.body.insertBefore(p$$, target$$);
