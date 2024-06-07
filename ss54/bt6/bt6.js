async function isPrimeWithPromise(number) {
  return new Promise((resolve, reject) => {
    if (number <= 1) {
      resolve(false);
    } else if (number <= 3) {
      resolve(true);
    } else if (number % 2 === 0 || number % 3 === 0) {
      resolve(false);
    } else {
      for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
          resolve(false);
        }
      }
      resolve(true);
    }
  });
}

isPrimeWithPromise(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
