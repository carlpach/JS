function findArrayIndex (array, text) {
    for (let i of array) {
        if (i === text) {
            return array.indexOf(i);
        }

    }
}

const array = ['Caracol', 'dddd', 'Mosquito', 'Ajolote'];

console.log(findArrayIndex(array, 'dddd'));
console.log(findArrayIndex(array, 'Mosquito'));
console.log(findArrayIndex(array, 'Ajolote'));