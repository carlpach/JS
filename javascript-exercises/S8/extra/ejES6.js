const list = [
    {
      id: 1,
      isActive: true,
      age: 22,
      name: 'Bob'
    },
    {
      id: 2,
      isActive: false,
      age: 56,
      name: 'Tim'
    },
    {
      id: 3,
      isActive: true,
      age: 17,
      name: 'Clark'
    },
    {
      id: 4,
      isActive: true,
      age: 9,
      name: 'Roxy'
    },
    {
      id: 5,
      isActive: false,
      age: 71,
      name: 'Jim'
    }
  ];

  
const listadoFiltrado = list.filter(person => person.isActive );

console.log(listadoFiltrado);

const listadoSimplificado = list.map((person) => 
    {
        return {age: person.age, name: person.name}
    });

console.log(listadoSimplificado);

const sumAge = list.reduce((acu, person) => { return acu + person.age }, 0);

console.log(sumAge);
