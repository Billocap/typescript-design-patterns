class RoundHole {
    private _radius: number;

    constructor(radius: number) {
        if (Number.isInteger(radius)) {
            this._radius = radius;
        }
    }

    get radius() {
        return this._radius;
    }

    fits(peg: RoundPeg): boolean {
        return peg.radius <= this.radius;
    }
}

class RoundPeg {
    private _radius: number;

    constructor(radius: number) {
        if (Number.isInteger(radius)) {
            this._radius = radius;
        }
    }

    get radius() {
        return this._radius;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
        super(0);

        this.peg = peg;
    }

    get radius() {
        return Math.round(this.peg.width * Math.sqrt(2) / 2);
    }
}

class SquarePeg {
    private _width: number;

    constructor(width: number) {
        if (Number.isInteger(width)) {
            this._width = width;
        }
    }

    get width() {
        return this._width;
    }
}