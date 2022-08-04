// Element named this way to avoid name conflicts;
interface VisitorElement {
    accept(visitor: Visitor): void;
}

class ElementA implements VisitorElement {
    featureA() {}

    accept(visitor: Visitor) {
        visitor.visit(this);
    }
}

class ElementB implements VisitorElement {
    featureB() {}

    accept(visitor: Visitor) {
        visitor.visit(this);
    }
}

interface Visitor {
    visit(element: VisitorElement): void;
}

class ConcreteVisitor implements Visitor {
    visit(element: VisitorElement): void {
        if (element instanceof ElementA) {
            element.featureA();
        } else if (element instanceof ElementB) {
            element.featureB();
        }
    }
}

class VisitorClient {
    constructor() {
        const element = new ElementA();

        element.accept(new ConcreteVisitor());
    }
}