const products = [{name: 'Gorra de rodilla', sellCount: 10},
                {name: 'Pantalón de pana', sellCount: 302},
                {name: 'Reloj de papel albal', sellCount: 23},
                {name: 'Inpar de zapatos', sellCount: 6}];
let sumCount = 0;
let arrSumCount = [];

for (let index = 0; index < products.length; index++) {
    const countVent = products[index].sellCount;
    console.log(countVent);
    sumCount += countVent;
}

// calcular media
console.log(sumCount/products.length);

// suma
console.log(sumCount);