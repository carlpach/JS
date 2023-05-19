
let input$$ = document.querySelector("input");

function handleFocus() {
    console.log(input$$.value);
}

input$$.addEventListener("focus", handleFocus);