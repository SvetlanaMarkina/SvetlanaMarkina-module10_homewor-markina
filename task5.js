const arr = ['string', 45, false, null];
console.log(arr.length);
let result = arr.map(function(item, index, array) {
   console.log(item) 
});