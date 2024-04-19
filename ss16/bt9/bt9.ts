function flattenArray<T>(arr: (T | T[])[]): T[] {
  const flatArr: T[] = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      flatArr.push(...flattenArray(el));
    } else {
      flatArr.push(el);
    }
  }
  return flatArr;
}
const nestedArr = [1, [2, [3, 4], 5], 6];
const flatArr = flattenArray(nestedArr);
console.log(flatArr);