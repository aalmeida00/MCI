## Interview - Big O

- How well the a problem is solved?
- How much time and space does it take to solve a problem?


# What is a good code?
  - Readable
  - Scalable

Big-o is a way to measure how much scalable our code is.

We can provide instructions to a computer, but this instructions to solve the problem, can be different. We can have different ways to solve the same problem. Check the example 1 file.

# Big O and Scalability

Time to run a code is different for different computers. So, we can't measure the time to run a code. We can measure the number of operations that a code does.

In example-2 we have a array with 10000 entries, and the time to run the code is different for different computers. But the number of operations is the same.

Big O notation is a way to measure the number of operations that a code does.

This is the example below of a  list of complexity notation: 

- O(n!) -> Horrible
- O(2^n) -> Horrible
- O(n^2) -> Horrible
- O(n log n) -> Bad
- O(n) -> Fair
- O(log n) -> Good
- O(1) -> Excellent

In interviews most of the time you just need to know the worst case scenario.
- Rule 1: Worst case scenario
- Rule 2: Remove constants
- Rule 3: Different terms for inputs
- Rule 4: Drop non-dominant terms


## O(n) - Linear time

The number of operations is the same as the number of entries in the array.

Example of O(n) - Linear time:

```js
 const compressAllBoxes = boxes => boxes.forEach(box => console.log(box));
```

## O(1) - Constant time

The number of operations is the same no matter how many entries in the array.

Example of O(1) - Linear time:

```js
 const compressFirstBox = boxes => console.log(boxex[0]);
```

### Rule 1: Worst case scenario

When calculate the complexity of a code, we need to consider the worst case scenario. 



