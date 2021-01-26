const tree = document.querySelector('#tree');
tree.addEventListener('click', hiddenChildren);
function hiddenChildren(event) {
    
    for (let child of event.target.childNodes) {
        if (child.nodeName === 'UL') {
            child.classList.toggle("hidden");
        }
    }
}