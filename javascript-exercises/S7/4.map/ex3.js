const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const cityNames = cities.map( (city) => {
    if (city.isVisited) {
        city.name += " (Visitado)";
    }
    return city.name}
);

console.log(cityNames);