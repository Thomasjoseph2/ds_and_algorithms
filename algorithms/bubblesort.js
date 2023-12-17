const array = [-6, 20, 8, 2, 4];

function bubbleSort(arr) {
    let swaped=false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swaped=true;
      }
    }
    if(!swaped) break;
  }
  return arr;
}

console.log(bubbleSort(array));

//n^2 


