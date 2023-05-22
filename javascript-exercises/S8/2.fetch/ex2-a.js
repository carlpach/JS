const baseUrl = 'https://api.nationalize.io?name=';

let butt$ = document.querySelector("button");
let inpt$$ = document.querySelector("input");



const search = () => {
    let val = inpt$$.value;
    let urlName = baseUrl + val;
    console.log("----------", val);
    
    fetch (urlName)
        .then((response) => {
            return response.json();
        })
        .then((res) => {
            console.log(res);
        });
};


butt$.addEventListener("click", search);
