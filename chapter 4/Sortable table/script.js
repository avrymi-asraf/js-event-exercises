const tableEl = document.querySelector("#grid");
const tbodyEl = document.querySelector("tbody");
let rowsArrary = Array.from(tableEl.rows);
rowsArrary = rowsArrary.slice(1); // remove the head
tableEl.addEventListener("click", sotrByClick);
let toggleAgeColumn = false; //toggle for order the sort
let toggleNameColumn = false;

function sotrByClick(event) {
  if (event.target === "th") {
    switch (event.target.textContent) {
      case "Name":
        sotrByClick(rowsArrary, 1, toggleNameColumn);
        toggleNameColumn = !toggleNameColumn;
    }
  }
  console.log(event.target.textContent);
}

function sortBy(arr, key, direction) {
  //key: column, 0/1
  let flog = true;
  switch (direction) {
    case true:
      {
        while (flog) {
          flog = false;
          for (let trIndex = 0; trIndex < arr.length - 1; trIndex++) {
            let a = arr[trIndex].children[key].innerText;
            let b = arr[trIndex + 1].children[key].innerText;
            if (Number(a)) a = Number(a);
            if (Number(b)) b = Number(b);
            if (a < b) {
              flog = true;
              [arr[trIndex], arr[trIndex + 1]] = [
                arr[trIndex + 1],
                arr[trIndex],
              ];
            }
          }
        }
      }
      break;
    ////
    ////
    ////
    case false: {
      while (flog) {
        flog = false;
        for (let trIndex = 0; trIndex < arr.length - 1; trIndex++) {
          let a = arr[trIndex].children[key].innerText;
          let b = arr[trIndex + 1].children[key].innerText;
          if (Number(a)) a = Number(a);
          if (Number(b)) b = Number(b);
          if (a > b) {
            flog = true;
            [arr[trIndex], arr[trIndex + 1]] = [arr[trIndex + 1], arr[trIndex]];
          }
        }
      }
      break;
    }
  }
}

function pushToHtml() {
  for (let row = 0; row < tableEl.length; row++) {
    tbodyEl.removeChild(tbodyEl.childNodes[0]);
    //   // console.log()
    // }
    // console.log(tableEl);
  }
}

pushToHtml();
