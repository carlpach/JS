let butt$$ = document.createElement("button");
butt$$.id = "btnClick";
butt$$.textContent = "Button";
document.body.appendChild(butt$$);


function bttclick(event) {
    console.log(event);
}

butt$$.addEventListener("click", bttclick);