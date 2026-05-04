Binary Search:
- Each guess will "eliminate" half of the remaining options
- Instead of scanning the Array from start to finish O(n) time (Linear Search)
  - Binary Search will find the answer in O(log) time, by continuously "eliminating" the search area in half
- "Binary" means separating something in two (splittin array in half -> searching in the "left"-/ "right"-area)
- It can be implemented in the following two ways:
  - Iterative -> more real world
  - Recursive -> short (fit better for coding interviews)