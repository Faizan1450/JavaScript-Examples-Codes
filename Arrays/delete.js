let languages = ["C", "C++", "Java", "Python", "JavaScript"];

delete languages[1];    // leaves undefined hole in the array

console.log(languages);
// Expected output: ['C', empty, 'Java', 'Python', 'JavaScript']