const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let r = parseFloat(lines[0]);
const pi = 3.14159;
let v = 4 / 3 * pi * (r * r * r);
console.log(`VOLUME = ${v.toFixed(3)}`);