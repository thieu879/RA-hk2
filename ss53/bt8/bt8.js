let numbers = [1,2,3,4,5,6];

function find(arr, number, callback) {
  let check = false;
  for (let item of arr) {
    if (item === number) {
      callback(item);
      check = true;
      break;
    }
  }
  if (!check) {
    callback(null);
  }
}

function print(number) {
  console.log(number);
}

find(numbers,2, print);
find(numbers, 10, print);
