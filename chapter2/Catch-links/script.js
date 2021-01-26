function askLink(event) {
    let href = event.target.getAttribute("href");
    let ask = confirm('Are you sure to leave?');
    if (!ask) {event.preventDefault()};
//    return askLink(href);
}
    

const contentEl = document.querySelector("#contents");
contentEl.addEventListener('click', askLink);