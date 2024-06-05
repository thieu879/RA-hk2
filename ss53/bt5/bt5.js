function checkCondition(condition, callback) {
  setInterval(() => {
    callback(condition());
  }, 1000);
}

function print(condition) {
  console.log("Kết quả: ", condition);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

let count = 0;

function condition() {
  count++;
  return isPrime(count);
}

checkCondition(condition, print);
