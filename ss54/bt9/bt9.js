function sortArrayWithPromise(arr) {
    return new Promise((resolve) => {
        const sortArray = arr.slice().sort((a, b) => a - b)
        resolve(sortArray)
    })
}
sortArrayWithPromise([1, 7, 2, 5, 9, 5])
.then(result=>{
    console.log(result);
})