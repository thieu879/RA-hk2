function isPrime(n: number): boolean {
    if (n < 2) {
        return false;
    } else {
        for (let i: number = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function checkPrimeNumbers(arr:Array<number>):void {
    console.log(arr.every((value) => isPrime(value)));
}

checkPrimeNumbers([1,3,4,2,7,9,32,43,12,45]);
checkPrimeNumbers([3,5,7,11,13]);