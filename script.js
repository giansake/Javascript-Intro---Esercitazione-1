let changeColorCard = document.getElementsByClassName("card");
let hereIsTheMagic = document.getElementById("btn");

function magic() {
  if ((changeColorCard.className = "card-orange")) {
    changeColorCard.className = "card-orange";
  } else {
    changeColorCard.className = "card-blue";
  }
}

// se la classe di card è card (lo è sempre) allora il colore del bottone sarà arancione
// se no sarà blu
