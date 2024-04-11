class Circle {
    private redius1: number;

    constructor(radius: number) {
        this.redius1 = radius;
    }

    get radius(): number {
        return this.redius1;
    }

    set radius(newRadius: number) {
        this.redius1 = newRadius;
    }

    calculateArea(): number {
        return Math.PI * this.redius1 ** 2;
    }

    calculatePerimeter(): number {
        return 2 * Math.PI * this.redius1;
    }
}

let myCircle = new Circle(5);

console.log("bán kính:", myCircle.radius);
console.log("diện tích:", myCircle.calculateArea());
console.log("chu vi:", myCircle.calculatePerimeter());

myCircle.radius = 7;

console.log("Updated bán kính:", myCircle.radius);
console.log("Updated diện tích:", myCircle.calculateArea());
console.log("Updated chu vi:", myCircle.calculatePerimeter());
