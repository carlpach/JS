function swap(array, ix1, ix2 ) {

    const arrayCopy = array.slice();
    arrayCopy.splice(ix1,1,array[ix2]);
    arrayCopy.splice(ix2,1,array[ix1]);
    return arrayCopy;
    
}

const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(array, 1, 3));