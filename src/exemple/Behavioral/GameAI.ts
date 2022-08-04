abstract class GameAI {
    takeTurn() {}

    collectResorces() {}

    abstract buildStructures(): void;

    abstract buildUnits(): void;

    attack() {}

    abstract sendScouts(x: number, y: number): void;

    abstract sendWarriors(x: number, y: number): void;
}

class OrcsAI extends GameAI {
    buildStructures() {}

    buildUnits() {}

    sendScouts(x: number, y: number) {}

    sendWarriors(x: number, y: number) {}
}

class MonstersAI extends GameAI {
    collectResorces() {}
    
    buildStructures() {}

    buildUnits() {}

    sendScouts(x: number, y: number) {}

    sendWarriors(x: number, y: number) {}
}