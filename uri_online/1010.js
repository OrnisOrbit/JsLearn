const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');
const line1 = lines[0];
const line2 = lines[1]
const line1part = line1.split(' ');
const line2part = line2.split(' ');
const product1Code = parseInt(line1part[0]);
const product1Count = parseInt(line1part[1]);
const product1Price = parseFloat(line1part[2]);
const product2Code = parseInt(line2part[0]);
const product2Count = parseInt(line2part[1]);
const product2Price = parseFloat(line2part[2]);
const summ = (product1Count * product1Price) + (product2Count * product2Price);
console.log(`VALOR A PAGAR: R$ ${summ.toFixed(2)}`);