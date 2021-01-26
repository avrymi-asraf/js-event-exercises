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
    document.onmouseout = () => {
      if (tooltipE) tooltipE.remove();
    };
  }
}


console.log(document.querySelector('button').getBoundingClientRect())