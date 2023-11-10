## JS Pair Programming

# exercise-1: Hello World

- Write a function createHelloWorld. It should return a new function that always returns "Hello World"

# exercise-2: Apply Transform Over Each Element in Array

- Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
  The returned array should be created such that returnedArray[i] = fn(arr[i], i).
  Please solve it without the built-in Array.map method.

# exercise-3: Debounce

- Given a function fn and a time in milliseconds t, return a debounced version of that function.

A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

Please solve it without using lodash's \_.debounce() function.

# exercise-4: Multiplier

- Write a function createMultiplier. It should return a new function that multiplies a given number by a specified multiplier.

# exercise-5: Bookshelf

- Write a class Bookshelf that represents a collection of books. The class should have methods to add a book, remove a book, and get the total number of books in the bookshelf.

# exercise-6: Expect Testing

- Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
