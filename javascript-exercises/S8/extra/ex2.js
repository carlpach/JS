const baseUrl = "http://localhost:3000/diary";

fetch (baseUrl)
.then((response) => {
    return response.json();
})
.then((myJson) => { 
    sortJson = sortDate(myJson);
    buildPage(sortJson);
})


const sortDate = (miJson) => {
    const sortJson = miJson.sort( (a, b)  => {
        const dateA = a.date.toUpperCase(); // ignore upper and lowercase
        const dateB = b.date.toUpperCase(); // ignore upper and lowercase
        if (dateA > dateB) {
          return 1;
        }
        if (dateA < dateB) {
          return -1;
        }
      
        // dates must be equal
        return 0;
    });

    return sortJson
}

const buildPage = (sortJson) => {
    for (const note of sortJson) {
        let divDiary$$ = document.createElement("div");
        let h3Diary$$ = document.createElement("h3");
        let h5Diary$$ = document.createElement("h5");
        let pDiary$$ = document.createElement("p");
        let buttonDiary$$ = document.createElement("button");
        buttonDiary$$.textContent = "Borrar";

        h3Diary$$.textContent = note.title;
        h5Diary$$.textContent = note.date;
        pDiary$$.textContent = note.description;

        divDiary$$.appendChild(h3Diary$$);
        divDiary$$.appendChild(h5Diary$$);
        divDiary$$.appendChild(pDiary$$);
        divDiary$$.appendChild(buttonDiary$$);

        document.body.appendChild(divDiary$$);

        buttonDiary$$.addEventListener("click", () => { 
            divDiary$$.remove();
        })
    }
}

