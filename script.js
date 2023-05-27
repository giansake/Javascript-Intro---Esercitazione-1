let changingCard = document.getElementById("mainCard");

function magic() {
  if (changingCard.classList.contains("card-orange")) {
    changingCard.classList.remove("card-orange");
    changingCard.classList.add("card-blue");
  } else {
    changingCard.classList.remove("card-blue");
    changingCard.classList.add("card-orange");
  }
}
