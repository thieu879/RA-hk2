function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Lỗi: Không thể chia cho 0.");
    }
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("lỗi: phải nhập vào là 2 số.");
    }
    let result = a / b;
    return result;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Kết thúc hàm divideNumbers.");
  }
}

console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));
console.log(divideNumbers("abc", 2));
