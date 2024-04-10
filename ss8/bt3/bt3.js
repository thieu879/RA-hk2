"use strict";
function calculateArea(shape) {
    if (shape.shape === "square") {
        return shape.sideLength * shape.sideLength;
    }
    else if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
}
const square = { shape: "square", sideLength: 5 };
console.log("Diện tích hình vuông:", calculateArea(square));
const circle = { shape: "circle", radius: 3 };
console.log("Diện tích hình tròn:", calculateArea(circle));
