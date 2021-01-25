const paneEl = document.querySelectorAll('.pane');

for (let i of paneEl) {
    const buttonEl = document.createElement("button");
    buttonEl.addEventListener('click', () => buttonEl.parentElement.remove());
    buttonEl.textContent = "[x]";
    buttonEl.classList.add("remove-button");
    buttonEl.style.alignSelf = "flex-end";
  i.prepend(buttonEl);  
}


