function bubbleSort(arr) {

  var swapped = true;

  if (arr.length === 1) return arr;


  function comparison(a, b) {
    return (a < b) ? true : false;
  }

  function swap(arr, a, b) {
    var hold = arr[b];
    arr[b] = arr[a];
    arr[a] = hold;
  }

  while (swapped) {
    swapped = false;
    for(var x =0; x < arr.length - 1; x++) {
      if (!comparison(arr[x], arr[x+1])) {
        swap(arr, x, x+1);
        swapped = true;
      }
    }
  }


  return arr;
}


// function bubbleSort(list of sortable items ) 
//
//   while swapped is true
//     swapped = false
//     for each i in 0 to length(A) - 2 inclusive do:
//       if (comaprison()) then
//         swap( A[i], A[i+1] )
//         swapped := true
//       end if
//     end for
//   end while
//
// end function




