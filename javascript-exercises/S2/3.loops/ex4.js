
const toys = [{id: 5, name: 'Buzz MyYear'}, 
                {id: 11, name: 'Action Woman'}, 
                {id: 23, name: 'Barbie Man'}, 
                {id: 40, name: 'El gato con Guantes'},
                {id: 40, name: 'El gato felix'}]
const noGatoArray = [];

for (let toy of toys) {
    const toyName = toy.name;
    if (!toyName.includes('gato')) {
        noGatoArray.push(toy);
    }
    
}

console.log(noGatoArray);