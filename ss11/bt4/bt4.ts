class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number): void {
        this.speed -= amount;
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    showSpeed(): void {
        console.log(`Current speed of ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    showSpeed(): void {
        console.log(`Current speed of ${this.name} (ID: ${this.id}) in gear ${this.gear}: ${this.speed} km/h`);
    }
}

const myBicycle = new Bicycle("My Bike", 20, 1, 3);

myBicycle.showSpeed();

myBicycle.speedUp(10);
myBicycle.showSpeed();

myBicycle.slowDown(5);
myBicycle.showSpeed();
