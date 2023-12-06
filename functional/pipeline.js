/* sources & inspiration: 
- https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming
*/

console.log(
    pipeLineString('hello', [addLetterP, removeFirstLetter, capitalize])
);

console.log(
    pipeLineEach(
        ['hello', 'world'],
        [capitalize, addLetterP, removeFirstLetter]
    )
);

function pipeLineString(data, fns) {
    return fns.reduce((acc, curr) => {
        return curr(acc);
    }, data);
}

function pipeLineEach(data, fns) {
    return data.map((x) => {
        return fns.reduce((acc, curr) => {
            return curr(acc);
        }, x);
    });
}

function capitalize(data) {
    return data.toUpperCase();
}

function addLetterP(string) {
    return string + 'p';
}

function removeFirstLetter(string) {
    return string.slice(1);
}
