class Abstraction {
    protected i: Implementation;

    constructor(i: Implementation) {
        this.i = i;
    }

    feature1() {
        this.i.method1();
    }

    feature2() {
        this.i.method2();
        this.i.method3();
    }
}

class Refined extends Abstraction {
    feature3() {
        this.i.method1();
        this.i.method3();
    }
}

interface Implementation {
    method1(): void;
    method2(): void;
    method3(): void;
}

class Implementation1 implements Implementation {
    method1() {};
    method2() {};
    method3() {};
}

class Implementation2 implements Implementation {
    method1() {};
    method2() {};
    method3() {};
}

class Bridged {
    private bridge: Refined;

    constructor(i: 1 | 2) {
        if (i == 1) {
            this.bridge = new Refined(new Implementation1());
        } else {
            this.bridge = new Refined(new Implementation2());
        }
    }
}