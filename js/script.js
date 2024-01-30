const hamburgerMenuElement = document.querySelector("#hamburger-button");
const menuElement = document.querySelector("#side-menu");

// al click del pulsante
// il menu ha la classe active

// teniamo traccia dell'apertura del menu laterale in una variabile
let isMenuOpen = false


hamburgerMenuElement.addEventListener("click",
    function() {

        if(isMenuOpen) {
            menuElement.className = "";

            isMenuOpen = false;
        } else {
            menuElement.className = "active";

            isMenuOpen = true;
        }

    }
)