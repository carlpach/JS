const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}];

const peliculasSmall = [];
const peliculasMed = [];
const peliculasLarg = [];

for (let index = 0; index < movies.length; index++) {
    let movie = movies[index];
    if (movie.durationInMinutes < 100) {
        peliculasSmall.push(movie);
    }

    else if (100 <= movie.durationInMinutes && movie.durationInMinutes < 200) {
        peliculasMed.push(movie);
    }

    else if (movie.durationInMinutes >= 200) {
        peliculasLarg.push(movie);
    }
    
}

console.log("small ", peliculasSmall);
console.log("medianas ", peliculasMed);
console.log("largas ", peliculasLarg);