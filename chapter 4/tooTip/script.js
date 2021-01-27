document.addEventListener("mouseover", addAndRemoveSpan);
function log(event) {
  console.log(event.target.tagName);
}

function addAndRemoveSpan(event) {
  if (event.target.tagName === "BUTTON") {
    let buttonE = event.target;
    let tooltipE = document.createElement("span");
    tooltipE.classList.add("tooltip");
    tooltipE.innerHTML = buttonE.dataset.tooltip;
    buttonE.appendChild(tooltipE);
    /// detetmen the location
    const locButton = buttonE.getBoundingClientRect();
    const widthTollTip = tooltipE.offsetHeight;
    console.log(locButton,widthTollTip)
    // tooltipE.style.transform = "translate(0px, 50%)";
    if (locButton.top - widthTollTip < 0) {
      tooltipE.style.transform = "translate(0px, 50%)";
    }
    document.onmouseout = () => {
      if (tooltipE) tooltipE.remove();
    };
  }
}

console.log(document.querySelector("button").getBoundingClientRect());
console.log(document.querySelector("button").offsetHeight);
