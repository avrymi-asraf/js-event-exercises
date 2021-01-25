const titleEl = document.querySelector('.title');
const listEl = document.querySelector('.list');
const arrowEl = document.querySelector('.arrow');


function displayList() {
    listEl.classList.toggle('open')
    arrowEl.classList.toggle('open')
    // listEl.style.display = ('block');
    // arrowEl.textContent = "▼";
}

titleEl.addEventListener('click', displayList);