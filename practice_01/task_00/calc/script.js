let a = prompt("insert value 1");
let b = prompt("insert value 2");
let value1 = parseInt(a);
let value2 = parseInt(b);
let opperators = prompt("insert opperators");

function calc() {

    if (opperators == "+") {
        alert(value1 + value2);
    } else if (opperators == "-") {
        alert(value1 - value2);
    } else if (opperators == "*") {
        alert(value1 * value2);
    } else if (opperators == "/") {
        alert(value1 / value2);
    } else if (opperators == "**") {
        alert(value1 ** value2);
    }else if( opperators == "%") {
        alert(value1%value2);
    }else {
        alert("Opperators undefiened");
    }
}
calc();