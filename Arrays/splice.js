let arr = [83, 49, 25, 67, 34, 86, 25];

arr.splice(2, 3, "a", "b", "c");

console.log(arr);
// Expected output: [83, 49, 'a', 'b', 'c', 86, 25]
