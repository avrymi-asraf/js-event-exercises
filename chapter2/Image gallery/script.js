const thumbsEl = document.querySelector('#thumbs');
const bigPhoto = document.querySelector("#largeImg");
thumbsEl.addEventListener('click', togalery);
function togalery(event) {
  event.preventDefault();
  bigPhoto.src = event.target.parentElement.href;
}





