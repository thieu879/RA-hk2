abstract class Shape1 {
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}

class Rectangle1 extends Shape1 {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Circle1 extends Shape1 {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const rectangle1 = new Rectangle1(4, 5);
const circle1 = new Circle1(3);

console.log("Chu vi hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Chu vi hình tròn:", circle1.calculatePerimeter());
