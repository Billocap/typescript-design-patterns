// Iterator Interface named this way to avoid collisions
interface Guide {
    getNext(): void;
    hasMore(): boolean;
}

class ConcreteIterator implements Guide {
    private collection: IterableCollection;

    constructor(collection: IterableCollection) {
        this.collection = collection;
    }

    getNext() {}

    hasMore(): boolean {
        return true;
    }
}

interface IterableCollection {
    createIterator(): Guide;
}

class ConcreteCollection implements IterableCollection {
    createIterator(): Guide {
        return new ConcreteIterator(this);
    }
}