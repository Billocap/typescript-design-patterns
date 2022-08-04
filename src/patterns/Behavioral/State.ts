interface State {
    doThis(): void;
    doThat(): void;
    setContext(context: StateContext): void;
}

class StateContext {
    private state: State;

    public name: string;

    constructor(initialState: State) {
        this.state = initialState;

        this.state.setContext(this);
    }

    changeState(state: State) {
        this.state = state;

        state.setContext(this);
    }

    doThis() {
        this.state.doThis();
    }

    doThat() {
        this.state.doThat();
    }
}

class ConcreteState1 implements State {
    private context: StateContext;

    setContext(context: StateContext) {
        this.context = context;
    }

    doThis() {
        this.context.name = "123";
    }

    doThat() {
        alert("Hello World");
    }
}

class ConcreteState2 implements State {
    private context: StateContext;

    setContext(context: StateContext) {
        this.context = context;
    }

    doThis() {
        this.context.name = "456";
    }

    doThat() {
        alert(`Hello from ${this.context.name}`);
    }
}

class StateClient {
    private state: State;
    private context: StateContext;
    
    constructor() {
        this.state = new ConcreteState1();
        this.context = new StateContext(this.state);

        this.state.setContext(this.context);

        this.context.doThis();
    }
}