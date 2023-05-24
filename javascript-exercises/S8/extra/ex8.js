const baseUrl = "https://api.thecatapi.com/v1/images/search";

const createButton = (name) => {
    const butt$$ = document.createElement("button");
    butt$$.textContent = name;
    return butt$$;
}

const but$$ = createButton("ADD CAT");
document.body.appendChild(but$$);

const divCatParent$$ = document.createElement("div");
divCatParent$$.classList.add("b-gallery");
divCatParent$$.style.gap = "10px";
document.body.appendChild(divCatParent$$);

but$$.addEventListener("click", () => handleClickBtton(divCatParent$$))


const handleClickBtton = (divCatParent$$) => {

    fetch (baseUrl)
    .then ((response) => response.json())
    .then ((res) => {
        let cat = res[0];
        CreateDivImg(cat, divCatParent$$)
    })
}

const CreateDivImg = (cat, divCatParent$$) => {
    const divCat$$ = document.createElement("div");
    divCat$$.style.width = "25%";

    const imgCat$$ = document.createElement("img");
    const titleCat$$ = document.createElement("h2");
    imgCat$$.src = cat.url;
    titleCat$$.textContent = cat.id;
    divCat$$.appendChild(titleCat$$);
    divCat$$.appendChild(imgCat$$);

    const butDelete$$ = createButton("X");
    divCat$$.appendChild(butDelete$$);

    butDelete$$.addEventListener("click", () => {divCat$$.remove();});

    divCatParent$$.appendChild(divCat$$);
}
