
let baseUrl = "http://localhost:3000";
let planetsUrl = "http://localhost:3000/planets";
let charactsUrl = "http://localhost:3000/characters";

let divPlanets$$ = document.querySelector('[data-function="planets"]');
let divSearch$$ = document.querySelector('[data-function="search"]');
let divCharacters$$ = document.querySelector('[data-function="characters"]');

// get planets
fetch (planetsUrl)
.then((response) => response.json())
.then((planets) => {
    // Insert planet images
    InsertPlanets(planets);

})

const InsertPlanets = (planets) => {
    divPlanets$$.style.justifyContent= "space-around";
    divPlanets$$.style.gap = "20px";
    for (const planet of planets) {

        let divImg$$ = document.createElement('img');
        divImg$$.src = planet.image;
        divImg$$.style.height = "300px";

        let titlePlanet$$ = document.createElement('h1');
        titlePlanet$$.textContent = planet.name;


        divPlanets$$.appendChild(divImg$$);
        divPlanets$$.appendChild(titlePlanet$$);

        let idPlanet = planet.id;

        // event click to populate details
        divImg$$.addEventListener("click", () => handleClickPlanets(idPlanet) )
    }
}

const createCharacters = (characterPlanet) => {

    divCharacters$$.innerHTML = ``;
    for (const charact of characterPlanet) {
        let divCharacter$$ = document.createElement("div");
        divCharacter$$.style.width = "20%";
        divCharacter$$.innerHTML = `<img src="${charact.avatar}" width="30%" class="img-character">
                                <h3 class="">${charact.name}</h3>`;


        // open description if click in charact image
        divCharacter$$.addEventListener("click", () => handleOpenDescription(divCharacter$$, charact));
        
        divCharacters$$.appendChild(divCharacter$$);                    
    }
}

const handleClickPlanets = (idPlanet) => {

    fetch (charactsUrl + `?idPlanet=${idPlanet}` )
    .then((response) => response.json())
    .then((characterPlanet) => {

        // add characters under the planet
        createCharacters(characterPlanet);

        // add search bar
        divSearch$$.innerHTML = ``;
        let inputbar$$ = document.createElement("input");
        divSearch$$.appendChild(inputbar$$); 

        // add search bar
        inputbar$$.addEventListener("input", () => FilterCharacters(characterPlanet, inputbar$$.value));



    })

}

const FilterCharacters = (characterPlanet, inputbar$$Value) => {
    const filterCharc = characterPlanet.filter(charct => 
                                        charct.name.toLowerCase().includes(inputbar$$Value.toLowerCase()));

    createCharacters(filterCharc);
    
}

const handleOpenDescription = (divCharacter$$, charact) => {

    let paragraph$$ = document.querySelector("p");
    if (paragraph$$) {
        paragraph$$.remove();
    } else {
        let paragraph$$ = document.createElement("p");
        paragraph$$.textContent = charact.description;
        divCharacter$$.appendChild(paragraph$$);

    }

}
