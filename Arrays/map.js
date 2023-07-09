const numbers = [10, 20, 30, 40, 50];

let myNumbers = numbers.map((num) => num * 2);
console.log(myNumbers);
// Output: [20, 40, 60, 80, 100]

myNumbers = numbers.map((num) => num / 10);
console.log(myNumbers);
// Output: [1, 2, 3, 4, 5]