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
function uppercase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return originalMethod.apply(this, args).toUpperCase();
    };
    return descriptor;
}
function reverse(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return originalMethod.apply(this, args).split('').reverse().join('');
    };
    return descriptor;
}
function composeDecorators(...decorators) {
    return (target, propertyKey, descriptor) => {
        decorators.reverse().forEach(decorator => decorator(target, propertyKey, descriptor));
    };
}
const combinedDecorator = composeDecorators(uppercase, reverse);
class ExampleClasss {
    exampleMethod(input) {
        return input;
    }
}
__decorate([
    combinedDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExampleClasss.prototype, "exampleMethod", null);
const example5 = new ExampleClasss();
console.log(example5.exampleMethod('hello'));
