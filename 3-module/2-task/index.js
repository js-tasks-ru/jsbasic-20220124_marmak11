let arr = [5, 3, 8, 1]

function filterRange(arr, a, b) {
  let arr2= (arr.filter(item => item<=b && item>=a))
  return arr2
}

filterRange(arr,1,4)