baseUrl = "	https://starwars-databank-server.vercel.app/api/v1/characters"


let main$$ = document.createElement("main");
main$$.style.backgroundColor = "#F2F2F2";
main$$.style.padding = "0px";
let divParent$$ = document.createElement("div");

// add styles to class
divParent$$.classList.add(".divParent");
divParent$$.style.display = "flex";
divParent$$.style.flexWrap = "wrap";
divParent$$.style.gap = "15px";


document.body.appendChild(main$$);
main$$.appendChild(divParent$$);


fetch (baseUrl)
.then ((res) => {
    return res.json();
})
.then ((charactsSWars) => {
    console.log(charactsSWars);
    getCharacters(charactsSWars)
})


const getCharacters = (charactsSWars) => {
    let data = charactsSWars.data;
    for (chr of data) {

        let divNode$$ = document.createElement("div");
        divNode$$.style.width = "31%";
        divNode$$.style.backgroundColor = "white";
        divNode$$.style.borderRadius = "15px";

        let h3Node = document.createElement("h3");
        h3Node.textContent =chr.name;

        let descripNode = document.createElement("p");
        descripNode.textContent =chr.description;

        let imgNode = document.createElement("img");
        imgNode.src = chr.image;
        imgNode.style.width = "100%";

        divNode$$.appendChild(h3Node);
        divNode$$.appendChild(descripNode);
        divNode$$.appendChild(imgNode);
        divParent$$.appendChild(divNode$$);

    }

}
