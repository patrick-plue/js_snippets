//builder pattern

//simple implementation

class BikeBuilder {
    #color;
    #frame;
    #tyreSize;
    constructor(id) {
        this.id = id;
        this.#color = null;
        this.#frame = null;
        this.#tyreSize = null;
    }

    get color() {
        return this.#color;
    }

    get frame() {
        return this.#frame;
    }

    get tyreSize() {
        return this.#tyreSize;
    }

    setColor(color) {
        this.#color = color;
        return this;
    }

    setFrame(frame) {
        this.#frame = frame;
        return this;
    }

    setTyreSize(tyreSize) {
        this.#tyreSize = tyreSize;
        return this;
    }

    build() {
        if (!this.id) {
            throw new Error('Id missing');
        }
        return this;
    }

    print() {
        console.log(
            `My Bike ${this.id}: color: ${this.#color}, frame: ${
                this.#frame
            }, tyreSize: ${this.#tyreSize}`
        );
    }
}

const myBike = new BikeBuilder(1)
    .setColor('red')
    .setFrame('carbon')
    .setTyreSize('33mm')
    .build();

myBike.print();
