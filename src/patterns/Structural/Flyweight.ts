class Flyweight {
    private repeatingState: any; //Intrinsic State;

    constructor(repeatingState) {
        this.repeatingState = repeatingState;
    }

    operation(uniqueState) {}  //Handles Extrinsic States;
}

class FlyweightFactory {
    private cache: Flyweight[];

    getFlyweight(repeatingState) {
        if (!this.cache.includes(repeatingState)) {
            this.cache.push(new Flyweight(repeatingState));
        }

        return this.cache[repeatingState];
    }
}

class Context {
    private uniqueState: any; // Extrinsic State;
    private flyweight: Flyweight;

    constructor(repeatingState, uniqueState) {
        this.uniqueState = uniqueState;
        this.flyweight = new Flyweight(repeatingState);
    }

    operation() {
        this.flyweight.operation(this.uniqueState);
    }
}