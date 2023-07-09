const languages = ["C", "C++", "Java", "Python"];

languages.fill("JavaScript");
console.log(languages);
// 'JavaScript', 'JavaScript', 'JavaScript', 'JavaScript']

languages.fill("JSX", 1, 3);
console.log(languages);
// 'JavaScript', 'JSX', 'JSX', 'JavaScript']