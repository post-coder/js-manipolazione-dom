
const titleElement = document.querySelector("h1");

console.log(titleElement);

const newSize = prompt("Di che dimensione vuoi il titolo?");

titleElement.style.fontSize = newSize;

titleElement.style.backgroundColor = prompt("Quale colore di sfondo?");
titleElement.style.color = "white";
titleElement.style.padding = "12px";
