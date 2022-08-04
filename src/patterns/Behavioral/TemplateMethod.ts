abstract class AbstractClass {
    templateMethod() {
        this.step1();

        if (this.step2()) {
            this.step3();
        } else {
            this.step4();
        }
    }

    step1() {}

    step2(): boolean {
        return true;
    }
    
    abstract step3(): void;
    
    abstract step4(): void;
}

class ConcreteClass1 extends AbstractClass {
    step3() {}

    step4() {}
}

class ConcreteClass2 extends AbstractClass {
    step1() {}
    
    step2(): boolean {
        return false;
    }

    step3() {}

    step4() {}
}