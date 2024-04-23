function checkParamsType(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
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
    @checkParamsType
    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log(Example5.add(2, 3)); // OK
console.log(Example5.add('2', 3)); // Throws error
