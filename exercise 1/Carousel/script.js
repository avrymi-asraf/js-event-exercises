const ulEl = document.querySelector("ul");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");
const widthImag = document.querySelector("img").getBoundingClientRect()
.width;
const widthWindow = document.querySelector(".window").getBoundingClientRect()
.width;
const widthUl = ulEl.getBoundingClientRect().width - widthWindow + 100;


let locationUl = 0;
leftEl.addEventListener("click", () => moveUl("l"));
rightEl.addEventListener("click", () => moveUl("r"));
// ulEl.style.marginLeft = "-200px";

function moveUl(direction) {
  switch (direction) {
    case "r":
      if (locationUl + widthWindow < 0) {
        locationUl += widthWindow;
      } else if (locationUl + widthWindow >= 0) {
        locationUl = 0;
      }
      break;
    case "l":
        if (locationUl - widthWindow > -widthUl) {
        locationUl -= widthWindow;
      } else if (locationUl - widthWindow <= -widthUl) {
        locationUl = -widthUl;
      }
      break;
  }
  ulEl.style.marginLeft = locationUl + "px";
}
