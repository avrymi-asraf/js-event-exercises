const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', colorSelect);
ulEl.addEventListener("mousedown", (event) => event.preventDefault());



function colorSelect(event) {
    const liSelect  = event.target.closest('li');
    if (liSelect && event.ctrlKey || event.metaKey) {
        liSelect.classList.add('selected');
    } else if (liSelect) {
        removeColor();
        liSelect.classList.add('selected');
    }
}


function removeColor() {
    const listEl = ulEl.children;
    for (let li of listEl) {
        if (li.classList.contains('selected')) {
            li.classList.remove('selected');
        }
    }
}

