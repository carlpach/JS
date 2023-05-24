
const baseUrl = "http://localhost:3000/movies";
// console.log(window.location.pathname);

const getFilms = async (baseUrl) => {
    const res = await fetch(baseUrl);
    const resJson = await res.json();

    let divGallery$$ = document.createElement("div");
    divGallery$$.classList.add("b-gallery");
    document.body.appendChild(divGallery$$);

    printMovies(resJson, divGallery$$);

}

const printMovies = (resJson, divGallery$$) => {
    for (const film of resJson) {
        const imgFilm = 'public/' + film.img ;
        let divFilm$$ = document.createElement("div");
        divFilm$$.classList.add("b-gallery__item");
        divFilm$$.innerHTML = `<img src=${imgFilm} alt="" class="images">
                                <h2 class="b-gallery__title">${film.title}</h2>
                                <h3 class=".date">${film.date}</h3>
                                <h4 class=".rating">${film.rating}</h4>
                                <p class="">${film.description}</p>`
                                ;
        divGallery$$.appendChild(divFilm$$);
        }
    }
    
getFilms(baseUrl);    

