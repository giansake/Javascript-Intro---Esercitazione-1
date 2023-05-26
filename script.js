let changeColorCard = document.getElementById("mainCard");
let hereIsTheMagic = document.getElementById("btn");

function magic() {
  if ((changeColorCard.className = "card-orange")) {
    changeColorCard.className = "card-orange";
  } else {
    changeColorCard.className = "card-blue";
  }
}
