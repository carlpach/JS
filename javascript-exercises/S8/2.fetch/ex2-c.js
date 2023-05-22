const baseUrl = 'https://api.nationalize.io?name=';

let btt$$ = document.querySelector("button");
let inpt$$ = document.querySelector("input");

const search = () => {

    let valInp = inpt$$.value;
    let urlName = baseUrl + valInp;

    fetch (urlName)
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            drawParaf(res);
        })
};


const drawParaf = (res) => {
    let nam = res.name;
    let parrText = `El nombre ${nam} tiene `;
    let divCont$$ = document.createElement("div");

    for (countr of res.country) {
        let probabText = `un ${Math.floor(countr.probability*100)} 
                        porciento de ser de ${countr.country_id}, `;
        parrText += probabText;
    }

    divCont$$.textContent = parrText;
    console.log(parrText);
    document.body.appendChild(divCont$$);
    let bttForName$$ = document.createElement("button");
    bttForName$$.textContent = "X";
    divCont$$.appendChild(bttForName$$);

    bttForName$$.addEventListener("click", () => {deleteEntry(divCont$$) });
}

const deleteEntry = (divCont$$) => {
    // delete button
    divCont$$.remove();
}

btt$$.addEventListener("click", search);

