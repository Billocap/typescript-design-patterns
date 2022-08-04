// Implementation based on an intermediate interface;
interface Memento {}

class ConcreteMemento implements Memento {
    private state;

    constructor() {}

    getState() {
        return this.state;
    }
}

class Originator {
    private state;

    save(): Memento {
        return new ConcreteMemento();
    }

    restore(memento: Memento) {
        const _memento = <ConcreteMemento> memento;

        this.state = _memento.getState();
    }
}

class MementoClient {
    private originator: Originator;
    private history: Memento[];

    undo() {}
}

// Implementation with even stricter encapsulation;
interface Memento1 {
    restore(): void;
}

class ConcreteMemento1 implements Memento1 {
    private originator: ConcreteOriginator1;
    private state;

    constructor(originator: ConcreteOriginator1, state) {
        this.originator = originator;
        this.state = state;
    }

    restore(): void {
        this.originator.setState(this.state);
    }
}

interface Originator1 {
    save(): Memento1;
}

class ConcreteOriginator1 {
    private state;

    save(): Memento1 {
        return new ConcreteMemento1(this, this.state);
    }

    setState(state) {
        this.state = state;
    }
}

class Caretaker {
    private history: Memento1[];

    undo() {}
}