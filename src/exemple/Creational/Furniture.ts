interface Chair {
    furniture(): string;
}

interface Sofa {
    furniture(): string;
}

interface CoffeTable {
    furniture(): string;
}

class ArtDecoChair implements Chair {
    furniture() {
        return "ArtDeco Style Chair";
    }
}

class ModernChair implements Chair {
    furniture() {
        return "Modern Style Chair";
    }
}

class ArtDecoSofa implements Sofa {
    furniture() {
        return "ArtDeco Style Sofa";
    }
}

class ModernSofa implements Sofa {
    furniture() {
        return "Modern Style Sofa";
    }
}

class ArtDecoCoffeTable implements CoffeTable {
    furniture() {
        return "ArtDeco Style Coffe Table";
    }
}

class ModernCoffeTable implements CoffeTable {
    furniture() {
        return "Modern Style Coffe Table";
    }
}

interface FunitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeTable(): CoffeTable;
}

class ArtDecoFactory implements FunitureFactory {
    createChair() {
        return new ArtDecoChair();
    }
    
    createSofa() {
        return new ArtDecoSofa();
    }

    createCoffeTable() {
        return new ArtDecoCoffeTable();
    }
}

class ModernFactory implements FunitureFactory {
    createChair() {
        return new ModernChair();
    }
    
    createSofa() {
        return new ModernSofa();
    }

    createCoffeTable() {
        return new ModernCoffeTable();
    }
}