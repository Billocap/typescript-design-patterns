interface Calculation {
    calculate(a: number, b: number): number;
}

class AdditionStrategy implements Calculation {
    calculate(a: number, b: number) {
        return a + b;
    }
}

class SubtractStrategy implements Calculation {
    calculate(a: number, b: number) {
        return a - b;
    }
}

class MultiplyStrategy implements Calculation {
    calculate(a: number, b: number) {
        return a * b;
    }
}

class ArithmeticContext {
    private strategy: Calculation;

    setCalculation(strategy: Calculation) {
        this.strategy = strategy;
    }

    calculate(a: number, b: number) {
        this.strategy.calculate(a, b);
    }
}

class StrategyApp {
    main(action: string, a: number, b: number) {
        const context = new ArithmeticContext();

        switch (action) {
            case "addition":
                context.setCalculation(new AdditionStrategy());
                break;

            case "subtraction":
                context.setCalculation(new SubtractStrategy());
                break;
            
            case "multiplication":
                context.setCalculation(new MultiplyStrategy());
                break;
        }

        return context.calculate(a, b);
    }
}