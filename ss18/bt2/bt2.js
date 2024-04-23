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
function timingDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Tên hàm: ${propertyKey}`);
        console.log(`Tham số đầu vào: ${JSON.stringify(args)}`);
        console.log(`Thời gian thực thi: ${executionTime.toFixed(2)} ms`);
        console.log(`Kết quả trả về: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
class Example1 {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example1.prototype, "add", null);
const example = new Example1();
example.add(2, 3);
