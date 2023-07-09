const ages = [3, 7, 12, 18, 20];

// Condition 1
let checkAdult = (age) => age > 18;
console.log(ages.some(checkAdult));
// Expected output: true

// Condition 2
checkAdult = (age) => age > 21;
console.log(ages.some(checkAdult));
// Expected output: false