
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

const favSoundsList = [];
const favSounds = [];

for (let user of users) {
    for (let sound in user.favoritesSounds) {
        if (!favSoundsList.includes(sound)) {
            favSoundsList.push(sound);

            let numSound = 1;
            const objFav = {name: sound, freq: numSound};
            favSounds.push(objFav);   
        }
        else if (favSoundsList.includes(sound)) {
            let ixSound = favSoundsList.indexOf(sound);
            console.log(ixSound);
            console.log(favSounds);
            favSounds[ixSound].freq++
        }
   }

}

console.log(favSounds);




