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
        // acc[index] = fn(curr);
        acc.push(fn(curr));
        return acc;
    }, []);
}

/*
reduce - think of it as reducing the accumulator (first thing) with each value at a time (second thing)
1st step: reduce array ([]) with 1 to [1]
2nd step: reduce array ([1]) with 2 to [1,2]
3rd step: reduce array([1,2]) with 3 to [1,2,3]
*/
console.log('mapReduce', mapReduce([1, 2, 3], mulitplyByTwo));

function reduce(array, howToCombine, buildingUp) {
    for (let i = 0; i < array.length; i++) {
        buildingUp = howToCombine(buildingUp, array[i]);
    }
    return buildingUp;
}

console.log(reduce([1, 2, 3], (a, b) => a + b, 0));

function countStringElements(array) {
    return array.reduce((acc, curr) => {
        // check if current accumulator object has this property (element in array) in it. if: add 1 to the current value otherwise add the property
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
    }, {});
}

console.log(
    countStringElements(['street', 'street', 'dog', 'fish', 'orca', 'orca'])
);

function filterReduce(array, fn) {
    return array.reduce((acc, curr) => {
        if (fn(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
}

console.log(filterReduce([1, 2, 3, 4, 5], (a) => a > 3));
