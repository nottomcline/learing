// Problem: Maximal sum of subarray with k elements
function maxSubarraySumSizeK_native(arr: number[], k: number) {
  let maxSum = -Infinity;
  const amountOfSubarrays = arr.length - k + 1; // calculate last possible index in array (+1 because zero based)

  for (let i = 0; i < amountOfSubarrays; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j++) {
      currentSum += arr[i + j];
    }
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

function maxSubarraySumSizeK_slidingWindow(arr: number[], k: number) {
  // Compute sum of first window of size k (to use it in the slide window later)
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide the window from start to end of the array
  // i = k because we already got the first window calculated
  for (let i = k; i < arr.length; i++) {
    // arr[i]; new leading element
    // arr[i - k]; old trailing element
    windowSum += arr[i] - arr[i - k]; // new windowSum = old windowSum + new leading element - old trailing element
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// some test data
const unsortedArray = [4, 2, 1, -9, 8, 4, 3];
const size = 3;

// function calls
console.log("Starting native solution...");
const maxSum_native = maxSubarraySumSizeK_native(unsortedArray, size);
console.log(`Max Sum: ${maxSum_native}`);

console.log("Starting sliding window solution...");
const maxSum_slidingWindow = maxSubarraySumSizeK_slidingWindow(
  unsortedArray,
  size,
);
console.log(`Max Sum: ${maxSum_slidingWindow}`);
