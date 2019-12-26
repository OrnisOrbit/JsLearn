const input = require('fs').readFileSync('/dev/stdin','utf8');
const lines = input.split('\n');
let a = parseFloat(lines[0])*2;
let b = parseFloat(lines[1])*3;
let c = parseFloat(lines[1])*5;
let d = ((a+b+c) / 10).toFixed(1);
console.log(`MEDIA = ${d}`);
