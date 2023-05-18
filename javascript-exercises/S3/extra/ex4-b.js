const countries = [{title: '1 title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: '2 title', imgUrl: 'https://picsum.photos/300/200?random=2'},
{title: '3 title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: '4 title', imgUrl: 'https://picsum.photos/300/200?random=4'},
{title: '5 pic', imgUrl: 'https://picsum.photos/300/200?random=5'}];
4
let divAll$$ = document.createElement("ul");

for (let i of countries) {
    let div$$ = document.createElement("div");

    titl = i.title;
    img = i.imgUrl;
    let h4$$ = document.createElement("h4");
    h4$$.textContent = titl;
    let img$$ = document.createElement("img");
    img$$.src = img;
    
    div$$.appendChild(h4$$).appendChild(img$$);
    divAll$$.appendChild(div$$);

}

document.body.appendChild(divAll$$);


let butt$$ = document.createElement("button");
butt$$.textContent = "BORRAR FOTO";

let handleClick = function(event) {
    divs$$ = document.body.querySelectorAll("div")
    lastdiv$$ =divs$$[divs$$.length-1]
    lastdiv$$.remove()
}

butt$$.addEventListener("click", handleClick)
document.body.appendChild(butt$$);