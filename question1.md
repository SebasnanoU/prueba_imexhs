# Question 1 - Section 1

### Statement: 
Check the following pseudocode function:

```
function Doubler(number : integer)
    integer i = 1
    loop (while i < number)
        i = i * 2
        Display(i)
    end loop
end function
```

### Question:
What is the big O notation which describes in a better way its worst-case?

### Solution:
To find the big O notation of the function, let's analyze the complexity 
of each line inside the function (See the comments)

```
function Doubler(number : integer)
    integer i = 1              //O(1)
    loop (while i < number)    //O(?) or O(log(n))
        i = i * 2
        Display(i)
    end loop
end function
```

There is a fundamental problem in the while loop regarding the 
termination of it. 

* In the best case, i.e., when the argument of the function 
__number__ is even and positive, the loop will reach the exit 
condition of the while and will terminate. In this case, the 
algorithm will have a O(log(n)) complexity, because the iterator 
variable __i__ is being multiplicated by a number each time.
* In the worst case, i.e., when the argument of the function 
__number__ is either odd or negative, the loop will be infinite. In 
this case it is impossible to calculate the algorithm's complexity.

