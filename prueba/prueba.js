// ENUNCIADO:
// EL faraón Nekgikis VII quiere traducir un nombre al egipcio antiguo. Para ello, debe eliminar las vocales y los espacios del nombre. Por ejemplo, si el nombre es "Juan", el nombre traducido será "Jn".

// También quiere saber cuántos días han pasado desde una fecha dada hasta el 20 de marzo de 2023. Por ejemplo, si la fecha es "15/03/2023", el número de días transcurridos será 5.

// Sin embargo si la fecha introducida fuera 10/03/2024, el número de días transcurridos sería -366.

// Es necesario que además se añada el evento de perder el foco (blur) a los inputs de nombre y fecha, para que el faraón pueda leer el nombre sin vocales ni espacios y los días transcurridos en los otros dos inputs correspondientes.

// Para ello, el faraón te pide que definas las siguientes funciones: calculateIntervalDays, removeVocalsAndSpaces, handleInputName y handleInputDate

// A TENER EN CUENTA:
// Te ayudará usar IDE, codepen o similar antes de pegar el código en la solución
// Ceñirse a codificar lo que se pide
// Puedes darle a comprobar tu código cuantas veces quieras, no hay límite
// Si el código no es correcto solo lo indicará, pero no da pistas
// Hazlo sencillo, simple, tal y como indica el enunciado. No te compliques
// Asegurate de haber seguido bien todas las instrucciones.

// PISTAS:
// Tu código va a interactuar con el formulario declarado más abajo
// Ten en cuenta el código HTML del formulario
// No puedes modificar el nombre de las funciones, pero puedes añadir otras si lo crees necesario.
// La función 'calculateIntervalDays' debe poder calcular días anteriores (resultado positivo) y posteriores (resultado negativo) a la fecha indicada por defecto en el parámetro toDate
// El callback del evento de perder el foco del input "Nombre" es handleInputName
// El callback del evento de perder el foco del input "Fecha" es handleInputDate.
// Averigua cómo hacer referencia a los inputs. Las devtools son tus amigas


function calculateIntervalDays() {
    let dayYearInpt = dayOfYear(event.target.valueAsDate);
    dayYearRef = dayOfYear(new Date(2023, 2, 20));
    let diffDays = dayYearInpt - dayYearRef;
    return diffDays;
}

function removeVocalsAndSpaces(wordArr) {
    const vowels = ["a", "e", "i", "o", "u"];
    let newWord = "";
    for(let letter of wordArr) {
        if (!vowels.includes(letter.toLowerCase())) {
            newWord += letter;
        }
    }
    console.log(newWord);
    return newWord;
}

const dayOfYear = (date) => 
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 
                (1000 * 60 * 60 * 24));

function handleInputName() {
    const wordArr = [...inptName$$.value];
    const newWord = removeVocalsAndSpaces(wordArr);
    outputName$$.value = newWord;
    // console.log(outputName$$.value);
}

function handleInputDate() {
    console.log(event.target.valueAsDate);
    const diffDays = calculateIntervalDays();
    outputDays$$.value = diffDays;
}



let inptName$$ = document.querySelector(".name");
let outputName$$ = document.querySelector("#nameWithoutVocals");
let inptDate$$ = document.querySelector(".date");
let outputDays$$ = document.querySelector("#days");


//aqui iran los eventos
inptName$$.addEventListener("blur", () => {handleInputName()});

inptDate$$.addEventListener("blur", () => {handleInputDate()});
