"use strict";
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
const rectangle = new Rectangle(4, 5);
const circle = new Circle(3);
console.log("Diện tích hình chữ nhật:", rectangle.calculateArea());
console.log("Diện tích hình tròn:", circle.calculateArea());
