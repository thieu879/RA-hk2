function processArray(arr, callback) {
  arr.forEach((element, index) => {
    setTimeout(() => {
      callback(element);
    }, index * 1000);
  });
}

const numbers = [1, 2, 3, 4, 5];

function printNumber(number) {
  console.log("phần tử thứ:",number);
}
processArray(numbers, printNumber);
