function decorator(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
console.log(descriptor);
console.log(key);

  descriptor.value = function(...args: any[]) {
    console.log(args);
    return originalMethod.apply(this, args);
  }

  return descriptor;
}
class Example{
    @decorator
    sum(a: number, b: number) {
        return a+b
    }
}
let example1 = new Example();
console.log(example1.sum(2,3));
