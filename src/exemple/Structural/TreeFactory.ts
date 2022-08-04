// Contains the extrinsic states;
class Tree {
    public x: number;
    public y: number;
    public type: TreeType;

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;

        this.type = type;
    }

    draw(canvas) {
        this.type.draw(canvas, this.x, this.y);
    }
}

// Contains the intrinsic states;
// The flyweight;
class TreeType {
    private name: string;
    private color: string;
    private texture: string;

    constructor(name: string, color: string, texture: string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    draw(canvas, x, y) {}
}

// The cache for the flyweights;
class TreeFactory {
    private treeTypes: TreeType[];

    static getTreeType(name, color, texture): TreeType {
        //Code for checing the existence of that tre type.

        return new TreeType(name, color, texture);
    }
}

// Client Code;
class Forest {
    public trees: Tree[];

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const type = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, type);

        this.trees.push(tree);
    }

    draw(canvas) {
        this.trees.forEach(tree => tree.draw(canvas));
    }
}