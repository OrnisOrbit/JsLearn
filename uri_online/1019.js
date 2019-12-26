const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let second = parseFloat(lines[0]);
let hours = Math.trunc(second / 3600);
let minutes = Math.trunc(second % 3600 / 60);
let seconds = second % 3600 % 60;
console.log(`${hours}:${minutes}:${seconds}`);