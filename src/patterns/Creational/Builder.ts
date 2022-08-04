interface Builder {
    reset(): void;
    stepA(): void;
    stepB(): void;
    stepC(): void;
}

class Product1 {
    public redText: boolean = false;
    public boldText: boolean = false;
    public goldBack: boolean = false;

    render(msg: string) {
        console.log(`%c${msg}`, `${this.goldBack ? "background: gold;" : ""}${this.redText ? "color: red;" : ""}${this.boldText ? "font-weight: bold;" : ""}`);
    }
}

class Product2 {
    public sayHello: boolean = false;
    public semicolon: boolean = false;
    public sayBye: boolean = false;

    render(msg: string) {
        alert(`${this.sayHello ? "Hello !" : ""} ${msg} ${this.sayBye ? ", Bye!" : ""}${this.semicolon ? ";" : ""}`);
    }
}

class Builder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    reset() {
        this.product = new Product1();
    }

    stepA() {
        this.product.redText = true;
    }

    stepB() {
        this.product.goldBack = true;
    }

    stepC() {
        this.product.boldText = true;
    }

    result() {
        return this.product;
    }
}

class Builder2 implements Builder {
    private product: Product2;

    constructor() {
        this.reset();
    }

    reset() {
        this.product = new Product2();
    }

    stepA() {
        this.product.sayHello = true;
    }

    stepB() {
        this.product.sayBye = true;
    }

    stepC() {
        this.product.semicolon = true;
    }

    result() {
        return this.product;
    }
}

class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    change(builder: Builder) {
        this.builder = builder;
    }

    make(type: "simple" | "complex" | "complete") {
        this.builder.reset();

        switch (type) {
            case "simple":
                this.builder.stepA();
                break;

            case "complex":
                this.builder.stepA();
                this.builder.stepB();
                break;

            case "complete":
                this.builder.stepA();
                this.builder.stepB();
                this.builder.stepC();
                break;
        }
    }
}

class Client {
    private printer: Builder1;
    private alerter: Builder2;
    private director: Director;

    constructor() {
        this.printer = new Builder1();
        this.alerter = new Builder2();

        this.director = new Director(this.printer);
    }

    print(type: "simple" | "complex" | "complete", msg: string) {
        this.director.change(this.printer);

        this.director.make(type);

        this.printer.result().render(msg);
    }

    alert(type: "simple" | "complex" | "complete", msg: string) {
        this.director.change(this.alerter);

        this.director.make(type);

        this.alerter.result().render(msg);
    }
}

export default Client;