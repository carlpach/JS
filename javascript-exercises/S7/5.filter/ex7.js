const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let inpt$$ = document.querySelector("[data-function='toFilterStreamers']");

console.log("----", inpt$$.value);

const filterNames = (event) => {
    const streamersFilt = streamers.filter( stream => 
    stream.name.includes(`${inpt$$.value}`)
    );
    console.log(streamersFilt);

}

inpt$$.addEventListener("input", () => ( filterNames(event) ));