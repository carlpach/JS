const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random pic', imgUrl: 'https://picsum.photos/300/200?random=5'}];

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