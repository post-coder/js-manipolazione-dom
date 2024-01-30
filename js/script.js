
const titleElement = document.querySelector("h1");

const buttonElement = document.querySelector("#pulsante");

console.log(buttonElement)

// ok, ora rimani in attesa di un evento, nello specifico il "click"
// "aggiungere un ascoltatore di eventi"
buttonElement.addEventListener("click", 
    function() {
        // tutto quello che c'è scritto dentro la function(),
        // verrà eseguito SOLO quando si verifica l'evento.
        // l'addEventListener NON BLOCCA L'ESECUZIONE DEL RESTO DEL CODICE

        console.log("click del pulsante");

        titleElement.style.color = "red";
        titleElement.innerText = "Titolo cambiato";

        document.querySelector("#likeNumber").innerText = Number(document.querySelector("#likeNumber").innerText) + 1;
    }
)

console.log("dopo l'event listener");
