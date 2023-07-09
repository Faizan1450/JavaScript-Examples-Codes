const numbers = [8, 3, 49, 25, 4, 8, 12];

// returns the index of first element that satisfies the condition
const found = numbers.findIndex((element) => element > 10);

console.log(found);
// Expected output: 2