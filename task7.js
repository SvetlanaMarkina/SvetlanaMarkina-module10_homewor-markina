let arr = [1, 2, 3, 4, 5, null, 8, 10, 15, 0];


let numbercount = 0;
let evencount = 0;
let zerocount = 0;
let oddcount = 0;

for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === 'number' || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
        	zerocount += 1;
        } else if (arr[i]%2 === 0) {
        	evencount +=1;
        } else {
        	oddcount +=1;
        }
	}
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
