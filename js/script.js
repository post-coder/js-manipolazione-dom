
const titleElement = document.querySelector("h1");

const buttonElement = document.querySelector("#pulsante");

console.log(buttonElement)


// il pulsante è collegato ad una specie di lampadina
// se la lampadina è spenta e premiamo il pulsante, si accende e viceversa

// la lampadina è accesa
let lampadinaAccesa = true;



buttonElement.addEventListener('mouseleave',
    function() {

        // se la lampada è spenta, accendila
        // viceversa

        if (lampadinaAccesa) {

            lampadinaAccesa = false;

            // cambio il testo del titolo
            titleElement.innerText = "Lampadina spenta"; 
            titleElement.className = "spenta";

            console.log(lampadinaAccesa) 


        } else {

            lampadinaAccesa = true;

            titleElement.innerText = "Lampadina accesa";
            titleElement.className = "accesa";

            console.log(lampadinaAccesa);
        }

    }
)