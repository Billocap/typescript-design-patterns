interface Alerter {
    alert(msg: string): void;
}

interface Printer {
    print(msg: string): void;
}

class AlerterA implements Alerter {
    alert(msg: string) {
        alert(`Alerter A says: ${msg}`);
    }
}

class AlerterB implements Alerter {
    alert(msg: string) {
        alert(`Alerter B says: ${msg}`);
    }
}

class PrinterA implements Printer {
    print(msg: string) {
        console.log(`Printer A says: ${msg}`);
    }
}

class PrinterB implements Printer {
    print(msg: string) {
        console.log(`Printer B says: ${msg}`);
    }
}

interface AbstractFactory {
    newPrinter(): Printer;
    newAlerter(): Alerter;
}

class FactoryA implements AbstractFactory {
    newPrinter() {
        return new PrinterA();
    }

    newAlerter() {
        return new AlerterA();
    }
}

class FactoryB implements AbstractFactory {
    newPrinter() {
        return new PrinterB();
    }

    newAlerter() {
        return new AlerterB();
    }
}

class Client {
    private factory: AbstractFactory;

    constructor(type: 1 | 2) {
        switch (type) {
            case 1: 
                this.factory = new FactoryA();
                break;
            case 2: 
                this.factory = new FactoryB();
                break;
        }
    }

    print(msg: string) {
        const printer = this.factory.newPrinter();

        printer.print(msg);
    }

    alert(msg: string) {
        const alerter = this.factory.newAlerter();

        alerter.alert(msg);
    }
}

export default Client;