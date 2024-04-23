function timingDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
    @timingDecorator
    add(a: number, b: number): number {
        return a + b;
    }
}

const example = new Example1();
example.add(2, 3);
