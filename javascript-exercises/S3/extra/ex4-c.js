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
    let butt$$ = document.createElement("button");
    butt$$.textContent = "BORRAR FOTO";
    
    div$$.appendChild(h4$$).appendChild(img$$);
    div$$.appendChild(butt$$);

    let handleClick = function() {
        div$$.remove();
    }
    butt$$.addEventListener("click", handleClick);


    divAll$$.appendChild(div$$);

}

document.body.appendChild(divAll$$);
