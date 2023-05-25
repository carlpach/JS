
let countPages = 1;
const gallery$$ = document.querySelector(".b-gallery");
const button$$ = document.createElement("div");
button$$.innerHTML = `<button class="b-btn">Cargar màs</button>`;
document.body.appendChild(button$$);

baseUrl = "http://localhost:3000/characters";
const getCharacters = async (countPages) => {
    pageUrl = baseUrl + `?_page=${countPages}&_limit=5`
    const res = await fetch(pageUrl);
    const itemsJson = await res.json();
    console.log(itemsJson);
    // print Images

    printImages(itemsJson)


}

const printImages = (itemsJson) => {
    for (const item of itemsJson) {
        const divImg$$ = document.createElement("div");
        divImg$$.classList.add("b-gallery__item");
        divImg$$.classList.add("b-gallery__item--transition"); // added animation
        divImg$$.innerHTML = `<h2 class="b-gallery__text">${item.name}</h2>
                            <img src=${item.image} alt="character-${item.name}" class="b-gallery__img">`
        gallery$$.appendChild(divImg$$);
    }
    
}

const disableHtmlButton = () => {
    button$$.style.opacity = "0.3";
    button$$.style.pointerEvents = "none";
}

const handleButton = () => {
    countPages++
    getCharacters(countPages);
    if (countPages === 4) {
        disableHtmlButton();
    }

}

const allowAnimation = () => {
    gallery$$.classList.add("b-gallery--transition");
    setInterval(() => {
        gallery$$.classList.remove("b-gallery--transition");
    }, "500");;
}

getCharacters(countPages);

button$$.addEventListener("click", () => handleButton());
