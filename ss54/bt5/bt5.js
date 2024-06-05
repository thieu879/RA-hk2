function isPrimeWithPromise(number) {
    return new Promise((resolve,reject) => {
        if (number <= 1) {
            reject(false)
        }
        if (number <= 3) {
            resolve(true)
        }
        if (number % 2 === 0 || number % 3 == 0) {
            reject(false)
        }
        for (let i = 5; i * i <= number; i += 6){
            if (number % i === 0 || number % (i + 2) === 0) {
                reject(false)
            }
        }
        resolve(true)
    })
}
isPrimeWithPromise(2)
    .then(result => {
    console.log(result);
    })
    .catch(result => {
        console.log(result);
    })