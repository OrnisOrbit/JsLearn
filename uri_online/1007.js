const input = require('fs').readFileSync('/dev/stdin','utf8');
const lines = input.split('\n');
let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);
let d = parseFloat(lines[3]);
let e = ((a*b)-(c*d));
console.log(`MEDIA = ${e}`);
