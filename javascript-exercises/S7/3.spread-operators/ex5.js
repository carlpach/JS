const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

const newColor = [...colors];
newColor.splice(1,1);

console.log(newColor);