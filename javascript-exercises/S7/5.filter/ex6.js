const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamersNew = streamers.filter( (stream) => {

    if (stream.age > 35) {
        stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase();
    }
    console.log(stream.gameMorePlayed);e
    return stream.gameMorePlayed.includes("LEGENDS");
    }
);

console.log(streamersNew);