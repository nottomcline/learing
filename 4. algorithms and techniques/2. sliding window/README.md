Sliding Window:
- Is a technique which describes a way to process ranges efficiently (e.g., maintaining a "window" over an array/string)
- Instead of repeatedly iterating over the same elements, it involves a fixed-size subset (window) that moves step-by-step through the data, and performs some operation on the elements within the window at each step
- Commonly used for problems like finding subarrays with a specific sum, finding the longest substring with unique characters, or solving problems that require a fixed-size window to process elements efficiently.
- Manual/ Native calculation
  - Instead of recalculating the sum for every subarray from scratch, which results in O(n × k) time complexity (because we iterate k times for each position using a nested loop)
    - Example:
      - Array = [1, 2, 6, 2, 4, 1], k = 3"
      - Sum of 1st sub-array = 1 + 2 + 6 = 9
      - Sum of 2nd sub-array = 2 + 6 + 2 = 10
      - Sum of 3rd sub-array = 6 + 2 + 4 = 12
      - Sum of 4th sub-array = 2 + 4 + 1 = 7
- Sliding Window
  - The Sliding Window technique reduces the time complexity to O(n)
  - Instead of recalculating each window sum from scratch, the Sliding Window technique:
    1. Compute the sum of the first window once
    2. Slide the window forward by:
      - subtracting the element leaving the window (trailing element)
      - adding the new element entering the window (leading element)
    - This allows to iterate trough the array only once
    - Example:
      - Array = [1, 2, 6, 2, 4, 1], k = 3"
      - Sum of 1st sub-array = 1 + 2 + 6 = 9
      - Sum of 2nd sub-array = 9 (sum of 1st sub-array) - 1 + 2 = 10
      - Sum of 3rd sub-array = 10 (sum of 2nd sub-array) - 2 + 4 = 12
      - Sum of 4th sub-array = 12 (sum of 3rd sub-array) - 6 + 1 = 7
- Two types of Sliding Window:
  - fixed size sliding window
  - variable size sliding window
