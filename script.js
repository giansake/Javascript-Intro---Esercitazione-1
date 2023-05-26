function handleClick (HTMLElement) {
    if (HTMLElement.innerText === "Here is the magic!") {
        HTMLElement.innerText = "Back to normal"; 
        HTMLElement.classList.remove ("active");
    } else {
        HTMLElement.innerText = "Here is the magic!";
        HTMLElement.classList.add("active");
    }
}

function handleClick (HTMLElement) {
    if ( document.getElementById("switch-card").classList.contains('card') )
    document.getElementById("switch-card").classList.toggle('magic-card');
    }
