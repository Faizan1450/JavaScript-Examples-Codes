let languages = ["C", "C++", "Java", "Python", "JavaScript"];

console.log(languages.unshift("PHP", "Kotlin"));    // changes the original array
// Expected output: 7

console.log(languages);
// Expected output: ['PHP', 'Kotlin', 'C', 'C++', 'Java', 'Python', 'JavaScript']