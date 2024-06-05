function countDown(n) {
    return new Promise((resolve,reject) => {
        if (typeof n !== "number", n < 0) {
            reject("số truyền vào là 1 số nguyên dương")
        }
        let count = n;
        const intervalId = setInterval(() => {
            console.log(count);
            count--;
            if (count < 1) {
                clearInterval(intervalId)
                resolve("hoàn thành quá trình đếm")
            }
        },1000)
    })
}
countDown(5)
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });