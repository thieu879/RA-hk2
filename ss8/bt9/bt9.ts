function dataProcessing(input: number | string | any[]): number | string | undefined {
    if (typeof input === 'number') {
        return input * input;
    } else if (typeof input === 'string') {
        return input.length;
    } else if (Array.isArray(input)) {
        let sum = 0;
        for (const number of input) {
            if (typeof number === 'number') {
                sum += number;
            }
        }
        return sum;
    }
}

console.log(dataProcessing(5));

console.log(dataProcessing("1234"));

console.log(dataProcessing([1, 2, 3, 4, 5]));
