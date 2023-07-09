// Example 1
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduceRight((total, num) => total + num, 0);
console.log(sum); // Output: 15

// Example 2
numbers = [175, 50, 25];
let x = numbers.reduceRight((total, num) => total - num);
console.log(x); // Output: -200