function bubbleSort(arr) {

  if (arr.length === 1) return arr;

  function comparison(a, b) {
    return a < b ? true : false;
  }

  function swap(arr, a, b) {
    var hold = arr[b];
    arr[b] = arr[a];
    arr[a] = hold;
  }


	for(var x =0; x < arr.length; x = x+2) {
    debugger;
    if (!comparison(arr[x], arr[x+1])) {
      swap(arr, x, x+1);
    }
  }



  return arr;
}
