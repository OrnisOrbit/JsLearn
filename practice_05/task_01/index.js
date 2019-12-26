const number = parseFloat(prompt("Введите вещественное число"));
let result = number;
if ( ? < 0) {
    result = -result;
}
document.querySelector("#message").innerHTML = `|${number}| = ${result}`;