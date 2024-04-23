"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function checkParamsType(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const paramTypes = Reflect.getMetadata('design:paramtypes', target, propertyKey);
        if (paramTypes.length !== args.length) {
            throw new Error(`Number of arguments mismatch in ${propertyKey}`);
        }
        for (let i = 0; i < args.length; i++) {
            if (paramTypes[i] !== undefined && typeof args[i] !== paramTypes[i].name.toLowerCase()) {
                throw new Error(`Argument ${i + 1} of ${propertyKey} has incorrect type`);
            }
        }
        return originalMethod.apply(this, args);
    };
}
class Example5 {
    static add(a, b) {
        return a + b;
    }
}
__decorate([
    checkParamsType,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example5, "add", null);
console.log(Example5.add(2, 3)); // OK
console.log(Example5.add('2', 3)); // Throws error
