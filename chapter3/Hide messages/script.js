const containerEl = document.querySelector("#container");
containerEl.addEventListener('click', removeDiv);


function removeDiv(event) {
    event.target.parentElement.remove();
}