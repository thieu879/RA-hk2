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
function validation(target, propertyKey, index) {
    if (index === 0) {
        return typeof target[propertyKey] === 'function';
    }
    else if (index === 1) {
        return typeof target[propertyKey] === 'number';
    }
    return true;
}
function validateParameters(validationFunction) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            for (let i = 0; i < args.length; i++) {
                if (!validationFunction(target, key, i)) {
                    throw new Error(`Invalid parameter at index ${i}`);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class Example2 {
    example(a, b) {
        console.log("Hello World");
    }
}
__decorate([
    validateParameters(validation),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], Example2.prototype, "example", null);
const example2 = new Example2();
example2.example(1, 0);
