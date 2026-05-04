function binarySearch(arr: number[], x: number) {
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
}
