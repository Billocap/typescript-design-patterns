interface Component {
    execute(): void;
}

class Leaf implements Component {
    execute() {};
}

class Composite implements Component {
    private _children: Component[];

    add(comp: Component) {
        this._children.push(comp);
    }

    remove(comp: Component) {}

    get children() {
        return this._children;
    }

    execute() {}
}