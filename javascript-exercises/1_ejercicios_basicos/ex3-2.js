let rayo = 'El rayo es el mejor';
let rayoUpper = rayo.toUpperCase();
let rayoUpperJoin = rayoUpper.replaceAll(" ", "");
let rayoUpperUnJoin = rayoUpperJoin.split("").join("-");
console.log(rayoUpperUnJoin);