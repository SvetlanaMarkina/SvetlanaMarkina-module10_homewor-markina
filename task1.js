let x = prompt('Please enter any value:');
x = +x;
alert(typeof x);
if (x%2 === 0) {
	console.log('чётное')
} else if (x%1 === 0) {
	console.log('нечётное')
} else {
	console.log('Упс, кажется, вы ошиблись')
}

let nanValue = NaN;

if (nanValue !== nanValue) {
	console.log('I\'s NaN') 
} else {
	console.log('I\'s Not NaN')
}