
const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
for (let destino of placesToTravel) {
    
    if (destino.id == 11 || destino.id == 40) {
        ixDelete = placesToTravel.indexOf(destino)
        placesToTravel.splice(ixDelete, 1);
    }
}

console.log(placesToTravel);