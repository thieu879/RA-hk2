"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name} (ID: ${this.id}): ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showSpeed() {
        console.log(`Current speed of ${this.name} (ID: ${this.id}) in gear ${this.gear}: ${this.speed} km/h`);
    }
}
const myBicycle = new Bicycle("My Bike", 20, 1, 3);
myBicycle.showSpeed();
myBicycle.speedUp(10);
myBicycle.showSpeed();
myBicycle.slowDown(5);
myBicycle.showSpeed();
