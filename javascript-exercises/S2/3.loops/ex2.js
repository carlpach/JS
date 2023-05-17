const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien) {
    console.log(`Property key: ${key}, property value: ${alien[key]}`);
}