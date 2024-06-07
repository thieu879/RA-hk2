async function sumWithAsyncAwait(arr) {
  const sum = await new Promise((resolve, reject) => {
    const total = arr.reduce((acc, num) => acc + num, 0);
    resolve(total);
  });

  return sum;
}
sumWithAsyncAwait([1, 2, 3, 4, 5, 6, 7])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
