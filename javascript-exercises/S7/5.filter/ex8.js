const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let inpt$$ = document.querySelector("[data-function='toFilterStreamers']");
let butt$$ = document.querySelector("[data-function='toShowFilterStreamers']");

console.log("----", inpt$$.value);

const filterNames = () => {
    const streamersFilt = streamers.filter( stream => 
    stream.name.toLowerCase().includes(`${inpt$$.value.toLowerCase()}`)
    );
    console.log(streamersFilt);

}

butt$$.addEventListener("click", () => ( filterNames() ));

