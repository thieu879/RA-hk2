abstract class Shape {
    abstract calculateArea(): number;
}

class Rectangle extends Shape {
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
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);

console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Diện tích hình tròn:", circle.calculateArea());
