let changeColorCard = document.getElementsByClassName("card");
let hereIsTheMagic = document.getElementById("btn");

function magic() {
  if (changeColorCard.className === "card") {
    hereIsTheMagic.className = "card-orange";
  } else {
    hereIsTheMagic.className = "card-blue";
  }
}

// se la classe di card è card (lo è sempre) allora il colore del bottone sarà arancione
// se no sarà blu

// la condizione if dovrebbe essere "se il bottone non è ancora premuto" e non
// se la carta ha la classe card
//prima il bottone cambiava colore in arancione ora in blu...
