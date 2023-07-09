const numbers = [8, 3, 49, 25, 4, 8, 12];

// Condition 1
const cond1 = currentValue => currentValue < 50;
console.log(numbers.every(cond1));
// Expected output: true

// Condition 2
const cond2 = currentValue => currentValue < 30;
console.log(numbers.every(cond2));
// Expected output: false