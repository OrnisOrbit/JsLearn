const input = require('fs').readFileSync('/dev/stdin','utf8');
const lines = input.split('\n');
var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
console.log(`PROD = ${a * b}`);