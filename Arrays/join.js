let languages = ["C", "C++", "Java", "Python", "JavaScript"];

console.log(languages.join());
// Expected output: C,C++,Java,Python,JavaScript

console.log(languages.join(""));
// Expected output: CC++JavaPythonJavaScript

console.log(languages.join("-"));
// Expected output: C-C++-Java-Python-JavaScript