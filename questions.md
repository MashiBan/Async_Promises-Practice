### Synchronous Callback
Write a  function "higher order "that takes a callback function as an argument . Inside the "higher order" , call the callback function syncrounously .


##### what is a callback function?
callback function is function that is formed for the sole purpose of passing to another fucntion as parameter.

##### what is a Syncronous function 
##### what is the difference betweeen callback function and normal function?
##### what is a higher order function.
A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

##### what is the differnce between higher-order funciton and callback funciton?
new Date()

---------------------------------------------------------------------------


### Asynchronous function
Write a function "HigherOrderAsync" that takes a callback function as an argument. Inside "HigherOrderAsync", call the callback function asynchronously using setTimeout after a delay of n seconds  , Where n is the current day of the month.(1 <= n <= 31)


##### What is setTimeOut?
The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.

##### How do I obtain the current day of the month?
 new Date()

##### is setTimeOut asynchronous?
setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.

##### How do I use setTimeout and callback fucntion in order to achive what question has asked to do?
setTimeout(functionRef, delay)

-----------------------------------------------------------------

### Array Map with Callback:
Implement a function mapArray that takes an array and a callback function as arguments. mapArray should apply the callback function to each element of the array and return a new array with the modified values.

##### how to map to every element?
The map() method is an iterative method. It calls a provided callbackFn function once for each element in an array and constructs a new array from the results.

Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.

map(callbackFn)
map(callbackFn, thisArg)

array1.map((x) => x * 2); //returns an array

--------------------------------------------------------------

### Array Filter with Callback:
Write a function filterArray that takes an array and a callback function as arguments. filterArray should filter the elements of the array based on the condition specified by the callback function and return a new array with the filtered elements.

##### How do we filter the elements of the array based on condition specified by the callback
filter(callbackFn)
Return value
A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

-------------------------------------------------------------------------------

### File Processing with Callback:
- Write a function 'readFileCallback' that takes a filename and a callback function. 'readFileCallback' should read the contents of the file asynchronously and pass the data to the callback function.

##### How do you 'read' the contents of the filename asynchronously
readFile( Path, Options, Callback);

--------------------------------------------------------------------------------

### Parallel Execution with Callbacks:
- Implement a function 'parallelFileOperation' that returns an array of size 2 with the first index containing the contents of the file 'a.txt' in UTF-8 encoding. If `a.txt` doesn't exist, then throw an error. The second element of the array contains 1 if the text `Hello!` is successfully written to the file `b.txt` and 0 if the write operation fails.
                                                 
##### How do we do parallel file operations in js?


### Sequential Execution with Callbacks:
- Create a function 'series' that sequentially does the following.
    
    1. Read the contents of `a.txt` using UTF-8 encoding.
    2. Wait for 3 seconds.
    3. Write the contents of `a.txt` in `b.txt`.
    4. Remove any extra spacing from `a.txt`.
       (refer to kirat's async 'file-cleaner' problem from week 1)
    5. delete the contents of `a.txt`.
    6. delete the contents of `b.txt`.

### Error Handling with Callbacks:
- Extend one of the previous problems (e.g., file processing or parallel execution) to handle errors. Implement error handling in the callback functions and ensure that errors are propagated and handled appropriately.

### Callback Hell:
- Solve a problem using a nested structure of callback functions and then refactor the code to avoid the "callback hell" scenario. This will help you understand the challenges of callback-based asynchronous programming and how to write cleaner and more maintainable code.

---
# PROMISES

### File Operations
Description: Implement a function that reads a file in UTF-8 encoding, applies the transform function on the file's contents, and then writes the transformed data to a new file.
Example usage:
```js
processFile('input.txt', 'output.txt', transform)
  .then(() => console.log('File processing completed.'))
  .catch(error => console.error('Error:', error));
```

## (https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec) PROBLEMS

### Promise Constructor 1
What is the output of this code snippet? 
```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('end');
```

### .then() and resolve()
What is the output of this code snippet?
```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
  console.log(3)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');
``` 

### resolve() not called
What is the output of this code snippet?
```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

promise1.then(res => {
  console.log(2)
})

console.log('end');
```

### Confusing Code
What is the output of this code snippet?
```js
console.log('start')

const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))

console.log('middle')

fn().then(res => {
  console.log(res)
})

console.log('end')
```

### Async or Sync?
What is the output of this code snippet?
```js
console.log('start')

Promise.resolve(1).then((res) => {
  console.log(res)
})

Promise.resolve(2).then((res) => {
  console.log(res)
})

console.log('end')
```

### Advanced Challenges
What is the output of this code snippet?
```js
console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')
```

### Promises vs setTimeout

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});x

console.log(4);
```

### CodingGame JavaScript Promises, Mastering Asynchronous
https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-time-to-pratice-with-promises

### Harder Challenge JavaScript Promises
https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises

### Promise.all()
Harkirat's Promise.all() exercise

### Promise Chain
Harkirat's Promise chain exercise

======================================================
OPTIONAL
======================================================

### Async await
Convert all the promise code written above into the async functions