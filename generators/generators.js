/*soures & inspiration: 
- talks by anjana vakil (- power of js generators)
*/

function* genFunction() {
    yield 'hello world';
}

let genObject = genFunction();
console.log(genObject.next());
console.log(genObject.next());

function* loggerator() {
    console.log('running...');
    yield 'paused';
    console.log('running again...');
    return 'stopped';
}

let logger = loggerator();
logger.next();
logger.next();

function* abcs() {
    yield 'a';
    yield 'b';
    yield 'c';
}

for (let letter of abcs()) {
    console.log(letter.toUpperCase());
}

function* createGenerator() {
    yield 'hello world';
    yield 'go away!';
    yield 'bye!';
}

const generator = createGenerator();

for (string of generator) {
    console.log(string);
}

const symbolValueCollection = {
    values: [1, 2, 3, 4],
    symbols: ['§', '&', '=', '/'],
    [Symbol.iterator]: function* () {
        for (sym of this.symbols) {
            for (val of this.values) {
                yield val + sym;
            }
        }
    },
};

console.log(...symbolValueCollection);
