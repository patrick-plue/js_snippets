//simple composition

function multiplyBy2(a) {
    return a * 2;
}

function add3(a) {
    return a + 3;
}

function divideBy5(a) {
    return a / 5;
}

console.log(divideBy5(add3(multiplyBy2(4))));
