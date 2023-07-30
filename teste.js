const fs = require('fs');

const text = fs.readFileSync('./src/answers/about.txt', 'utf-8');

console.log(text)