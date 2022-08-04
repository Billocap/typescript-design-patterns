interface Mediator {
    notify(sender): void;
}

class ComponentA {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    operationA() {
        this.mediator.notify(this);
    }
}

class ComponentB {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    operationB() {
        this.mediator.notify(this);
    }
}

class ComponentC {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    operationC() {
        this.mediator.notify(this);
    }
}

class ComponentD {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    operationD() {
        this.mediator.notify(this);
    }
}

class ConcreteMediator implements Mediator {
    private compA: ComponentA;
    private compB: ComponentB;
    private compC: ComponentC;
    private compD: ComponentD;

    setComponent(compA: ComponentA, compB: ComponentB, compC: ComponentC, compD: ComponentD) {
        this.compA = compA;
        this.compB = compB;
        this.compC = compC;
        this.compD = compD;
    }

    notify(sender) {
        switch (sender) {
            case ComponentA:
                this.reactOnA();
                break;

            case ComponentB:
                this.reactOnB();
                break;

            case ComponentC:
                this.reactOnC();
                break;

            case ComponentD:
                this.reactOnD();
                break;
        }
    }

    reactOnA() {
        console.log("Notification from A");
        this.compA.operationA();
    }

    reactOnB() {
        console.log("Notification from B");
        this.compB.operationB();
    }

    reactOnC() {
        console.log("Notification from C");
        this.compC.operationC();
    }

    reactOnD() {
        console.log("Notification from D");
        this.compD.operationD();
    }
}

class MediatorClient {
    private mediator: Mediator;
    private compA: ComponentA;
    private compB: ComponentB;
    private compC: ComponentC;
    private compD: ComponentD;

    constructor() {
        this.mediator = new ConcreteMediator();

        this.compA = new ComponentA(this.mediator);
        this.compB = new ComponentB(this.mediator);
        this.compC = new ComponentC(this.mediator);
        this.compD = new ComponentD(this.mediator);

        (<ConcreteMediator>this.mediator).setComponent(this.compA, this.compB, this.compC, this.compD);
    }

    methodA() {
        this.mediator.notify(this.compA);
    }
}