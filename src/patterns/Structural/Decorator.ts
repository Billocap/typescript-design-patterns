interface Component {
    execute(): void;
}

class ConcreteComponent implements Component {
    execute() {}
}

class BaseDecorator implements Component {
    protected wrappee: Component;

    constructor(comp: Component) {
        this.wrappee = comp;
    }

    execute() {
        this.wrappee.execute();
    }
}

class ConcreteDecorator extends BaseDecorator {
    execute() {
        super.execute();
    }

    extra() {}
}

class DecoratorClient {
    private component: Component;

    constructor() {
        this.component = new ConcreteComponent();

        this.component = new BaseDecorator(this.component);

        this.component = new ConcreteDecorator(this.component);
    }
}