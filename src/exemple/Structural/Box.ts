interface Product {
    price: number;
}

class Receipt implements Product {
    public price = 0;
}

class Charger implements Product {
    public price = 10;
}

class Headphones implements Product {
    public price = 5;
}

class Phone implements Product {
    public price = 500;
}

class Hammer implements Product {
    public price = 20;
}

class Box implements Product {
    private content: Product[];

    add(product: Product) {
        this.content.push(product);
    }

    product(ind: number): Product {
        return this.content[ind];
    }

    get price() {
        return this.content.reduce((price, comp) => {
            return price + comp.price;
        } ,0);
    }
}