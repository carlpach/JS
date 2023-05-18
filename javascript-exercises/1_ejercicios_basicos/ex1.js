const avengers = ['Spiderman', 'AntMan', 'Hulk'];
const mutants = ['Wolverine', 'Ciclops', 'Storm'];
const defenders = ['Daredevil', 'IronFist', 'Luke Cage'];

function calcListLength(list) {
    myLength = 0;

    list.forEach(
        function addList(element) {
            myLength = myLength + element.length; 
        }
    ) 
    {
        return myLength;
    }
    
}


var avengersLength = calcListLength(avengers);
var mutantsLength = calcListLength(mutants);
var defendersLength = calcListLength(defenders);
const superArray = [avengersLength, mutantsLength, defendersLength];

console.log(typeof [avengersLength, mutantsLength, defendersLength]);

// max of array
const maxArr = Math.max(...[avengersLength, mutantsLength, defendersLength]);

console.log(maxArr);

// sum
let sumArr = 0;
for (let i of superArray) {
    sumArr += i;
}

// average

let avgArr = sumArr / superArray.length;


const myArray = ["carlos", "patricia", "eleddddna", "jesus", "elenalu", "laura"]
let longestElement = "";
myArray.forEach(
    function funct(element) {
        if (element > longestElement) {
            longestElement = element;
        }
    }
)
console.log(longestElement);
