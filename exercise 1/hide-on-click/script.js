function hideText(event) {
    document.querySelector('p').innerHTML = '';
}

const button = document.querySelector('button');
button.addEventListener('click', hideText)