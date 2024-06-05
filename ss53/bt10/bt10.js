let numbers = [1, 2, 3, 4, 5, 6];

function myFindIndex(arr, number, callback) {
  let index = arr.findIndex((item) => item === number);
  callback(index);
}

function print(index) {
  console.log(index);
}

myFindIndex(numbers, 2, print);
myFindIndex(numbers, 10, print);
