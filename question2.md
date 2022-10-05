# Question 2 - Section 1

### Statement: 
Given an array A with n as length. Find the maximum contiguous 
subarray, which means, the contiguous subarray which has the largest 
sum of values and returns its sum.

Example:

```
Input: 
[-2, 1, -3, 4, -1, 2, 1, -5, 4],
Output:
6 
Explanation:
[4, -1, 2, 1] hast the largest sum = 6.  
```

### Question:
Write a pseudocode function to solve that problem. Do not forget to 
explain any important aspect of your code, so that anyone can 
understand its implementation.

### Solution:
 To address this problem, we need a function that can address the following:
 
 1. Iterate over the given array, finding the possible subarrays. The size of the possible subarrays rangre from 1 to the actual size of the input array.
 2. Calculate the sum of each subarray.
 3. Analyze the sum of the subarrays and determine the largest one.

 Let's address these features progressively. First, we need a pseudocode function that receives an array as input and iterates over the possible sizes of the subarrays, i.e., from 1 to n, being n the size of the input array. 

```
function findMaxSub(array : integer_array)
    integer i = 1
    loop ( while i <= size_of(array) )
        // TODO
    end_loop
```

Now, the iterator variable __i__ gets the different sizes that the subarrays can have. Having this, we need to select or slice all of the possible subarrays of each size. As an example, if __i = 3__ and the given array is __a = [1,2,3,4,5]__, our function needs to select __a1 = [1,2,3], a2 = [2,3,4], a3 = [3,4,5]__. 

Note that in each subrray, we sliced the original array by indexing different portions of the original one. For instance, to get the subarray a2, we need to slice the input array from index 1 to index 4 (last one not inclusive)

To do this, let's create 2 variables holding the start and stop indexes for the subarray. Then, we can increase these indexes in a loop until we have covered all the array. In each iteration, the first value of the stop index will be determined by the currrent subarray size (i.e., __i__)

```
function findMaxSub(array : integer_array)
    integer i = 1
    loop ( while i <= size_of(array) )
        integer start_idx = 0
        integer stop_idx = i
        loop ( while stop_idx <= size_of(array) )
            //TODO
            start_idx = start_idx + 1
            stop_idx = stop_idx + 1
        end_loop
    end_loop
```

Now, we can select the subarray and calculate the sum of its elements.

```
function findMaxSub(array : integer_array)
    integer i = 1
    loop ( while i <= size_of(array) )
        integer start_idx = 0
        integer stop_idx = i
        loop ( while stop_idx <= size_of(array) )
            integer_array subarray = array[from start_idx to stop_idx]
            interer sum_subarray = sum_of(sub_array)
            //TODO
            start_idx = start_idx + 1
            stop_idx = stop_idx + 1
        end_loop
    end_loop
```

We still need to determine the largest sum. To do this, let's assume that the first subarray of size 1 has the largest sum, then during the second loop we can compare the sum of the current subarray, with the previous one.

```
function findMaxSub(array : integer_array)
    integer i = 1
    integer maximum = array[0]
    loop ( while i <= size_of(array) )
        integer start_idx = 0
        integer stop_idx = i
        loop ( while stop_idx <= size_of(array) )
            integer_array subarray = array[from start_idx to stop_idx]
            interer sum_subarray = sum_of(sub_array)
            
            if sum_subarray > maximum then
                maximum = sub_array
            end_if

            start_idx = start_idx + 1
            stop_idx = stop_idx + 1
        end_loop
    end_loop
```