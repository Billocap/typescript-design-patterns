class SubSystemA {
    execute() {}
}

class SubSystemB {
    make() {}
}

class SubSystemC {
    do() {}
}

class Facade {
    protected systemA: SubSystemA;
    protected systemB: SubSystemB;
    protected systemC: SubSystemC;

    constructor() {
        this.systemA = new SubSystemA();
        this.systemB = new SubSystemB();
        this.systemC = new SubSystemC();
    }

    execute() {
        this.systemA.execute();
    }

    make() {
        this.systemB.make();
    }

    do() {
        this.systemC.do();
    }
}

class AdvancedFacade extends Facade {
    render() {
        this.systemA.execute();
        this.systemB.make();
        this.systemC.do();
    }
}

class FacadeClient {
    private facade: Facade;

    constructor() {
        this.facade = new AdvancedFacade();
    }
}