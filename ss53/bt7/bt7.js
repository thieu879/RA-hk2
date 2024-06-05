let arr = [1, 2, 3, 4, 5, 6];

function myForEach(numbers, callback) {
  numbers.forEach((item, index) => {
    callback(item, index, numbers);
  });
}

function print(item, index, numbers) {
  console.log(`Vị trí: ${index} | Phần tử: ${item} | Mảng: `, numbers);
}

myForEach(arr, print);
