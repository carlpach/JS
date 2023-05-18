function isPalindromo(text) {
    let isPalindromo = false;
    arrText = text.split('');

    for (let i = 0; i < arrText.length; i++) {
        if (arrText[i] == arrText[arrText.length-1-i]) {
            isPalindromo = true;
        }
        else {
            isPalindromo = false;
            return `the word ${text} isn't palindromo`
        }
    }
    return `the word ${text} is palindromo`

}


console.log(isPalindromo("carlos"));
console.log(isPalindromo("abba"));
console.log(isPalindromo("carttrac"));