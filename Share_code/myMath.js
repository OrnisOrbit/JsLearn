function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function abs(num) {
    if (num < 0) {
        num *= -1;
    }
    return num;
}
/*
 *Генерирует Случайные числа от мин до макс
 */
function random(min, max) {
    return Math.trunc(min + Math.random() * (max - min + 1));
}