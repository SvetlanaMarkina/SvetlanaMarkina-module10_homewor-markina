

let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9]; 

function containsDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      return true
    }
  }
  return false
}