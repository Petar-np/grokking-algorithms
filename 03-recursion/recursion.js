const recursiveFunc = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * recursiveFunc(num - 1);
}

console.log(recursiveFunc(1));
console.log(recursiveFunc(5));
console.log(recursiveFunc(3));
