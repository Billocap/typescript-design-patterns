interface Prototype {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype {
    private field: string;

    constructor(prototype: ConcretePrototype | string) {
        if (typeof prototype != "string") {
            this.field = prototype.field;
        } else {
            this.field = prototype;
        }
    }

    clone() {
        return new ConcretePrototype(this);
    }
}

class SubclassPrototype extends ConcretePrototype implements Prototype {
    private field1: string;

    constructor(prototype: SubclassPrototype | string) {
        super(prototype);

        if (typeof prototype != "string") {
            this.field1 = prototype.field1;
        } else {
            this.field1 = prototype;
        }
    }

    clone() {
        return new SubclassPrototype(this);
    }
}

export {ConcretePrototype, SubclassPrototype};