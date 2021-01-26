const tableEl = document.querySelector("#grid");
let rowsArrary = Array.from(tableEl.rows);
rowsArrary = rowsArrary.slice(1);

function sortBy(arr, key, direction) {
  //key: column, 0/1
  let flog = true;
  switch (direction) {
    case "up":
      {
        while (flog) {
          flog = false;
          for (let trIndex = 0; trIndex < arr.length - 1; trIndex++) {
            let a = arr[trIndex].children[key].innerText;
            let b = arr[trIndex + 1].children[key].innerText;
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
    case "down": {
      while (flog) {
        flog = false;
        for (let trIndex in arr) {
          let a = arr[trIndex].children[key].innerText;
          let b = arr[trIndex + 1].children[key].innerText;
          if (a > b) {
            flog = true;
            [a, b] = [b, a];
          }
        }
      }
      break;
    }
  }
}

for (i of rowsArrary) {
  console.log(i.textContent, i);
}
console.log(
  "---------------------------------------------------------------------------"
);
sortBy(rowsArrary, 0, "up");
for (i of rowsArrary) {
  console.log(i.textContent, i);
}
