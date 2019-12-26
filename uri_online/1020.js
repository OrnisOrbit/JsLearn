const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
let days = parseFloat(lines[0]);
let years = Math.trunc(days / 365);
let month = Math.trunc(days % 365 / 30);
let day = days % 365 % 30;
console.log(`${years} ano(s)`);
console.log(`${month} mes(es)`);
console.log(`${day} dia(s)`);