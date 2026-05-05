function binarySearchIterative(arr: number[], x: number) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

function binarySearchRecursive(
  arr: number[],
  low: number,
  high: number,
  x: number,
) {
  if (high <= low) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) return mid;

    if (arr[mid] > x) {
      return binarySearchRecursive(arr, low, mid - 1, x);
    } else {
      return binarySearchRecursive(arr, mid + 1, high, x);
    }
  }

  return -1;
}
