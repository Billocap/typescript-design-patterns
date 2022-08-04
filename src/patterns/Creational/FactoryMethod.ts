interface Product {
    do(): void;
}

class Product1 implements Product {
    do() {
        console.log("Hello World");
    }
}

class Product2 implements Product {
    do() {
        alert("Hello World");
    }
}

abstract class Creator {
    abstract createProduct(): Product;

    do() {
        const prod: Product = this.createProduct();

        prod.do();
    }
}

class Factory1 extends Creator {
    createProduct() {
        return new Product1();
    }
}

class Factory2 extends Creator {
    createProduct() {
        return new Product2();
    }
}

class Client {
    private factory: Creator;

    constructor(type: 1 | 2) {
        if (type == 1) {
            this.factory = new Factory1();
        } else {
            this.factory = new Factory2();
        }
    }

    do() {
        this.factory.do();
    }
}

export default Client;