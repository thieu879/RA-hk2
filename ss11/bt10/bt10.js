"use strict";
class Shape1 {
}
class Rectangle1 extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle1 extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const rectangle1 = new Rectangle1(4, 5);
const circle1 = new Circle1(3);
console.log("Chu vi hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Chu vi hình tròn:", circle1.calculatePerimeter());
