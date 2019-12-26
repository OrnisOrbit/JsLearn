//ввод данных  с STDIN (nodejs)
const input = require('fs').readFileSync('/dev/stdin','utf8');
// input тут строка "10\n2"
const lines = input.split('\n');
//lines  будет 2 строки 10, вторая 2
//TODO: обработка данных;
const a = parseInt(lines[0]); // "10"==> 10;
const b = parseInt(lines[1]); // "2" ==> 2;
const sum = a + b;
//вывод данных;
console.log(`X = ${sum}`);