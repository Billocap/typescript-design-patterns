interface Shape {
    move(x: number, y: number): void;
    draw(): void;
    accept(visitor: ShapeVisitor): void;
}

class Dot implements Shape {
    move(x: number, y: number) {}
    draw() {}
    accept(visitor: ShapeVisitor) {}
}

class Circle implements Shape {
    move(x: number, y: number) {}
    draw() {}
    accept(visitor: ShapeVisitor) {}
}

class Rectangle implements Shape {
    move(x: number, y: number) {}
    draw() {}
    accept(visitor: ShapeVisitor) {}
}

interface ShapeVisitor {
    visitDot(dot: Dot): void;
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
}

class XMLExportVisitor implements ShapeVisitor {
    visitDot(dot: Dot): void {
        throw new Error("Method not implemented.");
    }
    visitCircle(circle: Circle): void {
        throw new Error("Method not implemented.");
    }
    visitRectangle(rectangle: Rectangle): void {
        throw new Error("Method not implemented.");
    }
}