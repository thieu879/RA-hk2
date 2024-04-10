interface Square {
    shape: "square";
    sideLength: number;
}

interface Circle {
    shape: "circle";
    radius: number;
}

type Shape = Square | Circle;

function calculateArea(shape: Shape): any {
    if (shape.shape === "square") {
        return shape.sideLength * shape.sideLength; 
    } else if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
}

const square: Square = { shape: "square", sideLength: 5 };
console.log("Diện tích hình vuông:", calculateArea(square));

const circle: Circle = { shape: "circle", radius: 3 };
console.log("Diện tích hình tròn:", calculateArea(circle));
