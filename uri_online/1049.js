const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const classes = input.split('\n');
let result;

if (classes[0] === "vertebrado") {
    if (classes[1] === "ave") {
        if (classes[2] === "carnivoro") {
            result = "aguia"
        } else if (classes[2] === "onivoro") {
            result = "pomba"
        }
    } else if (classes[1] === "mamifero") {
        if (classes[2] === "onivoro") {
            result = "homem"
        } else if (classes[2] === "herbivoro") {
            result = "vaca"
        }
    }
} else if (classes[0] === "invertebrado") {
    if (classes[1] === "inseto") {
        if (classes[2] === "hematofago") {
            result = "pulga"
        } else if (classes[2] === "herbivoro") {
            result = "lagarta"
        }
    } else if (classes[1] === "anelideo") {
        if (classes[2] === "hematofago") {
            result = "sanguessuga"
        } else if (classes[2] === "onivoro") {
            result = "minhoca"
        }
    }
}
console.log(result)