function displayNumbers(callback) {
    let a = 1;
    let interval = setInterval(() => {
        callback(a);
        a++;
    },1000)
}
function print(number) {
    console.log(number);
}
displayNumbers(print)