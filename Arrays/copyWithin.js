let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.copyWithin(2, 0, 3);
console.log(fruits);
// Output: ["apple", "banana", "apple", "banana", "cherry"]

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.copyWithin(3, 0, 5);
console.log(numbers);
// Output: [0, 1, 2, 0, 1, 2, 3, 4, 8, 9]
