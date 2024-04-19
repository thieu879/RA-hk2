class Calculator<T extends string | number> {
    add(num1: T, num2: T): number | string {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        } else if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
            return Number(num1) + Number(num2);
        } else {
            return "Không hợp lệ";
        }
    }

    subtract(num1: T, num2: T): number | string {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 - num2;
        } else if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
            return Number(num1) - Number(num2);
        } else {
            return "Không hợp lệ";
        }
    }

    multiply(num1: T, num2: T): number | string {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 * num2;
        } else if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
            return Number(num1) * Number(num2);
        } else {
            return "Không hợp lệ";
        }
    }

    divide(num1: T, num2: T): number | string {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            if (num2 === 0) {
                return "Không thể chia cho 0.";
            }
            return num1 / num2;
        } else if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
            if (Number(num2) === 0) {
                return "Không thể chia cho 0.";
            }
            return Number(num1) / Number(num2);
        } else {
            return "Không hợp lệ";
        }
    }
}

const calculator = new Calculator<number | string>();

console.log("Phép cộng:", calculator.add(5, 10));
console.log("Phép trừ:", calculator.subtract(10, 5));
console.log("Phép nhân:", calculator.multiply("5", "10"));
console.log("Phép chia:", calculator.divide("10", "2"));
console.log("Phép cộng với chuỗi không hợp lệ:", calculator.add("abc", "10"));
