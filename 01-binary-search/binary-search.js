const binarySearch = (needle, array) => {
  let first = 0;
  let last = array.length - 1;
  while (first <= last) {
    const mid = Math.floor((first + last) / 2);
    if (array[mid] === needle) {
      return mid;
    } else if (array[mid] < needle) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return false;
}

console.log(binarySearch(3, [1,2,3,4,5,6,7]));
console.log(binarySearch(10, [1,2,3,4,5]));
console.log(binarySearch(1, [1]));
