let animals = new Map([
    ['crow', 'bird'],
    ['cat', 'beast'],
    ['keta', 'fish']
]);

animals.forEach((key) => {
    console.log(`${key} - x`);
});

animals.forEach((value) => {
    console.log(`${value} - y`);
});
