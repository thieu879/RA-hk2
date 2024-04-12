class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getDescription() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    getDescription(): void {
        super.getDescription();
        console.log(`Name: ${this.name}, Price: ${this.price} Brand: ${this.brand}`);
    }
}

const laptop = new Electronics("Laptop", 20000, "Dell");
laptop.getDescription();
