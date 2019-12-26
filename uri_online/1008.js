const input = require('fs').readFileSync('/dev/stdin','utf8');
const lines = input.split('\n');
let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseFloat(lines[2]);
let d = (b*c);
console.log(`NUMBER = ${a}`);
console.log(`SALARY = U $ ${d}`);