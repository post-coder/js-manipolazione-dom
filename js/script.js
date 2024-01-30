
// salvataggio degli elementi del DOM
const titleElement = document.querySelector("h1");
const buttonElement = document.querySelector("#pulsante");
const inputElement = document.querySelector("#colorInput");

console.log(buttonElement)

// memorizziamo il campo di input


buttonElement.addEventListener('click',
    function() {

        // al click il colore del titolo sarà uguale al valore del campo di input

        titleElement.style.color = inputElement.value;

    }
)


// ________________________________________

const buttonSaluteElement = document.querySelector("#sezioneSaluto button");

const inputSaluteElement = document.querySelector("#sezioneSaluto input");


buttonSaluteElement.addEventListener("wheel", 
    function() {
        document.querySelector("#sezioneSaluto h2").innerHTML = "Ciao " + inputSaluteElement.value;
    }
)
