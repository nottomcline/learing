function binarySearch_native(arr: number[], x: number) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}

function binarySearch_iterative(arr: number[], x: number) {
  let low = 0;
  let high = arr.length - 1;

  while (high >= low) {
    const mid = low + Math.floor((high - low) / 2); // add low so the midpoint is computed relative to the current search interval

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function binarySearch_recursive(
  arr: number[],
  low: number,
  high: number,
  x: number,
) {
  if (high >= low) {
    const mid = low + Math.floor((high - low) / 2); // add low so the midpoint is computed relative to the current search interval

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) {
      return binarySearch_recursive(arr, low, mid - 1, x);
    } else {
      return binarySearch_recursive(arr, mid + 1, high, x);
    }
  }

  return -1;
}

// some test data
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 70;

// function calls
console.log("Starting Native Search...");
const nativeResult = binarySearch_native(sortedArray, target);
console.log(`Found at index: ${nativeResult}`);

console.log("Starting Iterative Search...");
const iterativeResult = binarySearch_iterative(sortedArray, target);
console.log(`Found at index: ${iterativeResult}`);

console.log("Starting Recursive Search...");
const recursiveResult = binarySearch_recursive(
  sortedArray,
  0,
  sortedArray.length - 1,
  target,
);
console.log(`Found at index: ${recursiveResult}`);
