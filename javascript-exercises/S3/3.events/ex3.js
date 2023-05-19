

let input$$ = document.querySelector("input");

function handleInput() {
    console.log(input$$.value);
    
}

input$$.addEventListener("input", handleInput);