/*
sources & inspiration
- will sentance - hard part of functional javascript - 
*/

// passing in a function as argument
function copyArrayAndManipulate(array, fn) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(fn(array[i]));
    }
    return output;
}

function mulitplyByTwo(x) {
    return x * 2;
}

function generateUserName(x) {
    return `User${x}`;
}

const result = copyArrayAndManipulate([1, 2, 3], mulitplyByTwo);
const result2 = copyArrayAndManipulate([1, 2, 3], generateUserName);

console.log('result', result);
console.log('result2', result2);

function mapReduce(array, fn) {
    return array.reduce((acc, curr, index) => {
        acc[index] = fn(curr);
        return acc;
    }, []);
}

console.log('mapReduce', mapReduce([1, 2, 3], mulitplyByTwo));
