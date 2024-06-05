let numbers = [1, 2, 2, 3, 4, 5, 6];

function myFilter(arr, number, callback) {
  let newArr = arr.filter((item) => item === number);
  callback(newArr);
}

function print(arr) {
  console.log(arr);
}

myFilter(numbers, 2, print);
myFilter(numbers, 10, print);
