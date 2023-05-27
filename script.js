function toggleElementsClass() {
  document.getElementById("switch-card").classList.toggle("magic-card");
  document.getElementById("switch-card").classList.toggle("card");
}

function updateButton(element, active, text) {
  element.innerText = text;
  if (active) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}

function handleClick(button) {
  if (document.getElementById("switch-card").classList.contains("card")) {
    toggleElementsClass();
    updateButton(button, true, "Back to normal");
  } else {
    toggleElementsClass();
    updateButton(button, false, "Here is the magic!");
  }
}
