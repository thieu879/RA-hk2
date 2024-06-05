function findElement(arr, num) {
  return new Promise((resolve, reject) => {
    const foundElement = arr.find((element) => element === num);
    if (foundElement !== undefined) {
      const index = arr.indexOf(foundElement);
      resolve({ element: foundElement, index: index });
    } else {
      reject("Không tìm thấy phần tử");
    }
  });
}

findElement([1, 2, 3, 4, 5], 6)
  .then((result) => {
    console.log(`Tìm thấy ${result.element} ở vị trí ${result.index}`);
  })
  .catch((err) => {
    console.log(err);
  });
