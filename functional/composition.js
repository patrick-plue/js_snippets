//simple composition - quite unreadable

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

// with reduce
console.log(
    [multiplyBy2, add3, divideBy5].reduce((acc, fn) => {
        return fn(acc);
    }, 11)
);

function pipe(fnArr, data) {
    return fnArr.reduce((acc, fn) => {
        return fn(acc);
    }, data);
}

console.log(pipe([multiplyBy2, add3, divideBy5], 11));
