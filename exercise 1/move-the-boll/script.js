const bollEl = document.querySelector(".boll");
const fieldEL = document.querySelector(".field");
const widthBoll = bollEl.getBoundingClientRect().width;
const widthField = fieldEL.getBoundingClientRect().width;
const highBoll = bollEl.getBoundingClientRect().height;
const highField = fieldEL.getBoundingClientRect().height;
console.log(widthBoll, highBoll);
console.log(widthField, highField);

function locatoinInDiv(event) {
  locationBoll(event.clientX, event.clientY);
  //   bollEl.style.left = event.clientX + "px";
  //   bollEl.style.top = event.clientY + "px";
}

fieldEL.addEventListener("click", locatoinInDiv);

function locationBoll(x, y) {
  console.log(x, y);
  if (x < widthField - widthBoll / 2 && x > widthBoll / 2) {
    bollEl.style.left = x - widthBoll / 2 + "px";
  } else if (x > widthField - widthBoll / 2) {
    bollEl.style.left = widthField - widthBoll + "px";
  } else if (x < widthField - widthBoll / 2) {
    bollEl.style.left = 0 + "px";
  }

  if (y < highField - highBoll / 2 && y > highBoll / 2) {
    bollEl.style.top = y - highBoll / 2 + "px";
  } else if (y > highField - highBoll / 2) {
    bollEl.style.top = highField - highBoll + "px";
  } else if (y < highBoll / 2) {
    bollEl.style.top = 0 + "px";
  }
}
