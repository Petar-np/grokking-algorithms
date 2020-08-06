const findSmallest = (array) => {
  let smallest = array[0];
  let smallestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
      smallestIndex = i;
    }
  } 
  return smallestIndex;
}

const selectionSort = (array) => {
  const sortedArray = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const smallestValueIndex = findSmallest(array);
    sortedArray.push(array.splice(smallestValueIndex, 1)[0]);
  }
  return sortedArray;
}

console.log(selectionSort([10, 50, 3, 77, 8, 5, 7, 333, 50, 33, 7, 1, -1, -18]));
