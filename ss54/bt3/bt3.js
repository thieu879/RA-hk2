function sumWithPromise(arr) {
    return new Promise((resolve,reject) => {
        const sum = arr.reduce((total, num) => total + num, 0)
        resolve(sum)
    })
}
sumWithPromise([1, 2, 3, 4, 5, 6, 7])
    .then(result => {
    console.log(result);
})