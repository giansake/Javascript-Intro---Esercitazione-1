let = document.getElementById(card);
let = document.getElementById(mrbean);

function toggleClass() {
  if (card.className === "card-setup orange") {
    card.className = "card-setup hide";
    mrbean.className = "";
  } else {
    card.className = "card-setup orange";
    mrbean.className = "hide";
  }
}
