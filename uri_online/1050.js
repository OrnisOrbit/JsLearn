// const code = parseInt( require("fs").readFileSync("/dev/stdin", "utf8"));

// let message;
// if (code === 61) {
//     message = "Brasilia";
// } else if (code === 71) {
//     message = "Salvador";
// } else if (code === 11) {
//     message = "Sao Paulo";
// } else if (code === 21) {
//     message = "Rio de Janeiro";
// } else if (code === 32) {
//     message = "Juiz de Fora";
// } else if (code === 19) {
//     message = "Campinas";
// } else if (code === 27) {
//     message = "Vitoria";
// } else if (code === 31) {
//     message = "Belo Horizonte";
// } else {
//     message = "DDD nao cadastrado";
// }
const code = require("fs").readFileSync("/dev/stdin", "utf8").trimRight();
const codes = {
    "61": "Brasilia",
    "71": "Salvador",
    "11": "Sao Paulo",
    "21": "Rio de Janeiro",
    "32": "Juiz de Fora",
    "19": "Campinas",
    "27": "Vitoria",
    "31": "Belo Horizonte"
};
let message = codes[code] || "DDD nao cadastrado";

console.log(message);