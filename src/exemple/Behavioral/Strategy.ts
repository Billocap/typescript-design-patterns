interface Strategy {
    execute(): void;
}

class ConcreteStrategy implements Strategy {
    execute() {}
}

class StrategyContext {
    private strategy: Strategy;

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    doSomething() {
        this.strategy.execute();
    }
}